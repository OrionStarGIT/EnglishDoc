---
title: 'Basic Motion'
type: 'API Reference'
---

## Linear motion
Method name: goForward / goBackward

Calling method:

```java
CommandListener motionListener = new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //success
        } else {
            //failed
        }
    }
};
RobotApi.getInstance().goForward(reqId, speed, motionListener);
RobotApi.getInstance().goForward(reqId, speed, distance, motionListener);
RobotApi.getInstance().goForward(reqId, speed, distance, avoid, motionListener);
RobotApi.getInstance().goBackward(reqId, speed, motionListener);
RobotApi.getInstance().goBackward(reqId, speed, distance, motionListener);
```

Parameter Description:

- speed: movement speed, unit m/s, range is 0 ~ 1.0, speed greater than 1.0 will move at 1.0
- distance: Movement distance, in m, the value must be greater than 0.
- avoid: Whether to avoid stopping when walking, only moving forward can avoid stopping.

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Rotational movement
Method name: turnLeft / turnRight 

Calling method:

```java
CommandListener rotateListener = new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //success
        } else {
            //failed
        }
    }
};
RobotApi.getInstance().turnLeft(reqId, speed, rotateListener);
RobotApi.getInstance().turnLeft(reqId, speed, angle, rotateListener);
RobotApi.getInstance().turnRight(reqId, speed, rotateListener);
RobotApi.getInstance().turnRight(reqId, speed, angle, rotateListener);
```

Parameter Description:

- speed : rotation speed, unit: degree/s, range is 0 ~ 50 degree/s
- angle : rotation angle, unit: degree, the value must be greater than 0
 
Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Stop
Method name: stopMove

Calling method:

```java
RobotApi.getInstance().stopMove(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //success
        } else {
            //failed
        }
    }
});
``` 

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

*Note: This interface can only be used to stop forward, backward and rotation, and cannot be used to stop navigation and head movement*

## Head movement
Method name: moveHead 

Calling method:

```java
RobotApi.getInstance().moveHead(reqId, hMode, vMode, hAngle, vAngle, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            String status = json.getString("status");
            if (Definition.CMD_STATUS_OK.equals(status)) {
                //success
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
```

Parameter Description:

- hMode : the mode of turning left and right, absolute movement: absolute, relative movement: relative
- vMode : the mode of up and down movement, absolute movement: absolute, relative movement: relative
- hAngle : left and right rotation angle, range: -120 ~ 120
- vAngle : the angle of up and down movement, range: 0 ~ 90
 

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

Note: Please pay attention to the physical limitations of the machine type, the left and right rotation mode of the Mini model is invalid

## Restore the initial angle of the gimbal
Method name: resetHead
 
Method of calling:

```java
RobotApi.getInstance().resetHead(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            String status = json.getString("status");
            if (Definition.CMD_STATUS_OK.equals(status)) {
                //success
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
``` 
 
Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|Yes|

</div>

## Switch camera
Method name: switchCamera 

Calling method:

```java
RobotApi.getInstance().switchCamera(reqId, camera, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            if (Definition.RESPONSE_OK.equals(json.getString("status"))) {
                //success
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
```

Parameter Description:

- camera : camera, String type Definition.JSON_HEAD_FORWARD front camera Definition.JSON_HEAD_BACKWARD rear camera
 

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|No|No|No|No|

</div>

*Note: Please check if the Leopard Secret you are using has a rear camera*