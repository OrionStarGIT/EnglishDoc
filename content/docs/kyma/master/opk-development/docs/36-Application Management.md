---
title: 'Application Management'
type: 'API Reference (for OPK)'
---

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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
