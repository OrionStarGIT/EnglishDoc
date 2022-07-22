---
title: 'Navigation'
description: 'update: 2022-02-28'
---

## 1. Overview

### 1.1 Overview Description

This doc can be used to demonstrate the robot open API of enterprise open platform to interface caller- The calling method of command interface and cautions 

### 1.2 Preparation

Please read the [Basic and Authentication](https://ainirobot.gatsbyjs.io/docs/server/jiedai-server-api#basic-and-authentication-basic-and-authentication).

And the public parameters include [Robot Command-Basic](https://ainirobot.gatsbyjs.io/docs/server/jiedai-server-api#robot-command-basic-robot-command-basic) parts.



## 2. Robot Command Interface - Navigation

### 2.1 Navigate to the target place

Interface address

+ POST|GET /v1/robot/pipe/cmd_navigation

Required parameter

> Note: Do not forget to pass the public request parameters, and is_batch must set to 1.

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|msg_value|string|Yes|The spot name that needs to arrive. |
</div>

Business response parameters

> Description：There’s no business parameters except public response parameters

### 2.2 To Search the command response navigate the robot to target place

To serach the execute return that distribute on the robot to navigate to target place

Interface address

+ POST|GET /v1/robot/pipe/cmd_navigation/result

Required parameter

> Description：There’s no business parameters except public response parameters

Business response parameters

> Description：There’s no business parameters except public response parameters

### 2.3 Cancel navigation command on robot 

Interface address

+ POST|GET /v1/robot/pipe/cmd_navigation_stop

Required parameter

> Description：There’s no business parameters except public response parameters

Business response parameters

> Description：There’s no business parameters except public response parameters

### 2.4 Search response cancel navigation command

Query the execution response of the command to cancel the navigation issued by the robot.

Interface address

+ POST|GET /v1/robot/pipe/cmd_navigation_stop/result

Required parameter

> Description：There’s no business parameters except public response parameters

Business response parameters

> Description：There’s no business parameters except public response parameters