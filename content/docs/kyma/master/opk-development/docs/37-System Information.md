---
title: 'System Information'
type: 'API Reference (for OPK)'
---

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
