---
title: 'Build Robot App'
description: 'update: 2021-07-01'
---

## Choose the right way to develop robot apps
RobotOS currently supports two languages to develop robot applications.

### APK Development
Android application package (.apk)

Use Java to develop APP for robots, which is developed based on Android.

[Start building APK](https://ainirobot.gatsbyjs.io/docs/apk/apk-development)



### OPK Development
Robot application package (.opk)

Use JavaScript to develop APP suitable for robots, which is developed based on React Native.

[Start building OPK](https://ainirobot.gatsbyjs.io/docs/opk/opk-development)



<div class="fixed-table bordered-table">

|&nbsp;|Advantage|Disadvantage|Applicable scene|Does it support(Vision, speech, move)
|-|-|-|-|:-:
|APK|Open and flexible, development is not restricted.All functions of Android can be used.|Written by the robot's existing opk. Capability components are difficult to reuse.|Heavy custom development. All aspects of custom robots|Yes
|OPK|Packaged from ReactNative. React or front-end development can be quickly started, and there is no delay in calling each other with the existing capabilities of the robot.|When using unpackaged Android native functions, you need to use Java to write local lib|Lightly customized development, quickly put the robot into use|Yes

</div>



### In what circumstances should APK development be preferred?


+ If the developer already has an Android APP and has implemented more complex business logic in the apk, he does not want to develop it again. Through UI adaptation and access to the voice link, the apk can be quickly deployed to the robot.

+ If the business function that needs to be developed on the robot is very complicated, it needs to interact with the Android system in many places, or it needs to integrate multiple third-party Android SDKs.

+ Developers are more familiar with Android system development.

+ If you use APK development, the original business functions of the robot cannot be used, such as: patrol, visitor reception, weather, etc.



### In what circumstances should OPK development be preferred?


+ It is hoped that a small number of function points will be developed slightly, and use the existing default robot features, like 'reception' 'tour guide' 'Advertising', ect.

+ Existing developers are more familiar with web development, js, ts and other development.