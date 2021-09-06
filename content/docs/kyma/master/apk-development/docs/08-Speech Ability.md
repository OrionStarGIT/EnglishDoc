---
title: 'Speech Ability'
type: 'API Reference'
---

## Introduction
Speech Ability includes listening and speaking abilities.

Ability to listen: 

>ASR part returns through SkillCallback, and NLP part returns through ModuleCallBack.

Ability to speak: 

>A variety of speakers can be adjusted in the settings.

## Create speech service callback

```java
SkillCallback mSkillCallback = new SkillCallback() {
    @Override
    public void onSpeechParResult(String s) throws RemoteException {
        //The result of temporary speech recognition
    }
    @Override
    public void onStart() throws RemoteException {
        //Start recognition
    }
    @Override
    public void onStop() throws RemoteException {
        // end of recognition
    }
    @Override
    public void onVolumeChange(int volume) throws RemoteException {
        //The size of the recognized voice changes
    }
    /**
     * @param status 0: return normally
     * 1: other returns
     * 2: Noise or single_other return
     * 3: Timeout
     * 4: Forced to cancel
     * 5: The asr result ends early, without passing through NLU
     * 6: In the case of full duplex with the same semantics, other returns
     */
    @Override
    public void onQueryEnded(int status) throws RemoteException {
    }
    @Override
    public void onQueryAsrResult(String asrResult) throws RemoteException {
        //asrResult: final recognition result
    }
};
```

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Connect to speech service

```java
final SkillApi skillApi = new SkillApi();
skillApi.connectApi(context, new ApiListener() {
     @Override
     public void handleApiDisabled() {
     }
     @Override
     public void handleApiConnected() {
         //Voice service connection is successful, register voice callback
         skillApi.registerCallBack(mSkillCallback);
     }
     @Override
     public void handleApiDisconnected() {
         //Voice service has been disconnected
     }
});
```

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## TTS playback
Method name: playText

Call method：

```java
skillApi.playText(text, new TextListener() {
     @Override
     public void onStart() {
         //Play start
     }
     @Override
     public void onStop() {
         //Play stop
     }
     @Override
     public void onError() {
         //Play error
     }
     @Override
     public void onComplete() {
         //Play is complete
     }
});
```

Parameter Description:

- `text` : TTS playback text

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Stop TTS playback
Method name: stopTTS

Calling method:
```java
skillApi.stopTTS();
``` 

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Set speech recognition mode
Method name: setRecognizeMode

Calling method:
```java
skillApi.setRecognizeMode(isContinue);
```

Parameter Description:

- `isContinue`: boolean type, true continuous recognition false single recognition

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Turn off or turn on speech recognition
Method name: setRecognizable

Calling method:

```java
skillApi.setRecognizable(enable);
```

Parameter Description:

- `enable`: boolean type, true open false close

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Set speech recognition area
Method name: setAngleCenterRange

Calling method:
```java
skillApi.setAngleCenterRange(angleCenter, angleRange);
```

Parameter Description:

- `angleCenter` : center angle, float type, [0,360)
- `angleRange` : interval angle, float type, [0,120]

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Get NLP results through text
Method name: queryByText

Calling method:
```java
skillApi.queryByText(text);
``` 

Parameter Description:

- `text` : the text to be queried, String type

*Note: This interface has no return value. The result of the query is returned as a voice command through onSendRequest of ModuleCallback.*

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## Audio data collection

```java
//Audio sampling rate (fixed 16000)
private final int AUDIO_RATE = 16000;
//Buffer length
private final int AUDIO_BUF_LEN = 640;
//Channel (stereo)
int channelConfig = AudioFormat.CHANNEL_IN_STEREO;
int minRecBufSize = AudioRecord.getMinBufferSize(AUDIO_RATE, channelConfig, AudioFormat.ENCODING_PCM_16BIT);
int recBufSize = minRecBufSize * 2;
AudioRecord audioRecorder =new AudioRecord(AudioSource.MIC, AUDIO_RATE, AudioFormat.CHANNEL_IN_STEREO, AudioFormat.ENCODING_PCM_16BIT, recBufSize);
//data collection
byte[] tempBufRec = new byte[AUDIO_BUF_LEN];
byte[] bfOutLeft = new byte[AUDIO_BUF_LEN / 2];
byte[] bfOutRight = new byte[AUDIO_BUF_LEN / 2];
int bufferSize = 5 * 2 * 16000;
int readBytes = audioRecorder.read(tempBufRec, 0, bufferSize);
if (readBytes == bufferSize) {
    deinterleaveData(tempBufRec, bfOutLeft, bfOutRight, bufferSize);
    //The separated data, bfOutLeft is the final required data
}
//Left and right channel data separation
private void deinterleaveData(byte[] src, byte[] leftdest, byte[] rightdest, int len) {
    int rIndex = 0;
    int lIndex = 0;
    for (int i = 0; i <len;) {
        leftdest[rIndex] = src[i];
        leftdest[rIndex + 1] = src[i + 1];
        rIndex = rIndex + 2;
        rightdest[lIndex] = src[i + 2];
        rightdest[lIndex + 1] = src[i + 3];
        lIndex = lIndex + 2;
        i = i + 4;
    }
}
```

*Note: All parameters are fixed parameters and cannot be changed, otherwise the data may not be collected.*

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>



## text to mp3
Method name: textToMp3

Calling method:
```java
boolean status = RobotApi.getInstance().textToMp3(reqId, text, path, name,
    new CommandListener(){
        @Override
        public void onResult(int result, String message) {
            if (Definition.RESULT_OK == result) {
                try {
                    JSONObject jsonObject = new JSONObject(message);
                    int code = jsonObject.optInt("code");
                    String errMessage = jsonObject.optString("message");
                    if (code == 0) {
                        mediaPlayer = new MediaPlayer();
                        mediaPlayer.setDataSource(path + File.separator + name);
                        mediaPlayer.prepare();
                        mediaPlayer.start();
                    } else{
                    }
                } catch (JSONException | IOException e) {
                    e.printStackTrace();
                }
            }else {
            }
        }
  });
``` 

Parameter Description:

- `reqId`: int type command id, pass 0 
- `text`: String type to be converted text
- `path`: String type file path
- `name`: String type file name
- `listener`: CommandListener message callback{"code":0, "message":"err msg"}

Return Value:
```java
int result 0 command executed / -1 not executed
```

Note:
1. To call the interface, you need the app to apply for sdcard usage rights
2. After the conversion is successful, an mp3 file will be generated/overwritten in the specified path
3. Please manage the file yourself

Applicable Platform:

<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>