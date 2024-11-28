---
title: 'Automatic recharge'
type: 'Functional Components'
---

## Automatic recharge

Component name: `ChargeStartComponent`

Component description: 

Automatically return to the charging component. After the component is activated, the robot will navigate to the charging pile and automatically charge it. This is only valid for robots with charging piles.

Example of use:
```java
public onStatusUpdate = (event?: ComponentEvent): boolean => {
    //TODO: state processing
    return true;
};

public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let param = new ChargeStartParam();
    return (
        <>
            <ChargeStartComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is ChargeStartParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `chargeTimeout`: The recharge timeout period. After the automatic recharge fails, it will try again and automatically exit after the timeout. The minimum timeout time is 4 minutes, and the parameter unit is milliseconds.
- `avoidDistance`: Obstacle avoidance distance, used in conjunction with obstacle avoidance timeout, from the start of obstacle avoidance to obstacle avoidance timeout, the robot moving distance is less than this value, the robot is considered to have not moved, and the component automatically exits, the default is 0.1m
- `avoidTimeout`: Obstacle avoidance timeout time

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32710003`: Start to move, constant definition `ComponentStatusConst.STATUS_CHARGE_START_IN_PLACE`
- `32710004`: Start to aim at the charging pile, back to charge, constant definition `ComponentStatusConst.STATUS_VISION_CHARGE_START_GOTO_CHARGING_PILE`
- `32730001`: Start to navigate to the charging pile, constant definition `ComponentStatusConst.STATUS_START_NAVIGATION`
- `32730011`: Start obstacle avoidance, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID_START`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: Automatic recharge is successful, ComponentEvent.data is face data, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `-32620001:` Not located, you need to locate first to navigate to the charging pile, constant definition `ComponentErrorConst.ERROR_NOT_ESTIMATE`
- `-32620022`: No charging pile is set, constant definition `ComponentErrorConst.ERROR_GET_CHARGE_POSE_FAILED`
- `-32620002`: The robot position is outside the map, and the constant definition is `ComponentErrorConst.ERROR_NAVIGATION_OUT_MAP`
- `-32620009`: Navigation path planning failed, unable to navigate to the charging pile, constant definition `ComponentErrorConst.ERROR_NAVIGATION_GLOBAL_PATH_FAILED`
- `-32620023`: Unable to reach the charging pile, constant definition `ComponentErrorConst.ERROR_CHARGE_POINT_CAN_NOT_ARRIVE`
- `-32600007`: Navigation start timeout, constant definition `ComponentErrorConst.ERROR_CHARGE_START_NAVI_TIMEOUT`
- `-32600009`: The robot cannot move, please check whether there are obstacles, constant definition `ComponentErrorConst.ERROR_CHARGE_START_NOT_MOVE`
- `-32600010`: Failed to start PSB recharge, constant definition `ComponentErrorConst.ERROR_CHARGE_START_PSB_FAIL`
- `-32600011`: PSB has no signal, constant definition `ComponentErrorConst.ERROR_CHARGE_START_PBS_NO_SIGNAL`
- `-32600012`: Failed to start visual recharge, constant definition `ComponentErrorConst.ERROR_VISION_CHARGE_START_FAIL`
- `-32600013`: The end of the visual recharge failed, the constant definition `ComponentErrorConst.ERROR_VISION_CHARGE_STOP_FAIL`
- `-32600014`: Visual recharge timeout, default 60s, constant definition `ComponentErrorConst.CHARGE_FAIL_VISION_CHARGE_TIMEOUT`
- `-32620033`: The automatic recharging module has stopped, the default is 60s, and the constant definition is `ComponentErrorConst.CHARGE_FAIL_VISION_CHARGE_TIMEOUT`
- `-32620034`: Charging failed: failed to contact the charging shrapnel, constant definition `ComponentErrorConst.ERROR_VISION_CHARGE_CHARGING_FAIL_UNATTACH_REED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.4.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
