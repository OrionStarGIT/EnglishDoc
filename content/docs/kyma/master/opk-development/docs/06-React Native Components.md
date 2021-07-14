---
title: 'React Native Components'
description: 'update: 2021-07-01'
---

# Basic components

The following native components have been loaded by the robot and can be installed correctly when `orionos-sh` executes the command. 

When installing manually in `package.json`, please fill in the correct version number, otherwise the robot may not work normally.

Tips: 

1. When using these react-native components, please note that the version numbers need to be matched. If an incorrect version is installed using npm install, the component may become unusable. Please remove the corresponding components from package.json and reinstall the correct version.

2. If the IDE reports "Unable to find the declaration file of module'XXX' error" when using the module, don't pay too much attention. If you really don't want to see the wavy line, you can declare this module in the code to solve the problem. The solution can be searched on Google: ReactNative cannot find the declaration file error of the module 'xxx'.
 

## react-native
Component function: use React to build a framework for native applications

Detailed information: https://github.com/facebook/react-native/tree/v0.59.5

Version information: 0.59.5

## react
Component function: JavaScript library for building user interface

Detailed information: https://github.com/facebook/react/tree/v16.8.3

Version information: 16.8.3

## react-navigation
Component function: navigation

Detailed information: https://github.com/react-navigation/react-navigation/tree/3.5.1

Version information: 3.5.1

Note:

1. Refer to the official website of react-navigation for the use of page routing jumps. For example, use `navigate`, `push`, `pop`, `goBack` and other methods for page jumps. `StackNavigator` is recommended.

2. In addition, the internal routing of opk should not cover the routing of Xiaobao’s main program opk, otherwise the problem of opk unable to exit or black screen after exiting (the corresponding page cannot be found)

[Download sample code]()

## react-native-gesture-handler
Component function: used to simplify gesture control monitoring

Detailed information: https://github.com/kmagiera/react-native-gesture-handler/tree/1.1.0

Version information: 1.1.0

## react-native-svg
Component function: support most SVG elements and attributes

Detailed information: https://github.com/react-native-community/react-native-svg/tree/v8.0.10

Version information: 8.0.10

## lodash
Component function: provide modularity, performance and additional functions

Detailed information: https://github.com/lodash/lodash/tree/4.14.1

Version information: 4.14.123

## sprintf-js
Component function: sprintf.js is a complete open source JavaScript sprintf implementation

Detailed information: https://github.com/alexei/sprintf.js/tree/1.1.2

Version information: 1.1.2

## mobx
Component function: simple and extensible state management tool

Detailed information: https://github.com/mobxjs/mobx/tree/5.9.4

Version information: 5.9.4

## mobx-react
Component function: the associated tool of react and mobx

Detailed information: https://github.com/mobxjs/mobx-react/tree/5.4.3

Version information: 5.4.3

## prop-types
Component function: runtime type checking tool

Detailed information: https://github.com/facebook/prop-types/tree/v15.7.2

Version information: 15.7.2

## react-native-fs
Component function: Provide RN with the ability to access local files

Detailed information: https://github.com/itinance/react-native-fs

Version information: 2.14.1

## react-native-slider
Component function: Slider component provided by React Native official community.

Detailed information: https://github.com/react-native-community/react-native-slider

Version information: 1.1.4



# Multimedia components

The following native components have been loaded by the robot and can be installed correctly when `orionos-sh` executes the command. When installing manually in `package.json`, please fill in the correct version number, otherwise the robot may not work normally.
 

## react-native-camera
Component function: Camera component, support barcode scanning

Detailed information: https://github.com/react-native-community/react-native-camera/tree/v2.9.0

Version information: 2.9.0

1. RN directly enabling the wide-angle camera will affect the normal use of the visual components

2. Need to close the wide-angle camera in time

[Demo example of turning on the wide-angle camera]()

## react-native-video
Component function: support common controls such as setting video source, playing rate, adjusting volume, controlling whether to mute, zoom mode, progress monitoring, etc.

Detailed information: https://github.com/react-native-community/react-native-video/tree/4.4.1

Version information: 4.4.1

## react-native-image-editor
Component function: used to perform basic cut-off processing on pictures.

Detailed information: https://github.com/callstack/react-native-image-editor/tree/2.3.0

Version information: 2.3.0

## react-native-audio-toolkit
Component function: The component for playing and recording audio provided by the official React Native community.

Detailed information: https://github.com/react-native-community/react-native-audio-toolkit/tree/v2.0.1

Version information: 2.0.1

## react-native-pure-chart
Component function: The chart control provided by the official React Native community can be used to draw various excel charts.

Detailed information: https://github.com/oksktank/react-native-pure-chart/tree/fix-prop-types

Version information: master



# View component

The following native components have been loaded by the robot and can be installed correctly when `orionos-sh` executes the command. When installing manually in `package.json`, please fill in the correct version number, otherwise the robot may not work normally.
 
## react-native-webview

Component function: WebView

Detailed information: https://github.com/react-native-community/react-native-webview/tree/v3.2.2

Version information: 3.2.2

*If you encounter the problem that the webview component becomes invalid after the introduction, the page is blank. The reason may be that the root component of the return content can only be the WebView tag. When I wrap a View tag in the outer layer, the page is blank and the imported page cannot be displayed. Reference method: https://stackoverflow.com/questions/38963046/can-i-use-webview-inside-a-view-react-native*

## react-native-display
Component function: Provide "Display: none" (css style) to turn on/off the component from rendering

Detailed information: https://github.com/sundayhd/react-native-display

Version information: 1.0.8

## react-native-gridview
Component function: flexible grid view based on React Native's ListView component

Detailed information: https://github.com/jskuby/react-native-gridview/tree/v0.1.2

Version information: 0.1.2

## react-native-viewpager
Component function: page switcher provided by React Native official community.

Detailed information: https://github.com/react-native-community/react-native-viewpager/tree/v1.1.6

Version information: 1.1.6

## react-native-linear-gradient
Component function: Provide LinearGradient style layout

Detailed information: https://github.com/react-native-community/react-native-linear-gradient/tree/v2.5.4

Version information: 2.5.4

## lottie-react-native
Component function: present lottie animation.

Detailed information: https://github.com/react-native-community/lottie-react-native/tree/v2.6.1

Version information: 2.6.1



# Dynamic Extension Components

## Introduction
At present, the robot application platform supports most of the commonly used components, but if you want to access a custom native component or need to extend a third-party open source component, the robot application platform can support dynamic loading of dex files or so libraries to achieve dynamic loading and expansion Components. This method can provide opk with most of the native functions of Android, and even hardware-level functions (such as usb, Bluetooth, etc.), so that the scope of opk can be expanded.

**This method is also suitable for integrating the java code part of the react-native component written by others into the your robot for use!**


## Supported version
Different robot products support different versions of dynamic expansion components. For the specific supported versions of each product, please refer to the following table:

<div class="fixed-table bordered-table">

|Robot Model|Minimum Version|
|:---------:|:-------------:|
|GreetBot|5.12|
|Mini|5.13|
|Baodaping|4.18|

</div>

## Functional limitations

Dynamic expansion components are loaded by the robot application platform at the bottom layer, which will be intrusive. In order to protect the safety of the robot application platform, it cannot be loaded at will, and the following restrictions will be imposed:

1. You cannot load components with resources such as layout, drawable, string, etc., and none of the above resources can be obtained after loading.
2. It cannot conflict with the existing classes or so libraries of the current robot application platform, otherwise it will fail to load.
3. The React Native component bridge requires a unique name, which cannot be the same as the existing robot application platform. It is recommended to add its own business identity to the name.
4. The components that need to be embedded in AndroidManifest.xml cannot be loaded, and the embedded content will not be available.
5. It is not possible to load components that need to use Assets resources. For file resources, it is recommended to store them in the extraResource directory of the robot application.

That is, the Java code can be packaged into dex, and loaded and run in the form of reflection. Android content other than java code cannot be loaded and used.

## How to use
Here we take opk using JAVA's national secret SM2 encryption and decryption library as an example to illustrate how to implement this function:

### 1. Prepare native components or third-party open source components

Create an empty React Native project, create a new lib module in the android directory, and place our native component code or third-party open source components into lib mdoule.

In the national secret sm2 encryption library project, we directly created a new module project, the project structure is as follows:

![dynamically-expanding-components](./assets/dynamic-extension-components-1.png)

### 2. Package NativeModule and ReactPackage

To access native modules by React Native, the native modules need to be packaged into a NativeModule and registered through ReactPackage. For specific implementation methods, please refer to the official React Native documentation. (https://reactnative.dev/docs/native-modules-android)

Declare the java module called by js in Sm24jkxwPackage.java as required.

![dynamically-expanding-components](./assets/dynamic-extension-components-2.png)

And output the encryption and decryption interface we need in Sm24jkxwModule (at this time the national secret SM2 encryption and decryption algorithm is called)

![dynamically-expanding-components](./assets/dynamic-extension-components-3.png)

### 3. Generate dex file
The native component module is finally integrated into the robot application in the form of a dex file. After the development is completed, the dex file can be generated by the following command:
```
gradlew dexRelease
```

The final generated dex file is stored in the `{libmodule directory}/build/intermediates/dex/release/out directory`.

In the national secret sm2 encryption algorithm project, because it is a directly established lib project, the `./gradlew` build command is executed to package the jar package. After packaging, there will be a  file named classes.jar in `build/intermediates/packaged-classes/release/`. If you use `JD-gui` to view this jar package, you will find that it packs all the code we need.

![dynamically-expanding-components](./assets/dynamic-extension-components-4.png)

If a three-party jar package is introduced into the native module, the imported jar package also needs to be packaged into a dex file. Take fastjson as an example:

```
dx --dex --output=fastjson.dex ./fastjson-1.2.61.jar
```

dx is a tool provided in the official Android SDK. For specific usage, please refer to the official Android documentation.

    Here we directly delete the source code of the SM2 algorithm and write it into the project code, so there is no need to package the jar of the SM2 algorithm into dex. But we need to package the classes.jar just now as dex.

### 4. Integrate into the robot application

Create a new libs directory under the extraResource directory of the robot application, and create a new native component directory under the libs directory. Take trtc as an example:

```
extraResource
└── libs
    └── trtc
       ├── config.json
       ├── dexlib
       │ ├── trtc.dex
       │ └── liteavsdk.dex
       └── jnilib
           └── libliteavsdk.so
```

trtc is the name of our native component, which contains two directories and a configuration file:

<div class="fixed-table bordered-table">

|||
|:---------:|-------------|
|dexlib|dex file storage directory, because the native module additionally introduces liteavsdj.jar, there will be two dex files|
|jnilib|current native module depends on the so library storage directory (so library please select a 32-bit library)|
|config.json|is used to configure the ReactPackage class name|

</div>

Create a new config.json file, configure ReactPackage, the format is as follows:

```xml
{
    "packageClassNames": [
        "com.ainirobot.trtc.RNTRTCPackage"
    ]
}
```

The packageClassNames here is the complete class name of the reactpackage that needs to be loaded by reflection in the dex: com.ainirobot.sm24jkxw.Sm24jkxwPackage

### 5. Call native modules in the robot application
After integrating dex into the robot application, in the robot application, we can get the NativeModule we encapsulated through NativeModules, and then directly call the native module:

```
import {NativeModules} from'react-native';
const trtc = NativeModules.trtc;
```

The name of the national secret SM2 encryption and decryption library is Sm24jkxwModule, so this name is also used for reference. Here we can see that "4jkxw" has been added to the project, which is the label of the overall project. It is added to prevent module conflicts from causing the machine to fail to run normally after loading this dex.

The invocation of NativeModule is supported by the React Native framework. For details, please refer to the official React Native documentation.

### 6. The robot loads the native module.
In the orionos-sh debug mode, java code will not be loaded by reflection. We need to install the complete opk with the dex module into the machine through the orionos-sh run command, and then restart the Xiaobao program to load it. When starting the Leopard program, fill in the filter keyword "ReactPackageInDexUtil" in logcat to see the process of loading the dex file.

In the national secret SM encryption and decryption project, we can search for logs similar to the following, indicating that the library file has been loaded:

`2021-04-27 19:35:32.272 19306-19306/? I/ReactPackageInDexUtil: parseClassNameAndSo OpkExtraPath /sdcard/robot/rndata/{opkid}/extra/libs/`

Because `Log.d("Sm24jkxwPackage","Installed")` is added to Sm24jkxwPackage; so we can also see the log of `Sm24jkxwPackage:Installed` in logcat.

Once the dex file is loaded, orionos-sh debug can be used for normal debugging. The dex file will always be loaded by the robot and provide calling services.
