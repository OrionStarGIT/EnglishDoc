---
title: 'Development problem'
type: 'FAQ'
---

## Which component should be used for face recognition?

If you only need to identify a specific person based on conditions, you can use `WakeupAndPreWakeupStartCheckParam` and `PersonAppearComponent` components for identification. For details, please refer to the document function component-face recognition section. If you need the information of all people who can be identified currently, you can use `PersonManager Get the .getAllPerson()` interface. 

*For details, please refer to the basic interface of the document - face recognition section.*

## Does opk now support packaging and playing audio resources?

Yes. 

All file resources can be placed in the `extraResource` directory. After installation, these resources will also be copied to the robot. The file resource directory can be obtained through `AppManager.getOpkExtraPath`.

## What is the problem that the webview component is invalid after the introduction, the page is blank?

The reason is that the root component of the return content can only be the `WebView` tag. When wrapping a `View` tag in the outer layer, the page is blank and the imported page cannot be displayed. 

Documentation: https://stackoverflow.com/questions/38963046/can-i-use-webview-inside-a-view-react-native

## How to implement data communication with your own server?
You can use the fetch API to make network requests.

## How to read the parameters carried by the jump page?
You can use `props.navigation.state.params.result` to get parameters in the `constructor` function.
