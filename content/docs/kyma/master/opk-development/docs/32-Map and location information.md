---
title: 'Map and location information'
type: 'API Reference (for OPK)'
---

## Whether the robot has been positioned
Method name: `isRobotEstimate`

Calling method:

```
RobotApi.isRobotEstimate().then((result) => {
    //TODO: command execution result processing
});
```

Parameter Description: None

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get the current coordinate point of the robot
Method name: `getPosition`

Calling method:

```
RobotApi.getPosition().then((result) => {
    //TODO: command execution result processing
});
```

Parameter Description: None

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get the current map name
Method name: `getMapName`

Calling method:

```
let listener = new CommandListener();
listener.addListener(CommandListener.EVENT_RESULT,
    (result: number, message: string) => {
        //TODO: command execution result
        //Delete listener
        listener.removeListener();
    });
RobotApi.getMapName(listener.getId());
```

Parameter Description:

- `callbackId`: callback id

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Obtain detailed coordinates based on the name of the location point
Method name: `getPlace`

Calling method:

```
let listener = new CommandListener();
listener.addListener(CommandListener.EVENT_RESULT,
    (result: number, message: string) => {
        //TODO: command execution result
        //Delete listener
        listener.removeListener();
    });
RobotApi.getPlace(listener.getId(), placeName);
```

Parameter Description:

- `callbackId`: callback id
- `placeName`: location point name

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get all location points on the current map
Method name: `getPlaceList`

Calling method:
```
RobotApi.getPlaceList().then((result) => {
    //TODO: command execution result processing
});
```

Parameter Description: None

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get the names of all points on the current map
Method name: `getPlaceListWithName`

Calling method:
```
let listener = new CommandListener();
listener.addListener(CommandListener.EVENT_RESULT,
    (result: number, message: string) => {
        //TODO: command execution result processing
        //Delete listener
        listener.removeListener();
    });
RobotApi.getPlaceListWithName(listener.getId());
```

Parameter Description:

- `callbackId`: callback id

Minimum version: 1.0.0

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Determine whether the location point exists
Method name: `havePlace`

Calling method:
```
let locationEstimateUtil = new LocationEstimateUtil();
locationEstimateUtil.havePlace(placeName).then((result) => {
    //TODO: true exists, false does not exist
});
```

Parameter Description:

- `placeName`: location point name

Minimum version: 1.0.0

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Determine whether the robot is at the position
Method name: `isInPlace`

Calling method:
```
let locationEstimateUtil = new LocationEstimateUtil();
locationEstimateUtil.isInPlace(placeName, range).then((result) => {
    //TODO: true at the location point, false at the location point
});
```

Parameter Description:

- `placeName`: location point name
- `range`: the range of the position point, the robot coordinate point returns true within the specified range of the position point

Minimum version: 1.0.0

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
