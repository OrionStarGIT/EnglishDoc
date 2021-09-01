---
title: 'Robot Moves Control'
type: 'API Reference (for OPK)'
---

## The robot moves in an arc with obstacle avoidance
Method name: `motionArcWithObstacles`

Calling method:

```
//set motion callback
this.callback = new CommandListener()
this.callback.addListener(
            CommandListener.EVENT_RESULT,
            (result: any) => {
                console.log(TAG, 'motionArcWithObstacles onResult', result);
            }
);
//motion call
RobotApi.motionArcWithObstacles(
            this.callback ? this.callback.getId() : -1,
            this.lineSpeed,
            this.angularSpeed
);
```

Parameter Description: 
- `callbackId`: Callback task ID.
- `lineSpeed`: Linear speed, value range: -1.2 to 1.2 (positive number means forward, negative number means backward).
- `lineSpeed`: Angular velocity, value range: -2.2 ~ 2.2 (positive number means left turn, negative number means right turn)

Note: There is no obstacle avoidance when backing, so make sure use back with caution

Minimum version: 2.8.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>

