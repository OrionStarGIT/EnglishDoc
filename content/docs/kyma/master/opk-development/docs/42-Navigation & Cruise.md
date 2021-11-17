---
title: 'Navigation & Cruise'
type: 'Functional Components'
---

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

Navigation component, the head will turn to the back during navigation, it is only effective on GreetBot model, and the effect is equivalent to NavigationComponent on other models.

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
 