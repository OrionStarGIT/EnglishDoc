---
title: 'Basic components'
type: 'UI Components'
---

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
