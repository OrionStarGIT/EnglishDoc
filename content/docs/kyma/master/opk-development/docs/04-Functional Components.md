---
title: 'Functional Components'
description: 'update: 2021-07-01'
---

# Robot Movement Control

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

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
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

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
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

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|Yes|No|

</div>


[Download sample code here.]()



# Navigation & Cruise

## Navigation
Component name: `NavigationComponent`

Component description: 

Navigation component, used to control the robot to go to the specified location.

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
     let navigationParam = new NavigationParam(destination, undefined
            , undefined, undefined, undefined, undefined, undefined, undefined
            , linearSpeed, angularSpeed);
    return (
        <>
            <NavigationComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is NavigationParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `destination`: The name of the destination, it is required, cannot be empty, otherwise a crash exception will be thrown
- `coordinate_deviation`: the range of the destination, within the range of the destination are considered normal arrival, the default is 0.5 meters
- `moving_timeout_time`: The robot has not moved timeout time, the default is 20000 milliseconds. If the robot does not move after this time, the navigation fails
- `max_avoid_count`: the number of blocked state detections. After the robot is blocked, it will be checked once in a while. If the robot is blocked after this number of times, it is considered that the navigation has failed. The default is 5 times.
- `avoid_interval_time`: Interval time of blocking state detection, default is 1000 milliseconds
- `auto_reset_estimate`: If positioning is lost during navigation, whether to try automatic repositioning, the default is true
- `param_reset_estimate_count`: the number of relocation attempts, the default is 5
- `get_distance_interval_time`: Distance information reporting interval time, the default is 1000 milliseconds
- `param_linear_speed`: navigation linear speed, optional, range 0.1-1.2 m/s
- `param_angular_speed`: navigation angular speed, optional, range 0.2-1.8 rad/s (1rad=180°/π, about 57.3°)
- `param_is_adjust_angle`: When reaching the target point, whether the orientation of the machine is in accordance with the forward direction or the direction when the position is set, true is the forward direction, false is the direction when the position is set, the default is false
- `param_is_need_avoid_notify_immediately`: immediately report the status of being blocked by an obstacle, the default is false (introduced in version 1.34.0)
- `param_destination_range`: When the target point is not reachable, the distance range to stop near the target point, the default is 0 meters (introduced in version 1.34.0)

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32730001`: Start navigation, constant definition `ComponentStatusConst.STATUS_START_NAVIGATION`
- `32730011`: The robot is blocked by an obstacle, and the constant is defined `ComponentStatusConst.STATUS_NAVIGATION_AVOID_START`
- `32730003`: The obstacle has been removed, you can move forward normally, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID_END`
- `32730004`: When stop avoidance is triggered, it will actively stop avoidance when encountering a moving obstacle. Constant definition `ComponentStatusConst.STATUS_OBSTACLES_AVOID`
- `32730002`: Number of blocked state detections, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID`
- `32730009`: Positioning lost, constant definition `ComponentStatusConst.STATUS_ESTIMATE_LOST`
- `32730005`: Report the distance to the target point, constant definition `ComponentStatusConst.STATUS_DISTANCE_WITH_DESTINATION`
- `32730010`: The target point is approaching, constant definition `ComponentStatusConst.STATUS_NAVIGATION_NEAR_DESTINATION`
- `32730016`: Relocation is successful, you can continue to navigate, constant definition `ComponentStatusConst.STATUS_NAVIGATION_RESET_ESTIMATE_SUCCESS`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610007`: Navigation is successful, `ComponentEvent.data` is face data, constant definition `ComponentResultConst.RESULT_NAVIGATION_ARRIVED`
- `32610009`: Navigation failed to start, constant definition `ComponentResultConst.RESULT_NAVIGATION_FAILURE`
- `-32610004`: Invalid location point name, constant definition `ComponentErrorConst.ERROR_PARAMS_PLACE_NAME_INVALID`
- `-32620001`: Currently not positioned, constant definition `ComponentErrorConst.ERROR_NOT_ESTIMATE`
- `-32620015`: It is currently within the range of the target position, and the constant is defined `ComponentErrorConst.ERROR_NAVIGATION_ALREADY_IN_DESTINATION`
- `-32620007`: Navigation target point does not exist, constant definition `ComponentErrorConst.ERROR_DESTINATION_NOT_EXIST`
- `-32600001`: There is already navigation running, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_BUSY`
- `-32600002`: Chassis resources have been occupied, please check whether there are sports components running, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_FAILED`
- `-32620002`: The navigation target point is outside the map, and the constant definition is `ComponentErrorConst.ERROR_NAVIGATION_OUT_MAP`
- `-32620009`: Global path planning failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_GLOBAL_PATH_FAILED`
- `-32620014`: Relocation attempt failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_RESET_ESTIMATE_FAIL`
- `-32620008`: The robot has not moved for a long time, and the constant is defined `ComponentErrorConst.ERROR_DESTINATION_CAN_NOT_ARRIVE`
- `-32620006`: The robot is blocked by obstacles for a long time, and the constant is defined `ComponentErrorConst.ERROR_NAVIGATION_AVOID_TIMEOUT`
- `-32610011`: Parameter parsing failed, constant definition `ComponentErrorConst.ERROR_PARAMS_JSON_PARSER_ERROR`

**Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.**

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Navigation (head facing back)
Component name: `NavigationBackComponent`

Component description: 

Navigation component, the head will turn to the back during navigation, it is only effective on Leopard Secret model, and the effect is equivalent to NavigationComponent on other models.

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
    let param = new NavigationBackParam(destination);
    return (
        <>
            <NavigationBackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type NavigationBackParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `destination`: The name of the destination, it is required and cannot be empty, otherwise a crash exception will be thrown
- `coordinate_deviation`: the range of the destination, within the range of the destination are considered normal arrival, the default is 0.5 meters
- `moving_timeout_time`: The robot has not moved timeout time, the default is 20000 milliseconds. If the robot does not move after this time, the navigation fails
- `max_avoid_count`: the number of blocked state detections. After the robot is blocked, it will be checked once in a while. If the robot is blocked after this number of times, it is considered that the navigation has failed. The default is 5 times.
- `avoid_interval_time`: Interval time of blocking state detection, default is 1000 milliseconds
- `auto_reset_estimate`: If positioning is lost during navigation, whether to try automatic repositioning, the default is true
- `param_reset_estimate_count`: the number of relocation attempts, the default is 5
- `get_distance_interval_time`: Distance information reporting interval time, the default is 1000 milliseconds
- `param_linear_speed`: navigation linear speed, optional, range 0.1-1.2 m/s
- `param_angular_speed`: navigation angular speed, optional, range 0.2-1.8 rad/s (1rad=180°/π, about 57.3°)

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32730001`: Start navigation, constant definition `ComponentStatusConst.STATUS_START_NAVIGATION`
- `32730011`: The robot is blocked by an obstacle, and the constant is defined `ComponentStatusConst.STATUS_NAVIGATION_AVOID_START`
- `32730003`: The obstacle has been removed, you can move forward normally, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID_END`
- `32730004`: When stop avoidance is triggered, it will actively stop avoidance when encountering a moving obstacle. Constant definition `ComponentStatusConst.STATUS_OBSTACLES_AVOID`
- `32730002`: Number of blocked state detections, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID`
- `32730009`: Positioning lost, constant definition `ComponentStatusConst.STATUS_ESTIMATE_LOST`
- `32730005`: Report the distance to the target point, constant definition `ComponentStatusConst.STATUS_DISTANCE_WITH_DESTINATION`
- `32730010`: The target point is approaching, constant definition `ComponentStatusConst.STATUS_NAVIGATION_NEAR_DESTINATION`
- `32730016`: Relocation is successful, you can continue to navigate, constant definition `ComponentStatusConst.STATUS_NAVIGATION_RESET_ESTIMATE_SUCCESS`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610007`: Navigation is successful, ComponentEvent.data is face data, constant definition `ComponentResultConst.RESULT_NAVIGATION_ARRIVED`
- `32610009`: Navigation failed to start, constant definition `ComponentResultConst.RESULT_NAVIGATION_FAILURE`
- `-32610004`: Invalid location point name, constant definition `ComponentErrorConst.ERROR_PARAMS_PLACE_NAME_INVALID`
- `-32620001`: Currently not positioned, constant definition `ComponentErrorConst.ERROR_NOT_ESTIMATE`
- `-32620015`: It is currently within the range of the target position, and the constant is defined `ComponentErrorConst.ERROR_NAVIGATION_ALREADY_IN_DESTINATION`
- `-32620007`: Navigation target point does not exist, constant definition `ComponentErrorConst.ERROR_DESTINATION_NOT_EXIST`
- `-32600001`: There is already navigation running, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_BUSY`
- `-32600002`: Chassis resources have been occupied, please check whether there are sports components running, constant definition `ComponentErrorConst.ERROR_REQUEST_RES_FAILED`
- `-32620002`: The navigation target point is outside the map, and the constant definition is `ComponentErrorConst.ERROR_NAVIGATION_OUT_MAP`
- `-32620009`: Global path planning failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_GLOBAL_PATH_FAILED`
- `-32620014`: Relocation attempt failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_RESET_ESTIMATE_FAIL`
- `-32620008`: The robot has not moved for a long time, and the constant is defined `ComponentErrorConst.ERROR_DESTINATION_CAN_NOT_ARRIVE`
- `-32620006`: The robot is blocked by obstacles for a long time, and the constant is defined `ComponentErrorConst.ERROR_NAVIGATION_AVOID_TIMEOUT`
- `-32610011`: Parameter parsing failed, constant definition `ComponentErrorConst.ERROR_PARAMS_JSON_PARSER_ERROR`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|No|No|No|No|

</div>

## Cruise
Component name: `CruiseComponent`

Component description: 

Patrol component, can specify a group of places, the robot continues to travel on the specified route.

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
    let route = ['reception point','meeting room','front desk'];
    let param = new CruiseParam(JSON.stringify(route));
    return (
        <>
            <CruiseComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type CruiseParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `cruise_route_list`: patrol route, a group of location point names, type is Json array string, required item, valid location points cannot be less than 2.
- `cruise_is_need_dock`: Whether to dock at the patrol point, the default is false.
- `cruise_point_avoid_time_out`: the timeout period for being blocked by obstacles during the patrol process, and automatically go to the next patrol point after the timeout.
- `cruise_is_check_points_exit`: Whether to end the patrol if a location point in the patrol route is deleted, the default is to skip the missing point and continue the patrol.
- `cruise_start_index`: Specify the starting point of the patrol
- `param_reset_estimate_count`: the number of relocation attempts, the default is 5.
- `cruise_linear_speed`: navigation linear speed, optional, range 0.1-1.2 m/s
- `cruise_angular_speed`: navigation angular speed, optional, range 0.2-1.8 rad/s (1rad=180°/π, about 57.3°)

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32730013`: Start patrol, constant definition `ComponentStatusConst.STATUS_START_CRUISE`
- `32730014`: Reach a certain patrol point, constant definition `ComponentStatusConst.STATUS_CRUISE_REACH_POINT`
- `32730012`: Ready to go to the next patrol point, constant definition `ComponentStatusConst.STATUS_CRUISE_AVOID_GO_NEXT_POINT`
- `32730001`: Start to patrol point, constant definition `ComponentStatusConst.STATUS_START_NAVIGATION`
- `32730004`: When stop avoidance is triggered, it will actively stop avoidance when encountering a moving obstacle. Constant definition `ComponentStatusConst.STATUS_OBSTACLES_AVOID`
- `32730011`: The robot has been blocked by an obstacle, and the constant is defined `ComponentStatusConst.STATUS_NAVIGATION_AVOID_START`
- `32730003`: Obstacles have been removed, constant definition `ComponentStatusConst.STATUS_NAVIGATION_AVOID_END`
- `32730015`: skip a patrol point, constant definition `ComponentStatusConst.STATUS_CRUISE_AVOID_POINT`
- `32730016`: Relocation is successful, you can continue to patrol, constant definition `ComponentStatusConst.STATUS_NAVIGATION_RESET_ESTIMATE_SUCCESS`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: The patrol ended successfully, the constant definition `ComponentResultConst.RESULT_SUCCESS`
- `-32610011`: Parameter parsing failed, constant definition `ComponentErrorConst.ERROR_PARAMS_JSON_PARSER_ERROR`
- `-32610017`: The index of the starting patrol position is wrong, and the constant definition is `ComponentErrorConst.ERROR_PARAMS_CRUISE_START_INDEX_INVALID`
- `-32610016`: The number of effective patrol points is less than 2, and the constant definition is `ComponentErrorConst.ERROR_PARAMS_CRUISE_ROUTE_INVALID`
- `-32620005`: Error in getting the list of location points on the current map, please go to the map tool to check, constant definition `ComponentErrorConst.ERROR_GET_PLACE_LIST_FAILED`
- `-32620013`: The current map has not set the location point, please go to the map tool to set it, and the constant definition `ComponentErrorConst.ERROR_GET_PLACE_LIST_EMPTY`
- `-32620019`: The patrol point does not exist, it is valid after the patrol point check is turned on, and the constant definition is `ComponentErrorConst.ERROR_CRUISE_POINT_NOT_EXIT`
- `-32620002`: The robot or patrol point is outside the map, the constant definition `ComponentErrorConst.ERROR_NAVIGATION_OUT_MAP`
- `-32620009`: Global path planning failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_GLOBAL_PATH_FAILED`
- `-32620001`: Currently not positioned, constant definition `ComponentErrorConst.ERROR_NOT_ESTIMATE`
- `-32610021`: Failed to go to patrol point, constant definition `ComponentErrorConst.ERROR_CRUISE_GO_POSITION_FAILED`
- `-32600001`: There is currently a patrol component running, and the constant is defined `ComponentErrorConst.ERROR_REQUEST_RES_BUSY`
- `-32620028`: All patrol points of the current patrol route cannot be reached normally, and the constant definition is `ComponentErrorConst.ERROR_CRUISE_PERSISTENT_IMMOBILITY`
- `-32620014`: Relocation attempt failed, constant definition `ComponentErrorConst.ERROR_NAVIGATION_RESET_ESTIMATE_FAIL`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>
 


# Face recognition

## Wake-up and pre-wake-up detection

Component name: `WakeupAndPreWakeupStartCheckComponent`

Component description: 

Face recognition component, which can support ordinary face recognition (pre-wake up) and accurate face recognition (satisfy the wake-up condition). Normal face recognition can only recognize faces, but cannot follow-up tracking. Accurate faces Recognition can generate an id based on facial features, and then continue tracking based on the id (refer to the face tracking component). If the identified person has registered detailed information (refer to the face registration component for registration methods), the component can return to include Details including name, etc.

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
    let wakeupParam = new WakeupAndPreWakeupStartCheckParam(true, 3, 1.3, 45, true, undefined, true, 5 * 1000, undefined);
    return (
        <>
            <WakeupAndPreWakeupStartCheckComponent
                param={wakeupParam}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type WakeupAndPreWakeupStartCheckParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `isNeedPreWakeup`: whether pre-wakeup is required, if set to false, there will be no pre-wakeup state callback, the default is true
- `maxDistance`: The maximum distance of face recognition. Face data exceeding this distance are automatically ignored. The default is 3 meters.
- `wakeupFaceDistance`: The maximum distance to wake up. If the distance exceeds this distance, the wakeup callback will not be triggered. The default is 1.3 meters.
- `wakeupFaceAngleX`: The maximum angle of wakeup. If the face angle is greater than this value, the wakeup callback will not be triggered. The default is 45 degrees.
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is true
- `incompleteFaceCacheTimeout`: incomplete face detection cache time, default 3000 milliseconds
- `isPreWakeupNeedBody`: Whether to trigger the pre-wakeup callback when the human body is detected, the default is true
- `preWakeupIntervalTime`: the interval time between two pre-wakeups, below this value, the pre-wakeup will not be triggered again, the default is 20000 milliseconds
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds
- `isWakeupNeedRecognize`: Whether to wake up to get the detailed information of registration (this parameter is only valid on Leopard big screen)

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32710001`: The pre-wakeup condition has been met, the component will not stop after the pre-wakeup is met, and will continue to perform more detailed identification, constant definition `ComponentStatusConst.STATUS_PRE_WAKEUP`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: The wake-up condition is met, ComponentEvent.data is face data, and the constant is defined as ComponentResultConst.RESULT_SUCCESS
- `-32600004`: Failed to obtain face data, constant definition ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED

**Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.**

**Face data description:**

The returned face data can be obtained through `ComponentEvent.data`. The value is a json string:

- `id`: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- `name`: registered name, the identified person has not been registered, the value is empty
- `angle`: face angle
- `distance`: distance
- `facewidth`: face width
- `faceheight`: face height
- `faceX`: the x coordinate of the face
- `faceY`: the y coordinate of the face

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Find people based on conditions
Component name: `PersonAppearComponent`

Component description: 

It is used to judge whether there are people who meet the conditions. When there are people who meet the conditions, the component will automatically call back the result and end the operation.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};
public personAppearOnUpdate = (event: any): boolean => {
    //If a face is detected, a cut-out face photo can be obtained from event.data
}

public render() {
    let personAppearParam = new PersonAppearParam();
    return (
        <>
            <PersonAppearComponent
                param={personAppearParam}
                onFinish={this.onFinish}
                onStatusUpdate={this.personAppearOnUpdate}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type PersonAppearParam
- `onFinish`: callback when component execution ends
- `onStatusUpdate`: callback when component status changes

**Parameter Description:**

- `personId`: Find according to id, used to detect the face of a specific id, default -1
- `personName`: used to detect the face of a specific name, the default is empty
- `maxDistance`: The maximum distance of detection, the default is 3 meters, face data beyond this distance is automatically ignored
- `maxFaceAngleX`: The maximum face angle detected, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is false
- `incompleteFaceCacheTimeout`: incomplete face detection cache time, default 3000 milliseconds
- `isNeedBody`: Whether to detect the human body, the default is false
- `isNeedRecognize`: Whether to recognize detailed information, the default is true
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds
- `appearTimeout`: detection timeout time, the default is 7000 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: detection is successful, `ComponentEvent.data` is face data, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `32610003`: No qualified person is detected in timeout, constant definition `ComponentResultConst.RESULT_TIMEOUT`
- `-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

**Face data description:**

The returned face data can be obtained through `ComponentEvent.data`. The value is a json string:

- `id`: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- `name`: registered name, the identified person has not been registered, the value is empty
- `angle`: face angle
- `distance`: distance
- `facewidth`: face width
- `faceheight`: face height
- `faceX`: the x coordinate of the face
- `faceY`: the y coordinate of the face

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Detect whether the person is missing
Component name: `PersonDisappearComponent`

Component description: 

It is used to detect whether the qualified person is lost, and the result callback will be triggered when the qualified person does not appear for a period of time.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let personDisappearParam = new PersonDisappearParam();
    return (
        <>
            <PersonDisappearComponent
                param={personDisappearParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type PersonDisappearParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: ID of the face to be checked, default -1
- `personName`: The name of the person to be detected, empty by default
- `maxDistance`: The maximum distance of detection, the default is 3 meters, face data beyond this distance is automatically ignored
- `maxFaceAngleX`: The maximum face angle detected, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is `false`
- `isNeedBody`: Whether to detect the human body, the default is false
- `disappearTimeout`: After the person is lost, the component will continue to perform face recognition until no data that meets the conditions is found for more than this time, it will actively exit
- `lostTimeout`: How long does the face data that do not meet the conditions last, then it is considered that the person is lost, and the person's lost status will be reported, but the component will not exit, and must be smaller than `disappearTimeout`

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32710014`: Person has been lost, constant definition `ComponentStatusConst.STATUS_PERSON_LOST_TIMEOUT`

**Result description:**

Get the result code through `ComponentEvent.status`:

`32610003`: No qualified person is detected in timeout, constant definition `ComponentResultConst.RESULT_TIMEOUT`
`-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Face registration

Component name: `RegisterComponent`

Component description: 

Register personal information. The registered information can be obtained during face recognition. If it is already registered, call it again to modify the registration information.

Example of use:
```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let registerParam = new RegisterParam(name);
    return (
        <>
            <RegisterComponent
                param={registerParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is RegisterParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personName`: the name of the registrant, required
- `photoPath`: The path of the picture, if the path is empty, it will be automatically recognized to obtain the face photo
- `personAppearTimeout`: Face detection timeout time, continuous no face detection, failure to exit, default 2000 milliseconds
- `recognizeTimeOut`: Recognition timeout time, continuous failure to obtain face photos, failure to exit, default 800 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610010`: Registration is successful, constant definition `ComponentResultConst.RESULT_REGISTER_SUCCESS`
- `32610011`: The name modification is successful, and the constant is defined `ComponentResultConst.RESULT_MODIFY_NAME_SUCCESS`
- `32610003`: Registration failed, constant definition `ComponentResultConst.RESULT_TIMEOUT`
- `-32640013`: Invalid picture, constant definition `ComponentErrorConst.ERROR_REGISTER_PICTURE_INVALID`
- `-32640011`: Modify name recognition, constant definition `ComponentErrorConst.ERROR_MODIFY_NAME_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Query registration information

Component name: `RecognizeComponent`

Component description: 

Query the registration information according to the face id. The wake-up component and the face search component already contain the call to this component.

Example of use:
```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let recognizeParam = new RecognizeParam(personId);
    return (
        <>
            <RecognizeComponent
                param={registerParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is RecognizeParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: face id, required
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: Successful recognition, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `-32630003`: Failed to get picture, constant definition `ComponentResultConst.ERROR_GET_PICTURE_FAILED`
- `-32610007`: Invalid face id, constant definition `ComponentResultConst.ERROR_PARAMS_PERSON_ID_INVALID`
- `-32640002`: The picture is unqualified and cannot be recognized, and the constant definition is ComponentErrorConst.ERROR_REMOTE_DETECT_FAILED
- `-32600003`: Recognition timeout, unrecognized, constant definition `ComponentErrorConst.ERROR_RECOGNIZE_TIMEOUT`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
 

## Face registration preview component

Component name: `ReceptionRegisterCameraView`

Component description: 

The face detection preview image component is used to display the content of the current robot camera. Can be used with the PersonAppearComponent component.

Example of use:
```java
public onPreviewStatusUpdate = (state: any): void => {
    //TODO: result processing
    console.log(TAG,'ReceptionRegisterCameraView', state);
    if (state !=='RESULT_SUCCESS') {
    }
};

public onCamareViewCapture = (state: string,
    originalImageFile: string,
    compressedFile: string): void => {
    console.log(TAG,'onCamareViewCapture', state, originalImageFile, compressedFile)
}

public render() {
    return (
        <>
            <ReceptionRegisterCameraView
               onPreviewState={this.onPreviewStatusUpdate}
               onCaptureState={this.onCamareViewCapture}/>
        </>
    );
}
```

**Attributes:**

- `onPreviewState`: This function will be called back to notify when an error occurs in the preview component.
- `onCaptureState`: Triggered when the preview takes a photo, and the picture information can be retrieved in the callback.

**Main method:**

`takePicture`: take a picture

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



# Lead & Face tracking

## Automatic face tracking (including dynamic voice pickup)

Component name: `FaceTrackSoundLocalizationComponent`

Component description: 

Composite component, using StandardFaceTrackComponent and SoundLocalizationComponent to automatically track human faces. During tracking, the robot can be called by "Little Leopard Little Leopard", and the robot will turn to the direction of the sound source and continue to search for people. For tracking, the component will continue to run and will not stop actively, and the user needs to actively perform component uninstallation.

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
    return (
        <>
            <FaceTrackSoundLocalizationComponent
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
                soundLocalizationParam={this.getSoundParams()}
                standardFaceTrackParam={this.getFaceTrackParams()}
            />
        </>
    );
}
```

**Attributes:**

- `soundLocalizationParam`: `SoundLocalizationComponent` component parameter, the type is `SoundLocalizationParam`
- `standardFaceTrackParam`: `StandardFaceTrackComponent` component parameter, the type is `StandardFaceTrackParam`
- `onSoundLocalizationFinish`: `SoundLocalizationComponent` component result callback
- `onSoundLocalizationStatusUpdate`: `SoundLocalizationComponent` component status callback
- `onStatusUpdate`: `StandardFaceTrackComponent` component status callback
- `onFinish`: `StandardFaceTrackComponent` component execution end callback

**Parameter Description:**

- `soundLocalizationParam`: For detailed parameter description, please refer to the document description of Motion Control-Robot Sound Source Localization (SoundLocalizationComponent)
- `standardFaceTrackParam`: For detailed parameter description, please refer to the document description of Face Tracking-Automatic Face Tracking (StandardFaceTrackComponent)

**Status description:**

For status description, please refer to the documentation of `StandardFaceTrackComponent` and `SoundLocalizationComponent`

**Result description:**

For result description, please refer to the documentation of `StandardFaceTrackComponent` and `SoundLocalizationComponent`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Automatic face tracking

Component name: `StandardFaceTrackComponent`

Component description: 

Automatic face tracking, which can automatically track people who are closer and whose face angle is smaller according to the recognition result.

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
    let param = new StandardFaceTrackParam(personId);
    return (
        <>
            <StandardFaceTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is StandardFaceTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: The object to be tracked for the first time, you can leave it blank, if you don’t fill it, it will automatically detect a suitable face for tracking
- `maxDistance`: The maximum distance of face recognition. Face data exceeding this distance are automatically ignored. The default is 3 meters.
- `maxFaceAngleX`: Recognize the maximum face angle, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is false
- `disappearTimeout`: The face loss timeout time. If the face data is not detected for more than this time, the component will automatically exit
- `isMultiPersonNotTrack`: Whether to track when multiple face data is detected, the default is false
- `multiPersonNotTrackDistance`: multi-person detection distance, 2 meters by default
- `isAllowMoveBody`: Whether the robot is allowed to rotate its body

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720001`: Tracking is successful, constant definition `ComponentStatusConst.STATUS_TRACK_SUCCESS`
- `32720003`: This tracking is over, constant definition `ComponentStatusConst.STATUS_TRACK_END`

**Result description:**

Get the result code through `ComponentEvent.status`:

`32610003`: Face data is not detected in timeout, ComponentEvent.data is face data, constant definition `ComponentResultConst.RESULT_TIMEOUT`
`-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Track the designated person

Component name: `FaceTrackComponent`

Component description: 

Track the specified person according to the face id, a single tracking component, after the tracking fails, it will not automatically switch to another person for tracking.

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
    let param = new FaceTrackParam(personId);
    return (
        <>
            <FaceTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is FaceTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

`personId`: the face id of the tracking object, required
lostDistance: Lost distance. If the distance between the tracking object and the robot exceeds this value, the tracking will be abandoned. The default is 2 meters.
`lostTimeout`: Timeout, how long it lasts to give up tracking if the tracked object is not found, the default is 2000 milliseconds

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720001`: Tracking is successful, constant definition ComponentStatusConst.STATUS_TRACK_SUCCESS

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610005`: The tracking object is not detected in timeout, constant definition `ComponentResultConst.RESULT_GUEST_LOST_TIMEOUT`
- `32610004`: The tracking object is too far away, the constant definition `ComponentResultConst.RESULT_GUEST_FAR_AWAY`
- `-32610005`: User lost, constant definition `ComponentErrorConst.ERROR_PARAMS_PERSON_COULD_NOT_BE_TRACKED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.1.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Lead

Component name: `LeadingTrackComponent`

Component description: 

The leading component is mainly used for the continuous detection and tracking of human face + human body during the movement of the human following the robot. It supports switching the rear camera (valid for the robot model that includes the rear camera) or turning the head backward (for The robot model that supports head rotation takes effect), which can be used in conjunction with the navigation component to control the movement or stop of the robot according to the status reported by the leading component.

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
    let param = new LeadingTrackParam();
    return (
        <>
            <LeadingTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is LeadingTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: componentEnd of execution callback

**Parameter Description:**

- `lostTime`: how long no one's face or human body data is considered lost, the default is 2000 milliseconds
- `waitTime`: Over-distance waiting timeout time, default -1
- `farawayDistance`: how far the person is from the robot to report the over distance status, the default is 2.8 meters
- `detectDelay`: Face detection delay time. The robot may switch cameras or turn heads at the beginning of the lead phase, which leads to a high rate of failure to recognize faces. It can be delayed for a period of time before detection. The default is 5000 milliseconds.
- `maxDistance`: face recognition range, face data beyond this distance is automatically ignored, the default is 3 meters
- `maxFaceAngleX`: Maximum face angle, 60 degrees by default
personAppearTimeout: the timeout for finding a person, the default is 1500 milliseconds

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720007`: Found traceable target, constant definition `ComponentStatusConst.STATUS_LEAD_TRACK_FIND_PERSON`
- `32720001`: Tracking is successful, constant definition `ComponentStatusConst.STATUS_TRACK_SUCCESS`
- `32720004`: Leading target is too far away, constant definition `ComponentStatusConst.STATUS_GUEST_FARAWAY`
- `32720005`: Lead the target closer, constant definition `ComponentStatusConst.STATUS_GUEST_FARAWAY_END`
- `32720009`: Leading the target is too far away for a long time, constant definition` ComponentStatusConst.STATUS_LEAD_GUEST_FARAWAY_TIMEOUT`
- `32720008`: Leading target is lost, constant definition `ComponentStatusConst.STATUS_LEAD_GUEST_LOST`
- `32720010`: Lead the target to appear, constant definition `ComponentStatusConst.STATUS_LEAD_GUEST_APPEAR`
- `32720011`: Failed to switch camera, constant definition `ComponentStatusConst.STATUS_CAMERA_SWITCH_FAILED`

**Result description:**

The component will continue to run and will not stop automatically until you uninstall the component.

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.1.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>



# Automatic recharge

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

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

