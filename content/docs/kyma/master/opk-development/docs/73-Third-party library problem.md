---
title: 'Third-party library problem'
type: 'FAQ'
---

## What type of third-party RN components can be used directly?

All RN components introduced in '[React Native Components]()' can be used directly. 

RN components that are not included can also be used directly if they are libraries that **only contain JS code**. Libraries that need to modify the Android code can be imported using dynamic extension components. For details, please refer to the [dynamic extension components]() section of the document.

## react-background-job does not take effect

Problem appearance:

Using `react-background-job` to start a background task does not take effect.

Problem causes:

`react-background-job` defaults to take effect only when the current application is in the background.

solution:

Set `exact` and `allowExecutionInForeground` to `true`, when starting the task.

```java
BackgroundJob.schedule({
     /**Other configuration*/
     exact: true,
     allowExecutionInForeground: true
});
```