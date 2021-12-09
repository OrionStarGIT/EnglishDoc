---
title: 'Robot Movement Control'
type: 'Functional Components'
---

## Robot head control
Component name: `HeadTurnComponent`

Component description: 

It is used to control the head to turn left and right, and nod up and down. Executed only once.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    return true;
};

public render() {
    let headTurnParam = new HeadTurnParam(
        HeadTurnMode.absolute, 0, 60, HeadTurnMode.absolute, 70, 60);

    return (
        <>
            <HeadTurnComponent
                param={headTurnParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

Attributes:

- `param`: component parameter, the type is HeadTurnParam
- `onFinish`: callback when component execution ends

Parameter Description:

- `horizontalMode`: head left and right rotation mode,'absolute' absolute angle'relative' relative angle, the default is relative angle
- `horizontalAngle`: left and right rotation angle
- `verticalMode`: head vertical rotation mode,'absolute' absolute angle'relative' relative angle, the default is relative angle
- `verticalAngle`: vertical rotation angle


Result description:

***Note: Please use the constant definition to determine the result during development, the result code may be changed in subsequent versions.***

Get the result code through `ComponentEvent.status`:

- `32610015`: Successful execution, constant definition `ComponentResultConst.RESULT_HEAD_TURN_SUCCESS`
- `-32610013`: Invalid parameter, constant definition `ComponentErrorConst.ERROR_PARAMS_HEAD_TURN_BEAN_INVALID`
- `-32630005`: Head movement timeout, constant definition `ComponentErrorConst.ERROR_HEAD_TURN_TIMEOUT`
- `-32630006`: Head movement failed, constant definition `ComponentErrorConst.ERROR_HEAD_TURN_FAILED`
- `-32630007`: Head movement is interrupted, constant definition `ComponentErrorConst.ERROR_HEAD_TURN_INTERRUPT`

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Robot basic motion
Component name: `BasicMotionComponent`

Component description: 

The basic motion component of the robot is used to control the forward, backward and left-right rotation of the robot.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let basicMotionParam = new BasicMotionParam(BasicMotionMode.goForward, 0.5, 2);
    return (
        <>
            <BasicMotionComponent
                param={basicMotionParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

Attributes:

- `param`: component parameter, type BasicMotionParam
- `onFinish`: callback when component execution ends

Parameter Description:

- `mode`: the direction of motion, the type is BasicMotionMode, goForward (forward), goBackward (backward), turnLeft (left turn), turnRight (right turn)
- `linearSpeed`: moving speed (valid for forward and backward)
- `distance`: moving distance (valid for forward and backward)
- `angularSpeed`: rotation speed (valid when turning left and right)
- `angle`: rotation angle (valid when turning left and right)
- `avoidStop`: whether to enable stop avoidance, true enable false not enable, after enabling stop avoidance, it will automatically stop when encountering obstacles.

Result description:

***Note: Please use the constant definition to determine the result during development, the result code may be changed in subsequent versions.***

Get the result code through `ComponentEvent.status`:

- `32610001`: Successful execution, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `32610019`: Stop successfully, constant definition `ComponentErrorConst.RESULT_MOTION_STOP_SUCCESS`
- `-32610018`: The basic motion parameter is invalid, the constant definition is `ComponentErrorConst.ERROR_PARAMS_BASIC_MOTION_BEAN_INVALID`
- `-32610011`: Parameter parsing error, constant definition `ComponentErrorConst.ERROR_PARAMS_JSON_PARSER_ERROR`
- `-32620029`: Basic motion avoidance, constant definition `ComponentErrorConst.ERROR_MOTION_AVOID_STOP`
- `-32600002`: Chassis capability request failed, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_FAILED`

Minimum version: 1.35.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Robot sound source localization
Component name: `SoundLocalizationComponent`

Component description: 

It is mainly used to quickly rotate to a specified angle according to the direction of the sound source when awakening. It supports simultaneous rotation of the head and body to increase the rotation speed and facilitate subsequent face recognition and tracking.

Example of use:
```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let soundLocalizationParam = new SoundLocalizationParam(30, true, true);
    return (
        <>
            <SoundLocalizationComponent
                param={soundLocalizationParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

Attributes:

- `param`: component parameter, type BasicMotionParam
- `onFinish`: callback when component execution ends

Parameter Description:

- `angle`: Wake-up angle (the angle will be included in the wake-up command parameter)
- `isNeedMoveBody`: whether to rotate the body
- `isNeedMoveHead`: Whether to turn the head

Result description:

***Note: Please use the constant definition to determine the result during development, the result code may be changed in subsequent versions.***

Get the result code through `ComponentEvent.status`:

- `32610001`: Successful execution, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `-32610008`: Angle parameter is invalid, constant definition ComponentErrorConst.ERROR_PARAMS_SOUND_LOCALIZATION_ANGLE_INVALID
- `-32600001`: The same component is already running, and the previous component needs to be stopped before it can be used normally. Constant `definition ComponentErrorConst.ERROR_REQUEST_RES_BUSY`
- `-32600002`: Failed to apply for permission, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_FAILED`

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|Yes|No|

</div>


[Download sample code here.]()
