---
title: 'Voice'
description: 'update: 2022-02-28'
---

## 1. Overview

### 1.1 Overview Description

This doc can be used to make robot play TTS, or input text(just like somebody talk to the robot)

### 1.2 Preparation

Please read the "Orion Star open API of Robot Enterprise Open Platform - Basics and Authentication and Orion Star open API of Robot Enterprise Open Platform-Robot Command-Basic first


## 2. Voice Command

### 2.1 Send the robot to execute Voice

Send the execution voice command to the robot, which is used to remotely control the robot to execute the voice command.

Interface address

+ POST|GET  /v1/robot/pipe/cmd_exec_voice_cmd

Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|msg_value|string|Yes|The voice command that needs to be execute.|

</div>

Business response parameters

> Note：There are no service parameters except public response parameters.

### 2.2 Query and send the robot to execute the voice command response

Query the execution response of the command to play TTS issued by the robot 

Interface address

+ POST|GET  /v1/robot/pipe/cmd_exec_voice_cmd/result

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.

## 3 Play TTS

### 3.1 Send the robot to play the TTS

Send the command to play TTS to the robot to remotely control the robot to play TTS.

Interface address

+ POST|GET /v1/robot/pipe/cmd_play_tts

Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|msg_value|string|Yes|The TTS that needs to be played.|

</div>

Business response parameters

> Note：There are no service parameters except public response parameters.

### 3.2 Query and send the robot to play TTS Command response

Query the execution response of the command to play TTS issued by the robot 

Interface address

+ POST|GET /v1/robot/pipe/cmd_play_tts/result

Required parameter

> Description：There is no business parameters except public request parameters;

Business response parameters

> Note：There are no service parameters except public response parameters.