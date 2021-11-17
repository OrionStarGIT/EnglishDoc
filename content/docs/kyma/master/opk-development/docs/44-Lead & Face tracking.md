---
title: 'Lead & Face tracking'
type: 'Functional Components'
---

## Automatic face tracking (including dynamic voice pickup)

Component name: `FaceTrackSoundLocalizationComponent`

Component description: 

Composite component, using StandardFaceTrackComponent and SoundLocalizationComponent to automatically track human faces. During tracking, the robot can be called by it's name (default xiao bao xiao bao), and the robot will turn to the direction of the sound source and continue to search for people. For tracking, the component will continue to run and will not stop actively, and the user needs to actively perform component uninstallation.

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
    return (
        <>
            <FaceTrackSoundLocalizationComponent
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
                soundLocalizationParam={this.getSoundParams()}
                standardFaceTrackParam={this.getFaceTrackParams()}
            />
        </>
    );
}
```

**Attributes:**

- `soundLocalizationParam`: `SoundLocalizationComponent` component parameter, the type is `SoundLocalizationParam`
- `standardFaceTrackParam`: `StandardFaceTrackComponent` component parameter, the type is `StandardFaceTrackParam`
- `onSoundLocalizationFinish`: `SoundLocalizationComponent` component result callback
- `onSoundLocalizationStatusUpdate`: `SoundLocalizationComponent` component status callback
- `onStatusUpdate`: `StandardFaceTrackComponent` component status callback
- `onFinish`: `StandardFaceTrackComponent` component execution end callback

**Parameter Description:**

- `soundLocalizationParam`: For detailed parameter description, please refer to the document description of Motion Control-Robot Sound Source Localization (SoundLocalizationComponent)
- `standardFaceTrackParam`: For detailed parameter description, please refer to the document description of Face Tracking-Automatic Face Tracking (StandardFaceTrackComponent)

**Status description:**

For status description, please refer to the documentation of `StandardFaceTrackComponent` and `SoundLocalizationComponent`

**Result description:**

For result description, please refer to the documentation of `StandardFaceTrackComponent` and `SoundLocalizationComponent`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Automatic face tracking

Component name: `StandardFaceTrackComponent`

Component description: 

Automatic face tracking, which can automatically track people who are closer and whose face angle is smaller according to the recognition result.

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
    let param = new StandardFaceTrackParam(personId);
    return (
        <>
            <StandardFaceTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is StandardFaceTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

- `personId`: The object to be tracked for the first time, you can leave it blank, if you don’t fill it, it will automatically detect a suitable face for tracking
- `maxDistance`: The maximum distance of face recognition. Face data exceeding this distance are automatically ignored. The default is 3 meters.
- `maxFaceAngleX`: Recognize the maximum face angle, the default is 60 degrees
- `isNeedInCompleteFace`: Whether to include incomplete face detection, the default is false
- `disappearTimeout`: The face loss timeout time. If the face data is not detected for more than this time, the component will automatically exit
- `isMultiPersonNotTrack`: Whether to track when multiple face data is detected, the default is false
- `multiPersonNotTrackDistance`: multi-person detection distance, 2 meters by default
- `isAllowMoveBody`: Whether the robot is allowed to rotate its body

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720001`: Tracking is successful, constant definition `ComponentStatusConst.STATUS_TRACK_SUCCESS`
- `32720003`: This tracking is over, constant definition `ComponentStatusConst.STATUS_TRACK_END`

**Result description:**

Get the result code through `ComponentEvent.status`:

`32610003`: Face data is not detected in timeout, ComponentEvent.data is face data, constant definition `ComponentResultConst.RESULT_TIMEOUT`
`-32600004`: Failed to obtain face data, constant definition `ComponentErrorConst.ERROR_OPEN_PERSON_DETECT_FAILED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Track the designated person

Component name: `FaceTrackComponent`

Component description: 

Track the specified person according to the face id, a single tracking component, after the tracking fails, it will not automatically switch to another person for tracking.

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
    let param = new FaceTrackParam(personId);
    return (
        <>
            <FaceTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is FaceTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: callback when component execution ends

**Parameter Description:**

`personId`: the face id of the tracking object, required
lostDistance: Lost distance. If the distance between the tracking object and the robot exceeds this value, the tracking will be abandoned. The default is 2 meters.
`lostTimeout`: Timeout, how long it lasts to give up tracking if the tracked object is not found, the default is 2000 milliseconds

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720001`: Tracking is successful, constant definition ComponentStatusConst.STATUS_TRACK_SUCCESS

**Result description:**

Get the result code through `ComponentEvent.status`:

- `32610005`: The tracking object is not detected in timeout, constant definition `ComponentResultConst.RESULT_GUEST_LOST_TIMEOUT`
- `32610004`: The tracking object is too far away, the constant definition `ComponentResultConst.RESULT_GUEST_FAR_AWAY`
- `-32610005`: User lost, constant definition `ComponentErrorConst.ERROR_PARAMS_PERSON_COULD_NOT_BE_TRACKED`

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.1.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Lead

Component name: `LeadingTrackComponent`

Component description: 

The leading component is mainly used for the continuous detection and tracking of human face + human body during the movement of the human following the robot. It supports switching the rear camera (valid for the robot model that includes the rear camera) or turning the head backward (for The robot model that supports head rotation takes effect), which can be used in conjunction with the navigation component to control the movement or stop of the robot according to the status reported by the leading component.

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
    let param = new LeadingTrackParam();
    return (
        <>
            <LeadingTrackComponent
                param={param}
                onStatusUpdate={this.onStatusUpdate}
                onFinish={this.onFinish}
            />
        </>
    );
}
```

**Attributes:**

- `param`: component parameter, the type is LeadingTrackParam
- `onStatusUpdate`: component status callback
- `onFinish`: componentEnd of execution callback

**Parameter Description:**

- `lostTime`: how long no one's face or human body data is considered lost, the default is 2000 milliseconds
- `waitTime`: Over-distance waiting timeout time, default -1
- `farawayDistance`: how far the person is from the robot to report the over distance status, the default is 2.8 meters
- `detectDelay`: Face detection delay time. The robot may switch cameras or turn heads at the beginning of the lead phase, which leads to a high rate of failure to recognize faces. It can be delayed for a period of time before detection. The default is 5000 milliseconds.
- `maxDistance`: face recognition range, face data beyond this distance is automatically ignored, the default is 3 meters
- `maxFaceAngleX`: Maximum face angle, 60 degrees by default
personAppearTimeout: the timeout for finding a person, the default is 1500 milliseconds

**Status description:**

Get the status code through `ComponentEvent.status`:

- `32720007`: Found traceable target, constant definition `ComponentStatusConst.STATUS_LEAD_TRACK_FIND_PERSON`
- `32720001`: Tracking is successful, constant definition `ComponentStatusConst.STATUS_TRACK_SUCCESS`
- `32720004`: Leading target is too far away, constant definition `ComponentStatusConst.STATUS_GUEST_FARAWAY`
- `32720005`: Lead the target closer, constant definition `ComponentStatusConst.STATUS_GUEST_FARAWAY_END`
- `32720009`: Leading the target is too far away for a long time, constant definition` ComponentStatusConst.STATUS_LEAD_GUEST_FARAWAY_TIMEOUT`
- `32720008`: Leading target is lost, constant definition `ComponentStatusConst.STATUS_LEAD_GUEST_LOST`
- `32720010`: Lead the target to appear, constant definition `ComponentStatusConst.STATUS_LEAD_GUEST_APPEAR`
- `32720011`: Failed to switch camera, constant definition `ComponentStatusConst.STATUS_CAMERA_SWITCH_FAILED`

**Result description:**

The component will continue to run and will not stop automatically until you uninstall the component.

***Note: Please use constant definitions for result and status judgment during development. The return codes appearing above may be changed in subsequent versions.***

Minimum version: 1.1.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|No|No|No|

</div>
