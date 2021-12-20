---
title: 'System Functions'
type: 'API Reference'
---

## Set lighting effect
Method name: `setLight`

Calling method:
``` java
JSONObject params = new JSONObject();
try {
    params.put(Definition.JSON_LAMB_TYPE, type);
    params.put(Definition.JSON_LAMB_TARGET, 0);
    params.put(Definition.JSON_LAMB_RGB_START, startColor);
    params.put(Definition.JSON_LAMB_RGB_END, endColor);
    params.put(Definition.JSON_LAMB_START_TIME, startTime);
    params.put(Definition.JSON_LAMB_END_TIME, endTime);
    params.put(Definition.JSON_LAMB_REPEAT, loopTime);
    params.put(Definition.JSON_LAMB_ON_TIME, duration);
    params.put(Definition.JSON_LAMB_RGB_FREEZE, finalColor);
} catch (JSONException e) {
    e.printStackTrace();
}
RobotApi.getInstance().setLight(0, params.toString(), null);
```

Parameter Description:

- `reqId`: int type command id
- `params`: String type, can contain the following parameters: type-Lighting effect type start-Start color end-End color startTime-Start time endTime-End time repeat-Loop times onTime-Duration freese-end lighting color
- `listener`: ActionListener type message callback
- `Color value`: 16-bit string in RGB arrangement, such as "F3F3F3" or "00FF00".

Return Value:
``` java
int result 0 command executed / -1 not executed
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|No|Yes|Yes|No|

</div>



## Get local SN
Method name: `getRobotSn`

Calling method:
``` java
boolean status = RobotApi.getInstance().getRobotSn(
    new CommandListener() {
        @Override
        public void onResult(int result, String message) {
            if (Definition.RESULT_OK == result) {
                String serialNum = message;
            } else {
            }
        }
    });
```

Parameter Description:

- `listener`: `CommandListener` message callback `{"code":0, "message":"err msg"}`

Return Value:

``` java
int result 1 command executed / -1 not executed
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Get the system version
Method name: getVersion

Calling method:
``` java
String version = RobotApi.getInstance().getVersion();
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Prohibit system functions

### The system no longer takes over the emergency stop event, there is no emergency stop screen, but the robot cannot use the motion function, other abilities can be used

Method name: disableEmergency

Calling method:

``` java
RobotApi.getInstance.disableEmergency();
```

API for obtaining Emergency status:

``` java
RobotApi.getInstance().getRobotStatus(Definition.STATUS_EMERGENCY,new StatusListener(){
            @Override
            public void onStatusUpdate(String type, String data) throws RemoteException {
                Log.d("onStatusUpdate","Status:"+data);
            }
        });
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

### Disable the current battery interface, you can use any ability of the client app except the chassis when charging

Method name: disableBattery

Calling method:

``` java
RobotApi.getInstance().disableBattery();
```

API for obtaining Emergency status:

``` java
RobotSettingApi.getInstance().getRobotString(Definition.ROBOT_SETTINGS_BATTERY_INFO);
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

### Disable function keys, the button behind the head of Lucky Leopard, used to terminate the current task

Method name: disableFunctionKey

Calling method:

``` java
RobotApi.getInstance().disableFunctionKey();
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|No|No|Yes|No|No|

</div>

## Dormant

Scene introduction:

``` java
Hibernation is a mode that allows the robot to keep running at low power consumption when there is no task or when the battery is low
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|No|No|Yes|No|No|

</div>

### Hibernate

Method name: robotStandby

Calling method:

``` java
RobotApi.getInstance().robotStandby(0, new CommandListener() {
    @Override
    public void onStatusUpdate(int status, String data, String extraData) {
        super.onStatusUpdate(status, data, extraData);
    }
});
```

### Stop hibernation

Method name: robotStandbyEnd

Calling method:

``` java
RobotApi.getInstance().robotStandbyEnd(reqId);
```
