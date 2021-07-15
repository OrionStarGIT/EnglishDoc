---
title: 'Development Environment'
type: 'Get Started with OPK'
---

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

