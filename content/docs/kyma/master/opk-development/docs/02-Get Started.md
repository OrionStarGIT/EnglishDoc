---
title: 'Get Started with OPK'
description: 'update: 2021-07-01'
---

# Developer Account

## Enterprise platform account
The Orion Sky Robot Platform is an enterprise platform dedicated to the management and configuration of robots under Orion Sky. It provides a series of functional configurations for robots under its own company, supports online remote control and remote maintenance of robots, and is also an application store for robots. Support remote installation, uninstallation and update of OPK.

Website: https://jiedai.ainirobot.com/

After you purchase the robot device, sales engineer will open the enterprise platform account access permission for you. If you do not have the account password, please contact the Orion Star Commercial Team.

## Development platform account
OrionBase Platform is a full-chain development platform which specializes in serving secondary robot developers. It provides professional technical empowerment to help robot secondary developers quickly develop applications and effectively solve problems in the development and operation process. For the problems found, a series of robot abnormal problem analysis and diagnosis tools are provided to help developers quickly find the problem, locate the cause of the problem, and efficiently solve the abnormal problem.

Website: https://orionbase.ainirobot.com

OrionBase shares the same account system with the Orion Enterprise Platform. If you do not have the account password of the Enterprise Platform, please contact the Orion Star Sales Engineer Team.

## npm warehouse account
The npm warehouse is a private package management platform built by Orion Sky. In order to facilitate users to develop robot applications, Orion Sky has developed a series of exclusive robot application development tools, including robot interface libraries, compilation tools, debugging tools, etc., which are all stored in the npm warehouse. You need to log in to download and use.

Warehouse address: https://npm.ainirobot.com/repository/eve-group/

The npm account needs to be obtained separately, please contact the pre-sales or business team to apply for an account.



# Development Environment

The development of robot applications needs to rely on the Android development environment, Node.js environment (***version requires Node10 or higher and no higher than Node13***), scaffolding tools and IDE tools. 

For detailed configuration, please refer to the following documents.

## Android development environment
The robot system is based on Android, so we need to configure the Android development environment when developing the robot application. 

For the specific Android development environment configuration, please refer to: https://developer.android.com/.

## Nodejs configuration
The compilation and debugging tools of the robot application are developed based on node, so the Node.js environment must be configured.

***Note: Please select v12.10.0 for the version of nodejs. If you cannot choose for special reasons, the nodejs version cannot exceed v13.***

### 1. Windows
Installation package download address: https://nodejs.org/dist/v12.10.0/

Please select the corresponding version to download from the above address. For 32-bit systems, download x86.msi, and for 64-bit systems, download x64.msi.

After the download is complete, double-click to install it.

### 2. MacOS
Installation package download address: https://nodejs.org/dist/v12.10.0/

`node-v12.10.0.pkg`

After the download is complete, double-click to install it.

*Note:*

*If you need to install multiple versions of Node in the machine, you can use the multi-version node management tool to handle it.*

*For specific use, please search for keywords on Google: gnvm.exe or sudo npm install n.*

### 3. Linux
Download and unzip:

```
# wget https://nodejs.org/dist/v12.10.0/node-v12.10.0-linux-x64.tar.gz      //Download
# tar xf node-v12.10.0-linux-x64.tar.xz                                     //Unzip
# cd node-v12.10.0--linux-x64/                                              //Enter the unzipped directory
# ./bin/node -v                                                             //Execute the node command to view the version
```

The bin directory of the unzipped file contains commands such as node and npm. 

You can use the ln command to set up the soft connection:

```
# ln -s {decompression path}/nodejs/bin/npm /usr/local/bin/
# ln -s {Extract path}/nodejs/bin/node /usr/local/bin/
```

## Scaffolding tool installation
1. Log in to the npm server

   Execute the npm login command in the terminal:
```shell
npm login --registry=https://npm.ainirobot.com/repository/eve-group/
```

Enter the user name, password and email address in turn to log in.

2. Install scaffolding tools
   
   Execute the npm install command in the terminal:
```shell
npm install -g orionos-sh --registry=https://npm.ainirobot.com/repository/eve-group/
```

3. Add new scaffolding tools

After installing the orionos-sh dependency in the terminal, if the system prompts that the dependency of orionos-cli is missing, you need to continue to execute the following two commands in the terminal:

```shell
npm login --registry=https://npm.ainirobot.com/repository/eve-group/
```

```shell
npm install -g orionos-cli --registry=https://npm.ainirobot.com/repository/eve-group/
```

## Install IDE
The development of robot applications is developed using JavaScript language. 

In order to facilitate development and debugging, we recommend that you use WebStorm or Visual Studio Code to develop robot applications. 

You can download and install it directly from their official websites.



# Creat Your Application

## Get AppId

Each robot application (OPK) needs an unique identifier, and subsequent uploads, releases, downloads, installations, and updates need to be associated with AppId.

Please ask to the sales engineer to create AppId for you.

## Create application
To create an application, we need to use our scaffolding tool. 

Please make sure that the scaffolding tool is installed. If it is not installed, you can refer to the environment variable configuration to install it.

```
orionos-sh create {project name} -i {appId} -p {project directory}
```

- Project name: 
    
    Code catalog name, please use English characters.

- Project directory: 
    
    Specify the directory in which to create the project. The default is the current directory. Use English characters and don't use spaces in the project directory.

## Import IDE
After the above steps, we already have a complete application that can be run on the robot. 

Import the project into the IDE, and then the subsequent development and debugging work can be carried out.



# Run & Debug

## Check before run
The installation of opk is done through the adb command. 

Before installing and debugging, please make sure that the adb command is available and the robot has opened the debugging mode. 

You can use the adb devices command to check whether the robot is successfully connected and enter the development mode. 

If everything is normal, it will return to the robot device that can be debugged. 

If you do not get the correct result at this step, you can search for ADB related issues on Google according to the error message. This step is consistent with the requirements of Android development for adb.

![run](./media/debug1.png)

After checking that there are devices, we can run adb logcat and try to view the robot log. If the log can be scrolled on a full screen normally, the robot is ready for development.

## Install and run
Install opk to run the application directly on the robot. If the application has been installed before, it will be overwritten. 

After the installation is complete, the USB connection can be disconnected for test operation. The following is the installation and operation instructions:

```shell
orionos-sh run
```

After the installation is complete, it is still on the robot's big emoji UI by default, and the current application can be started through the voice command registered in the application. 

The registration of voice commands in opk is completed in the intent of index.js. For details, please refer to Application Registration in [Application Basic Knowledge](). 

If you want to start your newly developed application directly after installation and running, you can set the OPK to start by default through the following command:

```
orionos-sh set -d {appId}
```

*Note: This command is only for testing, and it will become invalid after the machine is restarted. After the application is released, it can be configured through the App Store.*

## Debugging
The principle of debugging robot application is to borrow the robot's operating environment to run the local code on the computer, so the USB must be connected all the time during debugging. 

Debug can realize the rapid release of code and support breakpoint debugging, and will not cover the installation of the application. After debugging, the installed version is still running. 

The Debug command is:
```
orionos-sh debug
```

After the debugging command is executed, a terminal pop-up window will appear. As shown in the figure below, the pop-up box is RN service. Please do not close it. 
![debug](./media/debug3.png)

The loading progress will be displayed on the pop-up window. During the loading process, the robot screen will display a black screen. The loading time will be longer, please be patient and wait for the loading to complete, the follow-up will be much faster. 

The following figure shows the operation interface after the debug command is executed. We can use the keyboard up and down keys to control the selection: 
- `reload`: immediately publish the newly modified code to the robot. 
- `display the debug menu`: display the debug window on the robot screen. You can turn on breakpoint debugging in the debugging popup.
- `exit`: end this debugging.

![debug](./media/debug4.png)


The default value of debugging can quickly update the code, and it does not support breakpoint debugging. If you are performing breakpoint debugging, please select `display the debug menu`. Click the "Debug JS Remotely" option in the debugging pop-up window on the robot, and then you use breakpoint debugging. 

Currently we support WebStorm and Chrome two ways to debug JS code.

*Note: If multiple versions of node are installed in the machine, there may be an error 'orionos-cli cannot be found'. At this time, execute the following `npm install -g orionos-cli --registry=https://npm.ainirobot.com /repository/eve-group/` to solve it.*

### Debug based on WebStorm
1. Add scripts configuration in package.json

    Based on WebStorm debugging, there is no need to execute the orionos-sh debug command separately, and the current configuration can be automatically executed when debugging starts.

    ```
    "scripts": {
        /**Other configuration*/
        "debug": "orionos-sh debug"
    }
    ```

2. Add Configuration

    We need to create a React Native debugging configuration. In the Run/Debug menu of WebStorm, select `Add configutations` or `Edit configrations`, click the `+ `button, and select `Rect Native`, as shown in the following figure:

    ![debug](./media/debug5.png)

3. Configure Configuration

    ![debug](./media/debug6.png)

    As shown in the figure above, we do not need to install the apk, so do not check `Build and launch application`. Click the edit button of `Start React Native Bundler` at the bottom, then select `npm script`, select `debug` in `Script`, `debug` is the name we configured in the first step.

4. Start debugging

    After the configuration is complete, we can click the `Debug` button to start debugging. Breakpoint debugging is not turned on by default. For the specific opening method, please refer to the debugging documentation above.



### Debug based on Chrome
Enabling Chrome debugging is relatively simple. After executing the `orionos-sh debug` command, select the debug menu, and click the `"Debug JS Remotely"` option in the debugging pop-up box of the robot interface. A new Chrome tab page will open in the Chrome menu. 

Select `More Tools -> Developer Tools`, you can view the log in the console, and perform breakpoint debugging in the sources. 

As shown in the following figure:

![debug](./media/debug7.png)



# Application Basic Knowledge

## Application directory structure
Take a new project as an example to introduce the directory structure of the App project and the role of each file type:

<div class="fixed-table bordered-table">

| | |
|-|-|
|<ul><li>app<ul><li>App.js</li><li>AppDebug.js</li><li>demo<ul><li>DemoScreen</li><li>DemoViewModel</li><li>DemoVoice</li><li>DemoTrigger</li></ul></li></ul></li><li>extraResource</li><li>img</li><li>dist</li><li>node_modules</li><li>.npmrc</li><li>package.json</li><li>app.json</li></ul>|<ul><li>Code directory<ul><li>App's main interface</li><li>App debugging main interface (when debugging, start OPK without parameters, you can simulate data here)</li><li>Sample Code<ul><li>SampleApp UI</li><li>Functional code</li><li>Voice command receiver</li><li>Connection between Demo function and the main process (using trigger to jump between OPKs)</li></ul></li></ul></li><li>File resource directory (for example: audio and video)</li><li>Image resource directory</li><li>OPK storage directory (may not exist initially, it will be created automatically after OPK is packaged)</li><li>App dependency library (may not exist initially, execute npm install in project directory, will create automatically)</li><li>npm account configuration</li><li>App configuration and dependency library management</li><li>App's basic configuration file (cannot be modified)</li></ul>|

</div>

## Application components
Application components are the basic building blocks of robot applications. 

Each application component has its own exclusive responsibility. 

All application components together constitute a complete robot application.

### Voice
Voice is responsible for receiving voice commands and server-side commands, which must be inherited from `BaseVoice`.

`onListenCallback` is the voice command callback function:

```java
public onListenCallback(intent: string, result: any, id: number, text: string): boolean {
    return false;
}
```

Parameter Description:

- `intent`: voice command identification
- `result`: Voice parameters
- `text`: text content recognized by speech

Return value:

- `True`： the voice command has been processed and will not be delivered later.
- `False`: the current OPK does not process the instruction, and it will be handled by other OPKs.

### Trigger
Trigger is responsible for the connection between the current fuction and the main process. It can be used to perform the jump switch between OPKs. It needs to be inherited from Trigger. A Channel parameter is required during initialization. The parameter type is a string. It is an identifier for communicating with the ViewModel. ViewModel uses the same string.

The trigger function is used to receive the event and data carried by the ViewModel. After receiving the event, you can decide which OPK to jump to according to TriggerProtocol.eventId. The following example is to jump to the robot wakeup page after receiving the 1001 event:

```java
public trigger(protocol: TriggerProtocol): void | boolean {
    switch (protocol.eventId) {
        case 1001:
            this._trigger('home', protocol);
            break;
    }
}
```

`this._trigger('home', protocol)` is the call that actually executes the OPK jump. Its first parameter is `appKey`. Each OPK will include an `appKey` when registering information. This is the OPK's logo and the second parameter It is the parameter we want to give to the other party OPK, the receiver OPK can be obtained in the constructor using `props.navigation.state.params`.

### ViewModel
ViewModel is mainly used to implement the current business logic and needs to be inherited from BaseViewModel. It also needs a Channel parameter when it is initialized. This parameter needs to be consistent with the Trigger, otherwise the OPK jump may not be possible.

ViewModel has two life cycle functions: onStart and onStop, as the name implies, one is called when the business starts, and the other is called when the business ends.

In addition to the two life cycle functions, there are three functions used to communicate with Trigger:

- _uiTrigger(eventId, data) Jump triggered by UI event
- _voiceTrigger(eventId, data) Jump triggered by voice event
- _apiTrigger(eventId, data) Jump triggered by Api call

### Screen
Screen is the starting point of current business and user interaction. It is responsible for the UI display of the interface and the loading of functional components. It needs to be inherited from BaseComponent. Screen is the starting point of the entire business and the only point of external interaction. The display and hiding of the Screen directly determine the current The status of the business, so the life cycle of other components also needs to be bound to the Screen to maintain the same life and death as the Screen.

The relationship between interface binding and other application components needs to be called in the constructor of Screen:

```java
public constructor(props: BaseComponentProps) {
        super(props);
    this.viewModel = new DemoViewModel();
    let voice = new DemoVoice(this.viewModel);
    //Associate the life cycle of ViewModel and Voice to the current interface
    this.setViewModel(this.viewModel);
    this.setVoice(voice);
    //Registration trigger jump, must be added, otherwise the trigger is invalid
    triggerManager.addTrigger(new DemoTrigger());
}
```

Life cycle functions can be used to handle business start and stop events:

```java
//Interface display
public componentDidMount() {
    //Rewrite didMount of the interface, you must call super
    super.componentDidMount();
}
//Interface hidden
public componentWillUnmount() {
    //Rewrite the Unmount of the interface, it must be called
    super super.componentWillUnmount();
}
```

Rendering function, used to display the UI and load functional components, display a text on the interface as shown below, and start navigation when the interface is displayed:

```java
public render() {
    let navigationParam = new NavigationParam('Reception Point', 0.5, 30000, 5000, 1000, 4);
    return (
    <View>
        <Text style={{ fontSize: 17, color:'red'}}> {'Hello Robot'}</Text>
        <NavigationComponent
            param={navigationParam}
            onFinish={this.onFinish}
            onStatusUpdate={this.onStatusUpdate}
        />
    </View>
    );
}
```

## Application resources

### Picture resource
The image resource of the application needs to be placed in the img directory and loaded through require when used. The parameter is the relative path of the image, as shown in the following example:
```xml
<Image source={require('../../img/bg.png')}>
```

### File resource
File resources are uniformly placed in the extraResource directory. When the application is compiled and packaged, it will be packaged into the OPK. When the OPK is installed on the robot, the file resource storage directory can be obtained through the following interface:
```
AppManager.getOpkExtraPath();
```

## Application registration
The robot application needs to register its own information in the robot system. The information that the robot system can register is combined with external conditions (for example: voice commands) to determine whether to start the robot application. index.js is the entry file of our entire robot application. After loading It will be executed immediately, so our registration should be written in the index.js file.

```java
//Online use
AppRegistry.registerConfig([{
    appKey:'Demo',
    component: () => App,
    intent:'weather&get_weather', //for example:'weather&get_weather'
    appId: appid,
    priority: 1
}]);
//Debug use
AppRegistry.registerComponent(appName, () => AppDebug);
```

There are two registrations in the sample code, one is for the official registration to the robot system, and the other is used for debugging. These two can exist at the same time and will not affect the execution result. The system will select the corresponding registration information under different circumstances. Debugging does not involve voice scheduling and OPK switching. You only need to know the startup interface, so you only need to pass in the AppDebug debugging interface. 

Relatively more information is required for formal registration:

- `appKey`: OPK function identification (when switching OPK, the corresponding OPK will be found according to the appKey)
- `component`: OPK function start interface
- `intent`: OPK start instruction. When another OPK specifies this instruction to do Trigger jump, OPK will start. Or when the global NLP parses out this command, OPK will start. (Only fill in the command to start OPK, all commands can be received after OPK is started)
- `appId`: The appId used when creating the application
- `priority`: Function priority (OPK will compare priority when switching, low priority cannot interrupt high priority, OPK will fail to switch, priority is an array of 1-3, 1 is the highest priority, 3 is the lowest)

*Note 1: The intent can be dynamically modified through the OrionBase platform after the application is released online.*

*Note 2: Priority can be modified dynamically by contacting us after the application is released online.*

## Application jump
The application jump is carried out in the trigger. For details, please refer to the description of the application component Trigger. 

When the application jumps, you need to specify an appKey, which is specified during application registration. The scenes included in the official standard OPK and the corresponding appKey are shown in the following table Show:

<div class="fixed-table bordered-table">

|appName|appKey|Parameters|Description|
|:-----:|------|:--------:|----------|
|Portal|wakeUp|N/A|the emoji face|
|Portal|home|N/A|homepage after wakeup|
|Asking for directions|queryLocation|`{"slots":"{\"destination\":[{\"value\":\"destination point\"}]}"}` <br> *Note: The parameters in slots require an additional json_encode.*|the emoji face|
|Visitor reception|reception|N/A|the emoji face|
|Navigation|navigation|`{result:{destination: 'destination point', distance: -1}}`|navigate to destination|
|Tour Guide|guide|N/A|tour guide|
|Cruise|cruise|N/A|the emoji face|
|Advertising|advert|N/A|advertising & promotion|
|Dance|dance|N/A|robot dance|

</div>

<font color=orange>*Note 1: Please avoid duplication with the appKey in the official OPK during development.*

*Note 2: When using the lead function, the parameters in the slots require an additional json_encode.*</font>

## Voice event distribution
The voice event will be distributed to the currently running OPK first. The current OPK needs to process and consume the command. It can return true in Voice's onListenCallback. If you do not handle the interception, please return false. If the current OPK does not process the voice command, it will query the registration information of all OPKs. If the voice command belongs to the start command of a certain OPK, the priority of the OPK will be compared. If the priority of the current OPK is lower, the current OPK will be exited. Switch to the new OPK for processing. If the voice command is not capable of being processed by OPK, check whether the data carried by the voice command contains answer information, and if it contains answer information, it will be distributed to the small chat module for processing. As shown below:

![voice-event-distribution](./media/voice-event-distribution.png)



# Release and Version iteration

## Application packaging
After the application is developed, we need to package it into an installation package before it can be released online. You can use the following instructions to package:

```shell
orionos-sh pack
```

After the instruction is executed, an opk file will be generated in the dist directory, which is a robot application installation package.

## Install the pack package locally
To install OPK locally, you need to push OPK to the machine first. 

Please connect to the machine with a USB cable first, and then execute the following instructions:

```shell
adb push [your opk local path] /sdcard/robot/rndata/debug.opk
```

Different machines have different installation methods.

For Mini and Baodaping, Use the following commands:

```shell
adb shell am broadcast -a com.ainirobot.remotecontrolservice.rninstallfinish --es path /sdcard/robot/rndata/debug.opk  --es id "appId"
```

For Greetbot, use the following commands:

```shell
adb shell am broadcast -a com.ainirobot.install.plugin --es path /sdcard/robot/rndata/debug.opk
```

## Contact sales engineer

The sales engineer will setup the following steps for you:
- Upload the installation package
- Application configuration
- App Store Setup



# How to use the sample code

## Introduction
The robot system has been continuously iteratively upgraded, and with each upgrade, it has been continuously opening up more interfaces for customers to use. The ensuing problem is that when the application developed by the customer runs on a lower version, it may not run normally due to the lack of interfaces. In order to ensure the normal operation of the robot application, when installing through the application store, the compatibility judgment will be made according to the orionos-eve-core version of the current application. If it is not compatible, the installation is prohibited. When developing, you need to pay attention to the system version of the target machine. The applicable orionos-eve-core version can be selected according to the system version.

## Version Compatibility
Listed in the table is the minimum version of each robot model that can be compatible:

<div class="fixed-table bordered-table">

|core version|Greetbot|Mini|Lucki|Baodaping|
|:----------:|:------:|:---|:---:|:-----------:|
|2.3.0|6.1|5.13|5.7|5.4|
|2.2.0|5.13|5.13|5.7|5.4|

</div>

## Start method:
1. Command line to switch to the current project directory: 
    ```
    orionos-sh run
    ```
2. Three-finger slide from top of robot screen -> Application Center -> Xiaobao
3. Use this voice command to open sample OPK: 
    ```
    "Open the developer demo"
    ```