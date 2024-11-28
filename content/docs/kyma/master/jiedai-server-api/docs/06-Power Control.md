---
title: 'Power Control'
description: 'update: 2022-08-16'
---

## 1. Overview

### 1.1 Overview Description

This doc can be used to control robot power, to make robot sleep or to make robot power wake up.

### 1.2 Preparation

Please read the [Basic and Authentication](https://ainirobot.gatsbyjs.io/docs/server/jiedai-server-api#basic-and-authentication-basic-and-authentication).

And the public parameters include [Robot Command-Basic](https://ainirobot.gatsbyjs.io/docs/server/jiedai-server-api#robot-command-basic-robot-command-basic) parts.


## 2. Power Sleep

### 2.1 Make the robot sleep

Send the execution power sleep command to the robot.

Interface address

+ POST|GET  /v1/robot/pipe/cmd_power_sleep

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.

### 2.2 Query robot sleep command response

Query the execution response of the command robot sleep

Interface address

+ POST|GET  /v1/robot/pipe/cmd_power_sleep/result

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.

## 3 Robot Power Wake Up

### 3.1 Make the robot power wake up

Send the command to make the robot power wake up.

Interface address

+ POST|GET /v1/robot/pipe/cmd_power_wakeup

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.

### 3.2 Query make the robot power wake up Command response

Query the execution response of the command robot power wake up

Interface address

+ POST|GET /v1/robot/pipe/cmd_power_wakeup

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.