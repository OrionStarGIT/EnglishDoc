---
title: 'Navigation'
type: 'API Reference'
---

## Introduction
Navigation refers to the walking ability of the robot. The robot can move from point A to point B. It can automatically plan a route during the walking process, which can effectively avoid obstacles.

There are many sensors used in robot navigation, including bottom lidar, RGBD, head IR sensor (some models), etc., so please do not block these sensors during navigation to avoid problems such as robot not walking, path planning failure, etc.

The premise that the robot can perform navigation actions is that the robot has created a map, and has successfully positioned on the map, and the radar is turned on. <font color=orange>Please pay attention to this.</font>

## Navigate to the specified location
Method name: startNavigation 

Result callback:

``` java
ActionListener navigationListener = new ActionListener() {
    @Override
    public void onResult(int status, String response) throws RemoteException {
        switch (status) {
            case Definition.RESULT_OK:
                if ("true".equals(response)) {
                    //navigation is successful
                } else {
                    //navigation is failed
                }
                break;
        }
    }
    @Override
    public void onError(int errorCode, String errorString) throws RemoteException {
        switch (errorCode) {
            case Definition.ERROR_NOT_ESTIMATE:
                // not currently located
                break;
            case Definition.ERROR_IN_DESTINATION:
                // robot is already within the destination range
                break;
            case Definition.ERROR_DESTINATION_NOT_EXIST:
                // navigation destination not exist
                break;
            case Definition.ERROR_DESTINATION_CAN_NOT_ARRAIVE:
                // obstacle avoidance timeout, so the destination cannot be reached. timeout period can be set through parameter
                break;
            case Definition.ACTION_RESPONSE_ALREADY_RUN:
                //  current api has been called, please stop before calling again
                break;
            case Definition.ACTION_RESPONSE_REQUEST_RES_ERROR:
                // API that needs to control the chassis has already been called .Please stop first, then continue to call
                break;
            case Definition.ERROR_MULTI_ROBOT_WAITING_TIMEOUT:
                // one robot waiting for other waiting time out.
                break;
            case Definition.ERROR_NAVIGATION_FAILED:
                // the other problem caused failed.
                break;
        }
    }
    @Override
    public void onStatusUpdate(int status, String data) throws RemoteException {
        switch (status) {
            case Definition.STATUS_NAVI_AVOID:
                // the current route has been blocked by obstacles
                break;
            case Definition.STATUS_NAVI_AVOID_END:
                // obstacle disappeared
                break;
            case Definition.STATUS_START_NAVIGATION:
                // start navigation
                break;
            case Definition.STATUS_START_CRUISE:
                // start cruise
                break;
            case Definition.STATUS_NAVI_OUT_MAP:
                // run out of map
                break;
            case Definition.STATUS_NAVI_MULTI_ROBOT_WAITING:
                // start waiting for other robots
                break;
            case Definition.STATUS_NAVI_MULTI_ROBOT_WAITING_END:
                // waiting end
                break;
            case Definition.STATUS_NAVI_GO_STRAIGHT:
                // start go straight
                break;
            case Definition.STATUS_NAVI_TURN_LEFT:
                // start turn left
                break;
            case Definition.STATUS_NAVI_TURN_RIGHT:
                // start turn right
                break;
        }
    }
};
```

**How to use the methods:**

1. Default navigation speed

``` java
RobotApi.getInstance().startNavigation(reqId, destName, coordinateDeviation, time, navigationListener);
```

2. Specify navigation speed (***This calling method is supported in V4.12***)

``` java
RobotApi.getInstance().startNavigation(reqId, destName, coordinateDeviation, time, linearSpeed, angularSpeed, navigationListener);
```
3. Specify the coordinate point (***This calling method is supported in V4.12***)

``` java
RobotApi.getInstance().startNavigation(reqId, pose, coordinateDeviation, time, navigationListener);
```

4. Specify navigation acceleration (***This calling method is supported in V4.12***)(This interface only supports Lucki for the time being)

``` java
RobotApi.getInstance().startNavigation(reqId, destName, coordinateDeviation, time, linearSpeed, angularSpeed, isAdjustAngle, destinationRange, wheelOverCurrentRetryCount, multipleWaitTime, priority, linearAcceleration, angularAcceleration, navigationListener);
```

Parameter Description:

- destName: Navigation destination name (must be set by setLocation first)
- pose: the coordinate point of the navigation destination
- coordinateDeviation: the range of the destination, if the distance to the destination is within this range, it is considered to have been reached
- time : Obstacle avoidance timeout time. If the robot's moving distance does not exceed 0.1m within this time, the navigation will fail, in milliseconds.
- linearSpeed : navigation linear speed, range: 0.1 ~ 0.85 m/s default value: 0.7 m/s
- angularSpeed : Navigation angular speed, range: 0.4 ~ 1.4 m/s Default value: 1.2 m/s The final navigation speed is obtained by combining linear speed and angular speed. Different linear speeds and angular speeds have an impact on the navigation movement mode. It is recommended that the linear speed and Angular speed keeps a certain law: angularSpeed = 0.4 + (linearSpeed-0.1) / 3 * 4
- isAdjustAngle : Whether to adapt to the angle of the heading at the end of the navigation. If false is passed, it will return to the angle when the point is set
- destinationRange : When the target point cannot be reached, the navigation is considered as successful as the distance from the target point
- wheelOverCurrentRetryCount: Number of wheel stall attempts during navigation
- multipleWaitTime : If there are multiple machines waiting during the navigation process, how long will it time out?
- priority : Is 0
- linearAcceleration : Navigation line acceleration, range: 0.4 ~ 0.8 m/s2 Default value: 0.7 m/s2
- angularAcceleration : Navigation angular acceleration, range: 0.4 ~ 0.9 m/s2 Default value: 0.8 m/s2 The final navigation angular acceleration velocity is obtained after linear velocity conversion. Different linear accelerations and angular accelerations have an impact on the navigation motion mode. It is recommended that linear acceleration and Angular acceleration maintains a certain law: angularAcceleration= (linearSpeed / 0.8)

*Note: Before calling this interface, you need to make sure that it has been located*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Stop navigating to the specified location
Method name: stopNavigation

Calling method:

``` java
RobotApi.getInstance().stopNavigation(reqId);
```

*Note: This interface can only be used to stop the navigation started by startNavigation*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Navigate to the specified coordinate point
Method name: goPosition

Result callback:

``` java
CommandListener goPositionListener = new CommandListener() {
    @Override
    public void onResult(int status, String response) {
        switch (status) {
            case Definition.RESULT_OK:
                if ("true".equals(response)) {
                    //navigation succeed
                } else {
                    //navigation failed
                }
                break;
        }
    }
@Override
public void onError(int errorCode, String errorString) throws RemoteException {
    switch (errorCode) {
        case Definition.ACTION_RESPONSE_ALREADY_RUN:
            //api has been called, please stop before calling again
            break;
        case Definition.ACTION_RESPONSE_REQUEST_RES_ERROR:
            // already has an interface call that needs to control the chassis, please stop first, then continue to call
            break;
    }
}
@Override
public void onStatusUpdate(int status, String data) {
    switch (status) {
        case Definition.STATUS_NAVI_AVOID:
            //the current route has been blocked by obstacles
            break;
        case Definition.STATUS_NAVI_AVOID_END:
            //obstacle disappeared
            break;
    }
}
```

Calling method:

``` java
Default speed
try {
    JSONObject position = new JSONObject();
    //x coordinate
    position.put(Definition.JSON_NAVI_POSITION_X, x);
    //y coordinate
    position.put(Definition.JSON_NAVI_POSITION_Y, y);
    //z coordinate
    position.put(Definition.JSON_NAVI_POSITION_THETA, theta);
    RobotApi.getInstance().goPosition(reqId, position.toString(), goPositionListener);
} catch (JSONException e) {
    e.printStackTrace();
}
 
Specify speed <***This calling method is supported in V4.12****>
try {
    JSONObject position = new JSONObject();
    //x coordinate
    position.put(Definition.JSON_NAVI_POSITION_X, x);
    //y coordinate
    position.put(Definition.JSON_NAVI_POSITION_Y, y);
    //z coordinate
    position.put(Definition.JSON_NAVI_POSITION_THETA, theta);
    RobotApi.getInstance().goPosition(reqId, position.toString(),  linearSpeed, angularSpeed, goPositionListener);
} catch (JSONException e) {
    e.printStackTrace();
}
``` 

Parameter Description:

- position : The parameter is the coordinate point in json format {"x": "x coordinate", "y": "y coordinate", "theta: "z coordinate",}
- linearSpeed : navigation linear speed, range: 0.1 ~ 0.85 m/s default value: 0.7 m/s
- angularSpeed：Navigation angular speed, range: 0.4 ~ 1.4 m/s Default value: 1.2 m/s The final navigation speed is obtained by combining linear speed and angular speed. Different linear speeds and angular speeds have an impact on the navigation movement mode. It is recommended that the linear speed and Angular speed keeps a certain law: angularSpeed ​​= 0.4 + (linearSpeed-0.1) / 3 * 4

*Note: Before calling this interface, you need to make sure that it has been located*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Stop navigating to the specified coordinate point
Method name: stopGoPosition 

Calling method:

``` java
RobotApi.getInstance().stopGoPosition(reqId);
```

*Note: `goPosition` and `startNavigation` have a corresponding stop interface, both of which start navigation interfaces, which must be one-to-one correspondence, and cannot be mixed.*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Turn to the direction of the target point
Method name: resumeSpecialPlaceTheta

Method description: The interface will only rotate left and right to the direction of the target point, and will not actually move to the target point.

Calling method:

``` java
RobotApi.getInstance().resumeSpecialPlaceTheta(reqId,
    placeName,
    new CommandListener() {
        @Override
        public void onResponse(int result, String message) {
        }
  });
```

Parameter Description:

- reqId : int type command id
- placeName : String type target point name
- listener : CommandListener type message callback

Return value:

``` java
int result 0 command executed / -1 not executed
```

*Note: Before calling this interface, you need to make sure that it has been located*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
