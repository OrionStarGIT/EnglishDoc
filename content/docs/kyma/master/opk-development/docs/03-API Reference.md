---
title: 'API Reference (for OPK)'
description: 'update: 2021-07-01'
---

# Face recognition

## Get the information of the identified owner
Method name: `getAllPerson`

Calling method:

```java
PersonManager.getAllPerson(true).then((data) => {
      let persons = JSON.parse(data);
      //TODO: 'persons' is a list of face data
});
```

Parameter Description:

- `isOnlyFace`: whether only the face data is needed

**Face data**

The result obtained is a list of face data, which can be traversed to obtain:

- id: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- name: registered name, the identified person has not been registered, the value is empty
- angle: face angle
- distance: distance
- facewidth: face width
- faceheight: face height
- faceX: the x coordinate of the face
- faceY: the y coordinate of the face

Minimum version: 1.10.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get the number of people identified
Method name: `getAllPersonNum`

Calling method:

```
PersonManager.getAllPersonNum().then((number) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get the id of the last person
Method name: `getLastPersonId`

Calling method:

```
PersonManager.getLastPersonId().then((personId) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get the name of the last person
Method name: `getLastPersonName`

Calling method:

```
PersonManager.getLastPersonName().then((name) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



# Map and location information

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



# Light strip control

## Introduction
LightApi is mainly used to control the light strip display on the robot. At present, the main light strips on the robot include the bottom chassis light strip, the light strip on the inner circle of the shutdown button, and the light strip on the outer circle of the shutdown button.

<div class="fixed-table bordered-table">

|Light strip type|Type Constant definition|
|----------------|------------------------|
|Chassis light belt|LightConst.LIGHT_BASE_TARGET_FOOT
|Turn off button inner circle light strip LightConst.|LIGHT_BASE_TARGET_POWER_INSIDE|
|Turn off button outer ring light belt|LightConst.LIGHT_BASE_TARGET_POWER_OUTSIDE
|All light strips|LightConst.LIGHT_BASE_TARGET_ALL|



## Parameter class
### LightColor
Common lighting effect parameters, only supports fixed color values:

- `baseTarget`: light strip type, for specific definition, please refer to the introduction of light strip type section
- `rgbValue`: rgb color value

### LightAnimation
Dynamic lighting effect parameters, start and end colors can be set, gradient display:

- `rgbStart`: starting color value
- `rgbEnd`: end color value
- `rgbFreeze`: transition color
- `startTime`: the time that the gradient starts to stay in color
- `endTime`: the time that the gradient ends the color stay
- `onTime`: the time spent in the gradual change process
- `repeat`: number of repetitions

## Set the light strip color type
Method name: `playEffect`

Calling method:
```
LightApi.playEffect(effect);
```

Parameter Description:

- `effect`: light strip color type
    - "light_effect_green_light": green
    - "light_effect_green_breath": green breath
    - "light_effect_blue_light": blue
    - "light_effect_blue_breath": blue breath
    - "light_effect_red_light": red
    - "light_effect_red_breath": red breath

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set the color of the light strip
Method name: `playLightColor`

Calling method:
```
LightApi.playLightColor(lightColor);
```

Parameter Description:

- `lightColor`: Type LightColor, please refer to the introduction of the parameter class section for details

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set dynamic lighting effects
Method name: `playLightColor`

Calling method:
```
LightApi.playLightAnimation(lightAnimation);
```

Parameter Description:

- `lightAnimation`: Type LightAnimation, please refer to the introduction of the parameter class section for details

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>



# Power management

## Get battery power
Method name: `getBatteryLevel`

Calling method:

```
RobotApi.getBatteryLevel() .then((level) => {});
```

Parameter Description: none

Minimum version: 1.4.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get battery remaining time
Method name: `getBatteryTimeRemaining`

Calling method:

```
let listener = new CommandListener();
listener.addListener(CommandListener.EVENT_RESULT,
    (result: number, message: string) => {
        //TODO: command execution result
        //Delete listener
        listener.removeListener();
    });
RobotApi.getBatteryTimeRemaining(listener.getId());
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

## Estimated time to fully charge
Method name: `getChargeTimeRemaining`

Calling method:

```
let listener = new CommandListener();
listener.addListener(CommandListener.EVENT_RESULT,
    (result: number, message: string) => {
        //TODO: command execution result
        //Delete listener
        listener.removeListener();
    });
RobotApi.getChargeTimeRemaining(listener.getId());
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

## Is currently charging （new version）
Method name: `RobotSettingApi.isCharging`

Calling method:

```
RobotSettingApi.isCharging().then((result:boolean) => {
     console.log('isCharging:'+result);
});
```

Parameter Description: none

Minimum version: 1.4.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Is currently charging (old version)
Method name: `SettingsUtil.isCharging`

Calling method:
```
SettingsUtil.isCharging().then((result:boolean) => {
            console.log('isCharging:'+ result);
       });
```

***Note: If the charging interface of the new version cannot be used, then please try this old interface.***

Minimum version: 1.4.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>



# Speech

## Play TTS

Method name: `playText`

Calling method:

```
let listener = new TextListener();
listener.setFinish(() => {
    //TODO: Play complete
    listener.removeListener();
});
speechApi.playText(listener.getId(), text);
```

Parameter Description:

- `callbackId`: callback id
- `text`: the text content to be played

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Stop TTS playback
Method name: `stopTTS`

Calling method:
```
speechApi.stopTTS();
```

Parameter Description: none

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Set whether to enable speech recognition
Method name: `setRecognizable`

Calling method:
```
speechApi.setRecognizable(enbale);
```

Parameter Description:

- `enable`: Whether to enable speech recognition, true to enable false to disable

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Identify the specified text content
Method name: `queryByText`

Calling method:
```
speechApi.queryByText(text);
```

Parameter Description:

- `text`: The text content that needs to be recognized. After the text content is recognized, it will be called back to Voice (for voice content, please refer to the basic knowledge of document application), which is the same as normal voice recognition.

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Set voice recognition area
Method name: `setAngleCenterRange`

Calling method:
```
speechApi.setAngleCenterRange(centerAngle, rangeAngle);
```

Parameter Description:

- `centerAngle`: speech recognition center angle, range [0, 360)
- `rangleAngle`: interval angle, range [0, 120]

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Reset speech recognition center angle
Method name: `resetAngleCenterRange`

Calling method:
```
speechApi.resetAngleCenterRange();
```

Parameter description: none

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Play local audio files
Method name: `playToneByLocalPath`

Calling method:

```
let listener = new ToneListener();
listener.setFinish(() => {
    //TODO: Play complete
    listener.removeListener();
});
speechApi.playToneByLocalPath(listener.getId(), path);
```

Parameter Description:

- `callbackId`: callback id
- `path`: local audio file path

Minimum version: 1.8.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Stop local audio playback
Method name: `stopTone`

Calling method:
```
speechApi.stopTone();
```

Parameter description: none

Minimum version: 1.8.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



# Application Management

## Get application information
Method name: `getAppJson`

Calling method:
```
let data = AppManager.getAppJson();
if (data) {
    let info = JSON.parse(data);
    let appId = info.appid;
}
```

Parameter Description: none

Application information:

- `appid`: application appId
- `versionName`: Application version

***Note:
In this method, the code needs to be packaged by 'pack', and then installed using commands, in order to obtain the corresponding data correctly. Data cannot be obtained correctly through 'run' or 'debug'.***

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get application file resource storage directory
Method name: `getOpkExtraPath`

Calling method:
```
let path = AppManager.getOpkExtraPath();
```

Parameter Description: none

***Note:
In this method, the code needs to be packaged by 'pack', and then installed using commands, in order to obtain the corresponding data correctly. Data cannot be obtained correctly through 'run' or 'debug'.***

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get application installation path
Method name: `getOpkPath`

Calling method:
```
let path = AppManager.getOpkPath();
```

Parameter Description: none

***Note:
In this method, the code needs to be packaged by 'pack', and then installed using commands, in order to obtain the corresponding data correctly. Data cannot be obtained correctly through 'run' or 'debug'.***

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get application configuration
Method name: `getAppConfig`

Calling method:
```
let config = AppManager.getAppConfig();
```

Parameter Description: none

Minimum version: 1.25.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set up application configuration change monitoring
Method name: `setConfigUpdateListener`

Calling method:
```
AppManager.setConfigUpdateListener((config) => {
    //TODO: config is the new application configuration
});
```

Parameter Description: none

Minimum version: 1.39.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get app id
Method name: `getAppId`

Calling method:
```
let appid = AppManager.getAppId();
```

Parameter Description: none

Minimum version: 1.25.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get app icon
Method name: `getAppIcon`

Calling method:
```
let icon = AppManager.getAppIcon();
```

Parameter description: none

Minimum version: 1.25.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Restart application
Method name: `restartApp`

Calling method:
```
AppManager.restartApp();
```

Parameter description: none

***Note: This method will interrupt the current business and restart the entire robot application, please use it carefully.***

Minimum version: 1.25.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Start Apk
Method name: `openThirdPartyApp`

Calling method:
```
OpenAppApi.openThirdPartyApp(packageName, activityName);
```

Parameter Description:

- `packageName`: apk package name
- `activityName`: The name of the Activity that needs to be started

Minimum version: 1.10.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>



# System Information

## Get the system version
Method name: `getRobotVersion`

Calling method:
```
let version = SystemInfo.getRobotVersion();
```

Parameter description: none

Minimum version: 1.2.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get the robot SN
Method name: `getDeviceSn`

Calling method:
```
let sn = SystemInfo.getDeviceSn();
```

Parameter description: none

Minimum version: 1.6.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get the simple version of the system
Method name: `getVersionByROM`

Calling method:
```
let version = SystemInfo.getVersionByROM();
```

Parameter description: none

Result description:

Only the first two digits of the system version are obtained, such as: V6.3

Minimum version: 1.2.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
