---
title: 'Robot Command-Basic'
description: 'update: 2022-07-21'
---

## 1. Overview

### 1.1 Overview Description

This document is used to describe the public input / result parameters when controlling the robot.

### 1.2 Preparation

Please read the "Orion Star open API of Robot Enterprise Open Platform - Basics and Authentication


## 2. Robot Command Parameters - Single Robot

### 2.1 Input


<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|robot_sn|string|No|robot sn. This parameter and the robot_uuid parameter pass only one of them, if both pass preferentially using robot_uuid.|
|robot_uuid|string|No|Robot uuid.This parameter and robot_sn parameter pass only one of them if both pass robot_uuid.|
</div>

### 2.2 Result

|Parameter|Type|Description|
|:-:|:-:|:-:|
|msg_id|string|message id|
|result_ret|string|if success, return 0, otherwise have a look the error code|
|result_msg|string|the message about the return value|
|result_data|mixed|depends on the command, may be none of them|

```java
{
    "ret": "0",
    "msg": "",
    "stime": "1539336895",
    "data": {
        "msg_id": "test_msg_id",
        "result_ret": "0",
        "result_msg": ""
    }
}
```

> Note: Some commands are executed asynchronously, and you need to use other interfaces to query results.

## 3. Robot Command Parameters - Multiple Robots

### 3.1 Input


<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|robot_sn|string|No|robot sn. This parameter and the robot_uuid parameter pass only one of them, if both pass preferentially using robot_uuid. Multiple sn are separated by commas|
|robot_uuid|string|No|Robot uuid.This parameter and robot_sn parameter pass only one of them if both pass robot_uuid. Multiple uuid are separated by commas|
</div>

### 2.2 Result

|Parameter|Type|Description|
|:-:|:-:|:-:|
|ret|string|if success, return 0, otherwise have a look the error code|
|msg|array|the message about the return value|
|result_list|array|the array of the result list|
|result_list[].msg_id|string|message id|
|result_list[].result_ret|string|if success, return 0, otherwise have a look the error code|
|result_list[].result_msg|string|the message about the return value|
|result_list[].result_data|mixed|depends on the command, may be none of them|

```java
{
    "ret": "0",
    "msg": "",
    "stime": "1539336895",
    "data": {
        "result_list": [{
                "msg_id": "test_msg_id_1",
                "ret": "0",
                "msg": ""
            },
            {
                "msg_id": "test_msg_id_2",
                "ret": "0",
                "msg": ""
            }
        ]
    }
}
```


> Note: Some commands are executed asynchronously, and you need to use other interfaces to query results.
