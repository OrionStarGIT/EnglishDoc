---
title: 'Video Preview'
type: 'UI Components'
---

## Video Preview

Component name: `RNCameraFilterView`

Component description: 

Camera preview component, supports taking pictures.

Example of use:
```
public render() {
    return (
        <>
            <RNCameraFilterView
                ref={ref => {
                    this.cameraView = ref;
                }}
                onCameraFilterInitSuccess={this.onCameraFilterInitSuccess} //Success callback
                onCameraFilterFailure={this.onCameraFilterFailure} // Failure callback
                onCameraFilterSnapShot={this.onCameraFilterSnapShot} // Camera callback
                type={CameraType.CAMERA_SHARE}
                style={{
                    width: 1200 / 3.5,
                    height: 2134 / 3.5,
                    position:'absolute',
                    marginTop: 0,
                    marginLeft: 0
                }}
            />
        </>
    );
}
```

**Attributes:**

- `onCameraFilterInitSuccess`: callback of successful initialization
- `onCameraFilterFailure`: callback of initialization failure
- `onCameraFilterSnapShot`: callback of the photo result
- `type`: Camera video stream type

**Method:**

The component object can be obtained through the ref attribute, and the methods provided by the component can be called through the component object:

- `saveSnapShot`: take a picture
- `pausePreview`: pause preview
- `resumePreview`: resume preview

Minimum version: 1.23.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|No|No|No|No|Yes|

</div>
