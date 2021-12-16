---
title: 'Frame animation'
type: 'UI Components'
---

## Frame animation

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

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
