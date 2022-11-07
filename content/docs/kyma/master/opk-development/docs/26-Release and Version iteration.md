---
title: 'Release and Version iteration'
type: 'Get Started with OPK'
---

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

For Mini and BigScreenBot, Use the following commands:

```shell
adb shell am broadcast -a com.ainirobot.remotecontrolservice.rninstallfinish --es path /sdcard/robot/rndata/debug.opk  --es id "appId"
```

For Greetbot, use the following commands:

```shell
adb shell am broadcast -a com.ainirobot.install.plugin --es path /sdcard/robot/rndata/debug.opk
```

For Lucki, use the following commands:

```shell
adb.exe shell am broadcast -a com.ainirobot.install.plugin --es path /sdcard/robot/rndata/debug.opk --es id 'appid'
```

## Uninstall the pack package locally

Mini and Greetbot and Lucki:

```shell
adb shell am broadcast -a com.ainirobot.uninstall.plugin --es appid "appid"
```

## Opk path (possible)


```shell
/sdcard/robot/rndata/  or   /sdcard/rndata/
```

## Contact sales engineer

The sales engineer will setup the following steps for you:
- Upload the installation package
- Application configuration
- App Store Setup
