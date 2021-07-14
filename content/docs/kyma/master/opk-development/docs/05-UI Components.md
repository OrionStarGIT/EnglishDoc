---
title: 'UI Components'
description: 'update: 2021-07-01'
---

# Large screen display

## Large screen display

Component name: `ExDisplay`

Component description: 

The content display component that controls the big screen of the robot is only valid on the big screen robot of the Leopard.

Example of use:

```java
private showContent = (): ReactChild => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor:'black' }}>
            <Image style={{ width: '100%', height: '100%', resizeMode:'contain' }} source={require('picture path')}/>
        </View>
    );
};

public render() {
    return (
        <>
            <ExDisplay
                child={this.showContent}
                onDisplayAdded={this.onDisplayAdded}
                onDisplayRemoved={this.onDisplayRemoved}
                show={this.show}
                hide={this.hide}
            />
        </>
    );
}
```

**Attributes:**

- `-child`: Large screen display View
- `onDisplayAdded`: Large screen connection callback
- `onDisplayRemoved`: callback when the large screen is disconnected
- `onDisplayChanged`: callback of the connection status of the large screen
- `show`: display callback (introduced in version 1.26.0)
- `hide`: hide callbacks (introduced in version 1.26.0)

***Note: All the above attributes are of Function type, do not use'()' when filling in the attributes.***

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|No|No|No|No|Yes|

</div>



# Frame animation

Component name: `ImageFrame`

Component description: 

Frame animation component, used to play a set of picture sequences.

Example of use:
```java
public render() {
    let imageList = [
        require('../../../../img/leadingtop/leadtop1.png'),
        require('../../../../img/leadingtop/leadtop2.png'),
        require('../../../../img/leadingtop/leadtop3.png')
    ];
    return (
        <>
            <ImageFrame
                images={imageList}
                loop={false}
                onPlayFinish={this.onPlayFinish}
                style={{/**Attribute value*/ }}
            />
        </>
    );
}
```

**Attributes:**

- `images`: sequence of pictures to be played
- `loop`: Whether to play in a loop
- `onPlayFinish`: Playback end callback, there is no such callback during loop playback
- `type`: This attribute value will be used as a parameter of onPlayFinish after the playback ends
- `startFrameIndex`: Play start frame, specify which picture to start playing from, default 0
- `framesPerSecond`: The number of frames played per second, the default is 25 frames per second

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



# Gaussian Blur

Component name: `BlurOverlay`

Component description: 

Gaussian blur effect component, used to intercept the previous page content and blur it as the background of the current page when the page jumps.

Example of use:
```xml
<>
     <BlurOverlay
         style={{ flex: 1, justifyContent:'center', alignContent:'center' }}
         showBlurOverlay={true}
         hasFaceParticle={true}
     >
         <Text>BlurOverlay</Text>
     </BlurOverlay>
</>
```

**Attributes:**

- `showBlurOverlay`: Whether to display the blurred background, the default is false
- `hasFaceParticle`: Whether the captured background image contains small eyes

Minimum version: 1.4.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



# Video Preview

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

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|No|No|No|No|Yes|

</div>
