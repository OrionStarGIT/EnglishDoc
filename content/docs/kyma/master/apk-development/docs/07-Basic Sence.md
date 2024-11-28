---
title: 'Basic Sence'
type: 'API Reference'
---

## Introduction
The basic scenario is a functional component provided by RobotOS. It refers to a scenario function that includes a series of functional strategies. The use of scenario Api can quickly realize basic capabilities such as leading and registration. The function status during operation is notified to the calling side through a callback function, and the developer can follow Business needs participate in decision-making.

## Cruise

### Scene introduction:

Cruise is a code encapsulation of navigation, it let the robot navigate from point A to point B ... and other point. It allow user to set starting point and stopping point, and continuously reports the cruise status.

Currently, the cruise only supports single cruise, and does not support continuous cruise. If necessary, the developer can directly start the next cruise after the single cruise is completed.

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
 


### Start cruising
Method name: startCruise

Result callback:

``` java
ActionListener cruiseListener = new ActionListener() {
    @Override
    public void onResult(int status, String responseString) throws RemoteException {
        Log.i(TAG, "startCruise onResult : " + status + " || " + responseString);
        switch (status) {
            case Definition.RESULT_OK:
                //cruise completed
                break;
            case Definition.ACTION_RESPONSE_STOP_SUCCESS:
                //During the cruise, use stopCruise and stop the cruise successfully
                break;
        }
    }
    @Override
    public void onStatusUpdate(int status, String data) throws RemoteException {
        Log.i(TAG, "startCruise onStatusUpdate : " + status + " || " + data);
        switch (status) {
            case Definition.STATUS_NAVI_OUT_MAP:
                //The target point cannot be reached, the cruise point is outside the map, please reset the cruise route
                break;
            case Definition.STATUS_START_CRUISE:
                //Start cruising
                break;
            case Definition.STATUS_CRUISE_REACH_POINT:
                int index = Integer.parseInt(data);
                //the number of cruise points has reached
                break;
            case Definition.STATUS_NAVI_AVOID:
                //The current cruise route has been blocked by obstacles
                break;
            case Definition.STATUS_NAVI_AVOID_END:
                //obstacles removed
                break;
        }
    }
    @Override
    public void onError(int errorCode, String errorString) throws RemoteException {
        Log.i(TAG, "startCruise onError : " + errorCode + " || " + errorString);
        switch (errorCode) {
            case Definition.ACTION_RESPONSE_ALREADY_RUN:
                //Cruise is already in progress
                break;
            case Definition.ERROR_NOT_ESTIMATE:
                //Not currently located
                break;
            case Definition.ERROR_NAVIGATION_FAILED:
                //Cruise point navigation failed
                break;
            case Definition.ACTION_RESPONSE_REQUEST_RES_ERROR:
                //There are already interface calls that need to control the chassis (for example: leading, navigation, etc.), please stop first, then continue to call
                break;
        }
    }
};
```

Calling method:

- Default speed
``` java
RobotApi.getInstance().startCruise(reqId, route, startPoint, dockingPoints, cruiseListener);
```

- Custom speed
``` java
RobotApi.getInstance().startCruise(reqId, route, startPoint, dockingPoints, linearSpeed, angularSpeed, cruiseListener);
```

parameter

- `route`: cruise route, collection of coordinate points
- `startPoint`: subscript of the starting point of the cruise, starting from the first point
- `dockingPoints`: The subscript of the docking point. By default, it will directly start to navigate to the next cruise point within 0.5m of reaching the cruise point. The docking point must be in the coordinate and direction before it is considered to be reached, and then continue to the next target point
- `linearSpeed`: navigation linear speed, range: 0.1 ~ 0.85 m/s default value: 0.7 m/s
- `angularSpeed`：Navigation angular speed, range: 0.4 ~ 1.4 m/s Default value: 1.2 m/s The final navigation speed is obtained by combining linear speed and angular speed. Different linear speeds and angular speeds have an impact on the navigation movement mode. It is recommended that the linear speed and Angular speed keeps a certain law: angularSpeed ​​= 0.4 + (linearSpeed-0.1) / 3 * 4

### Stop cruising
Method name: stopCruise

Calling method:

``` java
RobotApi.getInstance().stopCruise(reqId);
``` 



## Wake-up
### Scene introduction:

The wake-up scene means that the robot controls the robot to rotate to the user's angle according to the sound source direction of the wake-up word.

*Greetbot strategy:*
>When the angle is less than 45 degrees, only the head will be rotated. 
>
>When the angle is greater than 45 degrees, both the head and the chassis will rotate and rotate to the target angle of the sound source location at the fastest speed.

*Mini strategy:* 
>According to the sound source position, rotate the chassis to the sound source position.

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

 

### Start to wake up
Method name: wakeUp

Calling method:
``` java
RobotApi.getInstance().wakeUp(reqId, angle, new ActionListener() {
    @Override
    public void onResult(int status, String responseString) throws RemoteException {
        switch (status) {
            case Definition.RESULT_OK:
                //Wake up completed
                break;
            case Definition.ACTION_RESPONSE_STOP_SUCCESS:
                //During the wake-up process, call stopWakeUp actively to stop waking up
                break;
        }
    }
    @Override
    public void onError(int errorCode, String errorString) throws RemoteException {
        switch (errorCode) {
            case Definition.ERROR_MOVE_HEAD_FAILED:
                //Head gimbal movement failed
                break;
            case Definition.ACTION_RESPONSE_ALREADY_RUN:
                //Currently waking up, you need to stop the last waking up
                break;
            case Definition.ACTION_RESPONSE_REQUEST_RES_ERROR:
                //There is already an interface call that needs to control the chassis (for example: leading, navigation, etc.), please stop first before continuing to call
                break;
        }
    }
});
```
Parameter Description:

- `angle`: The sound source positioning angle, which is obtained through the onSendRequest callback of ModuleCallback. When the voice is awakened, reqType is Definition.REQ_SPEECH_WAKEUP, and reqParams is the sound source positioning angle



### Stop waking up

Method name: stopWakeUp

Calling method:
``` java
RobotApi.getInstance().stopWakeUp(reqId);
```
