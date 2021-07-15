---
title: 'Introduction'
description: 'update: 2021-07-01'
---

## Introduction
RobotOS is developed based on the Android platform and provides a set of SDKs for android apk. Users can use RobotService.jar to develop android applications on the robot. All models running RobotOS support the SDK.

## SDK release log

<div class="fixed-table bordered-table">

|version|date|description|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|-|-|-|-|-|-|-|-|
|V1.1.1|2021/3/2|-|V6.2 and above|V6.2 and above|V6.2 and above|-|-|

</div>



## Concepts you need to know
+ Application authorization: 
>Only when the app is successfully connected to RobotOS and the app interface is displayed on the front end, the app can be successfully authorized to use the SDK. When the app interface returns to the background, the app is immediately suspended.
+ Application is suspended: 
>The robot will encounter some system events, such as emergency stop, low battery, OTA, hardware abnormality, etc. When these system events occur, RobotOS will take over the business, and the business apk in the foreground will be suspended. Since the onsuspend event is received, the business apk no longer has the ability to use the api
+ Application resume suspension: 
>Corresponding to the suspension event, when the system event disappears, RobotOS will return business control to the current app, and the current apk will resume the ability to use RobotApi



## FAQ
1. Calling api returns resource usage conflict

   For the api related to hardware usage provided in the SDK, when two interfaces are used to operate the same device at the same time, resource use conflicts will occur. For example, when a robot is navigating, the left turn and right turn api cannot be used at the same time.

2. apk call api does not take effect

   You need to make sure the apk is authorized, and the apk is called up using <font color=red>RobotOS Home</font>. 
   
   Like the video below:
   
   <video width="270" height="480" controls>
      <source src="./assets/use-robotos-home.mp4" type="video/mp4"> 
   </video>
   @video[](./assets/use-robotos-home.mp4)
   If you want to start an apk when you turn on the robot, you can set "default boot app" in the robot settings(Settings -- Other Settings -- Boot apps). 