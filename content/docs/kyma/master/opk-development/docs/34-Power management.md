---
title: 'Power management'
type: 'API Reference (for OPK)'
---

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
