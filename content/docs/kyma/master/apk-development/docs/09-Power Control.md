---
title: 'Power Control'
type: 'API Reference'
---

## Start automatic recharging
Method name: `startNaviToAutoChargeAction`

Calling method:

```java
RobotApi.getInstance().startNaviToAutoChargeAction(reqId, timeout, new ActionListener() {
    @Override
    public void onResult(int status, String responseString) throws RemoteException {
        switch (status) {
            case Definition.RESULT_OK:
                //Charged successfully
                break;
            case Definition.RESULT_FAILURE:
                //Charging failed
                break;
        }
    }
    @Override
    public void onStatusUpdate(int status, String data) throws RemoteException {
        switch (status) {
            case Definition.STATUS_NAVI_GLOBAL_PATH_FAILED:
                //Global path planning failed
                break;
            case Definition.STATUS_NAVI_OUT_MAP:
                //The target point cannot be reached, and the leading destination is outside the map. It is possible that the map does not match the location point. Please reset the location point
                break;
            case Definition.STATUS_NAVI_AVOID:
                //The route to the recharge point has been blocked by obstacles
                break;
            case Definition.STATUS_NAVI_AVOID_END:
                //Obstacles have been removed
                break;
            default:
                break;
        }
    }
});
```

Parameter Description:

- `timeout` : Navigation timeout time. If the charging pile is not reached within this time, it is considered that the recharge has failed.

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>



## End of automatic recharge
Method name: `stopAutoChargeAction`

Calling method:
```java
RobotApi.getInstance().stopAutoChargeAction(reqId, true);
```

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>



## Stop charging and leave the charging pile
Method name: `stopChargingByApp`

Calling method:

```java
RobotApi.getInstance().stopChargingByApp();
``` 

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>

*Note: The line charging method cannot be used to disconnect from charging*
