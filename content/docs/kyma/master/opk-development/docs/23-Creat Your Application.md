---
title: 'Creat Your Application'
type: 'Get Started with OPK'
---

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
