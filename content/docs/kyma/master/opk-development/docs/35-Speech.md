---
title: 'Speech'
type: 'API Reference (for OPK)'
---

## Play TTS

Method name: `playText`

Calling method:

```
let listener = new TextListener();
listener.setFinish(() => {
    //TODO: Play complete
    listener.removeListener();
});
speechApi.playText(listener.getId(), text);
```

Parameter Description:

- `callbackId`: callback id
- `text`: the text content to be played

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Stop TTS playback
Method name: `stopTTS`

Calling method:
```
speechApi.stopTTS();
```

Parameter Description: none

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Set whether to enable speech recognition
Method name: `setRecognizable`

Calling method:
```
speechApi.setRecognizable(enbale);
```

Parameter Description:

- `enable`: Whether to enable speech recognition, true to enable false to disable

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Set whether the sound can be picked up for a long time
Method name: `setRecognizeMode`

Calling method:
```
speechApi.setRecognizeMode(isContinue);
```

Parameter Description:

- `isContinue`: Whether to enable long pickup. True means continuous recognition, When you recognize next time, you don’t need to wake up it; false means single recognition, each time you need to wake up before you can start speech recognition

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Identify the specified text content
Method name: `queryByText`

Calling method:
```
speechApi.queryByText(text);
```

Parameter Description:

- `text`: The text content that needs to be recognized. After the text content is recognized, it will be called back to Voice (for voice content, please refer to the basic knowledge of document application), which is the same as normal voice recognition.

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Set voice recognition area
Method name: `setAngleCenterRange`

Calling method:
```
speechApi.setAngleCenterRange(centerAngle, rangeAngle);
```

Parameter Description:

- `centerAngle`: speech recognition center angle, range [0, 360)
- `rangleAngle`: interval angle, range [0, 120]

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Reset speech recognition center angle
Method name: `resetAngleCenterRange`

Calling method:
```
speechApi.resetAngleCenterRange();
```

Parameter description: none

Minimum version: 1.0.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Play local audio files
Method name: `playToneByLocalPath`

Calling method:

```
let listener = new ToneListener();
listener.setFinish(() => {
    //TODO: Play complete
    listener.removeListener();
});
speechApi.playToneByLocalPath(listener.getId(), path);
```

Parameter Description:

- `callbackId`: callback id
- `path`: local audio file path

Minimum version: 1.8.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Stop local audio playback
Method name: `stopTone`

Calling method:
```
speechApi.stopTone();
```

Parameter description: none

Minimum version: 1.8.0

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
