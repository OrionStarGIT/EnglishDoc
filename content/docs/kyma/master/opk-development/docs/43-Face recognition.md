---
title: 'Face recognition'
type: 'Functional Components'
---

## Wake-up and pre-wake-up detection

Component name: `WakeupAndPreWakeupStartCheckComponent`

Component description: 

Face recognition component, which can support ordinary face recognition (pre-wake up) and accurate face recognition (satisfy the wake-up condition). Normal face recognition can only recognize faces, but cannot follow-up tracking. Accurate faces Recognition can generate an id based on facial features, and then continue tracking based on the id (refer to the face tracking component). If the identified person has registered detailed information (refer to the face registration component for registration methods), the component can return to include Details including name, etc.

Example of use:

```java
public onStatusUpdate = (event?: ComponentEvent): boolean => {
    //TODO: state processing
    return true;
};

public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let wakeupParam = new WakeupAndPreWakeupStartCheckParam(true, 3, 1.3, 45, true, undefined, true, 5 * 1000, undefined);
    return (
        <>
            <WakeupAndPreWakeupStartCheckComponent
                param={wakeupParam}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type WakeupAndPreWakeupStartCheckParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `isNeedPreWakeup`: whether pre-wakeup is required, if set to false, there will be no pre-wakeup state callback, the default is true
- `maxDistance`: The maximum distance of face recognition. Face data exceeding this distance are automatically ignored. The default is 3 meters.
- `wakeupFaceDistance`: The maximum distance to wake up. If the distance exceeds this distance, the wakeup callback will not be triggered. The default is 1.3 meters.
- `wakeupFaceAngleX`: The maximum angle of wakeup. If the face angle is greater than this value, the wakeup callback will not be triggered. The default is 45 degrees.
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is true
- `incompleteFaceCacheTimeout`: incomplete face detection cache time, default 3000 milliseconds
- `isPreWakeupNeedBody`: Whether to trigger the pre-wakeup callback when the human body is detected, the default is true
- `preWakeupIntervalTime`: the interval time between two pre-wakeups, below this value, the pre-wakeup will not be triggered again, the default is 20000 milliseconds
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds
- `isWakeupNeedRecognize`: Whether to wake up to get the detailed information of registration (this parameter is only valid on GreetBot big screen)

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32710001`: The pre-wakeup condition has been met, the component will not stop after the pre-wakeup is met, and will continue to perform more detailed identification, constant definition `ComponentStatusConst.STATUS_PRE_WAKEUP`

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: The wake-up condition is met, ComponentEvent.data is face data, and the constant is defined as ComponentResultConst.RESULT_SUCCESS
- `-32600004`: Failed to obtain face data, constant definition ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED

**Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.**

**Face data description:**

The returned face data can be obtained through `ComponentEvent.data`. The value is a json string:

- `id`: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- `name`: registered name, the identified person has not been registered, the value is empty
- `angle`: face angle
- `distance`: distance
- `facewidth`: face width
- `faceheight`: face height
- `faceX`: the x coordinate of the face
- `faceY`: the y coordinate of the face

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Find people based on conditions
Component name: `PersonAppearComponent`

Component description: 

It is used to judge whether there are people who meet the conditions. When there are people who meet the conditions, the component will automatically call back the result and end the operation.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};
public personAppearOnUpdate = (event: any): boolean => {
    //If a face is detected, a cut-out face photo can be obtained from event.data
}

public render() {
    let personAppearParam = new PersonAppearParam();
    return (
        <>
            <PersonAppearComponent
                param={personAppearParam}
                onFinish={this.onFinish}
                onStatusUpdate={this.personAppearOnUpdate}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type PersonAppearParam
- `onFinish`: callback when component execution ends
- `onStatusUpdate`: callback when component status changes

**Parameter Description:**

- `personId`: Find according to id, used to detect the face of a specific id, default -1
- `personName`: used to detect the face of a specific name, the default is empty
- `maxDistance`: The maximum distance of detection, the default is 3 meters, face data beyond this distance is automatically ignored
- `maxFaceAngleX`: The maximum face angle detected, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is false
- `incompleteFaceCacheTimeout`: incomplete face detection cache time, default 3000 milliseconds
- `isNeedBody`: Whether to detect the human body, the default is false
- `isNeedRecognize`: Whether to recognize detailed information, the default is true
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds
- `appearTimeout`: detection timeout time, the default is 7000 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: detection is successful, `ComponentEvent.data` is face data, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `32610003`: No qualified person is detected in timeout, constant definition `ComponentResultConst.RESULT_TIMEOUT`
- `-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

**Face data description:**

The returned face data can be obtained through `ComponentEvent.data`. The value is a json string:

- `id`: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- `name`: registered name, the identified person has not been registered, the value is empty
- `angle`: face angle
- `distance`: distance
- `facewidth`: face width
- `faceheight`: face height
- `faceX`: the x coordinate of the face
- `faceY`: the y coordinate of the face

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Detect whether the person is missing
Component name: `PersonDisappearComponent`

Component description: 

It is used to detect whether the qualified person is lost, and the result callback will be triggered when the qualified person does not appear for a period of time.

Example of use:

```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let personDisappearParam = new PersonDisappearParam();
    return (
        <>
            <PersonDisappearComponent
                param={personDisappearParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, type PersonDisappearParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: ID of the face to be checked, default -1
- `personName`: The name of the person to be detected, empty by default
- `maxDistance`: The maximum distance of detection, the default is 3 meters, face data beyond this distance is automatically ignored
- `maxFaceAngleX`: The maximum face angle detected, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is `false`
- `isNeedBody`: Whether to detect the human body, the default is false
- `disappearTimeout`: After the person is lost, the component will continue to perform face recognition until no data that meets the conditions is found for more than this time, it will actively exit
- `lostTimeout`: How long does the face data that do not meet the conditions last, then it is considered that the person is lost, and the person's lost status will be reported, but the component will not exit, and must be smaller than `disappearTimeout`

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32710014`: Person has been lost, constant definition `ComponentStatusConst.STATUS_PERSON_LOST_TIMEOUT`

**Result description:**

Get the result code through `ComponentEvent.status`:

`32610003`: No qualified person is detected in timeout, constant definition `ComponentResultConst.RESULT_TIMEOUT`
`-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Face registration

Component name: `RegisterComponent`

Component description: 

Register personal information. The registered information can be obtained during face recognition. If it is already registered, call it again to modify the registration information.

Example of use:
```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let registerParam = new RegisterParam(name);
    return (
        <>
            <RegisterComponent
                param={registerParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is RegisterParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personName`: the name of the registrant, required
- `photoPath`: The path of the picture, if the path is empty, it will be automatically recognized to obtain the face photo
- `personAppearTimeout`: Face detection timeout time, continuous no face detection, failure to exit, default 2000 milliseconds
- `recognizeTimeOut`: Recognition timeout time, continuous failure to obtain face photos, failure to exit, default 800 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610010`: Registration is successful, constant definition `ComponentResultConst.RESULT_REGISTER_SUCCESS`
- `32610011`: The name modification is successful, and the constant is defined `ComponentResultConst.RESULT_MODIFY_NAME_SUCCESS`
- `32610003`: Registration failed, constant definition `ComponentResultConst.RESULT_TIMEOUT`
- `-32640013`: Invalid picture, constant definition `ComponentErrorConst.ERROR_REGISTER_PICTURE_INVALID`
- `-32640011`: Modify name recognition, constant definition `ComponentErrorConst.ERROR_MODIFY_NAME_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Query registration information

Component name: `RecognizeComponent`

Component description: 

Query the registration information according to the face id. The wake-up component and the face search component already contain the call to this component.

Example of use:
```java
public onFinish = (result?: ComponentEvent): boolean => {
    //TODO: result processing
    return true;
};

public render() {
    let recognizeParam = new RecognizeParam(personId);
    return (
        <>
            <RecognizeComponent
                param={registerParam}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is RecognizeParam
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: face id, required
- `recognizeTimeout`: Face recognition timeout time, the default is 2000 milliseconds

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610001`: Successful recognition, constant definition `ComponentResultConst.RESULT_SUCCESS`
- `-32630003`: Failed to get picture, constant definition `ComponentResultConst.ERROR_GET_PICTURE_FAILED`
- `-32610007`: Invalid face id, constant definition `ComponentResultConst.ERROR_PARAMS_PERSON_ID_INVALID`
- `-32640002`: The picture is unqualified and cannot be recognized, and the constant definition is ComponentErrorConst.ERROR_REMOTE_DETECT_FAILED
- `-32600003`: Recognition timeout, unrecognized, constant definition `ComponentErrorConst.ERROR_RECOGNIZE_TIMEOUT`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
 

## Face registration preview component

Component name: `ReceptionRegisterCameraView`

Component description: 

The face detection preview image component is used to display the content of the current robot camera. Can be used with the PersonAppearComponent component.

Example of use:
```java
public onPreviewStatusUpdate = (state: any): void => {
    //TODO: result processing
    console.log(TAG,'ReceptionRegisterCameraView', state);
    if (state !=='RESULT_SUCCESS') {
    }
};

public onCamareViewCapture = (state: string,
    originalImageFile: string,
    compressedFile: string): void => {
    console.log(TAG,'onCamareViewCapture', state, originalImageFile, compressedFile)
}

public render() {
    return (
        <>
            <ReceptionRegisterCameraView
               onPreviewState={this.onPreviewStatusUpdate}
               onCaptureState={this.onCamareViewCapture}/>
        </>
    );
}
```

**Attributes:**

- `onPreviewState`: This function will be called back to notify when an error occurs in the preview component.
- `onCaptureState`: Triggered when the preview takes a photo, and the picture information can be retrieved in the callback.

**Main method:**

`takePicture`: take a picture

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
