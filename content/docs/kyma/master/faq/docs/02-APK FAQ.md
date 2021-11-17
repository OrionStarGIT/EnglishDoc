---
title: 'APK FAQ' 
type: 'Code FAQ'
---

## OPK/APK development environment switch

There are only two ways to correctly load the robot ability component of the installed APK:

### 1. Through the robot application center, click apk to run.

The specific method is: pull down with three fingers on the robot screen -> all applications -> find the APK and enter.

If you need a debug program, you can open the APK in this way, and then the attach process can be debugged.

For example, we want to open a developer demo Demo:

<video width="270" height="480" controls>
         <source src="/assets/docs/kyma/master/faq/docs/assets/set_home.mp4" type="video/mp4">
</video>

### 2. Set the APK as the default APK.

This method is not suitable for debugging, please refer to the [SDK access](https://orionbase.orionstar.com/doc?m=21&h=a077487&lang=cn#%E9%85%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%90%AF%E5%8A%A8%E7%A8%8B%E5%BA%8F)
part in apk development for details.


If you use Android studio's run or debug to directly start the apk, it will not be able to load the robot ability
components correctly, remember.

## No sound during video call

Because the robot microphone array requires long sound pickup, there are some restrictions on using the audio recorder
function from the Android framework.

It must be under specific audio settings to receive sound. For details, please refer to SDK document->Audio->[Robot audio collection parameters](https://orionbase.cn/doc?m=21&h=6065a29&lang=cn#%E9%9F%B3%E9%A2%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86)

## Camera orientation is wrong

The camera of the robot is selected to be 90° in the direction after the Android standard method is started. This is
because the robot does not have a gyroscope. The default is a vertical screen camera in the program, but the robot is
actually a horizontal screen device.The solution is very simple. It can be corrected by setting the camera rotation -90°
or camera rotation 270° through the Android API (or the API of other video SDKs).

## Lucki top camera

### Currently, the SDK opening capability of the top camera of the Zhaocai Leopard is not provided.

The top camera belongs to the robot sensor, that is, the basic capability module of robot navigation control involved in
the sensor. It is the basic capability module of the robot, used for positioning, and belongs to the system navigation
capability.

The top camera is mainly used to scan tags. Together with the radar, it constitutes an important guarantee for the robot
to locate the current position and avoid getting lost. Therefore, this part of the function is related to the robot’s
basic movement control walking ability and the system function, so it is not provided to the second Sub-development
partners do open-ended expansion.

Although the function here does not provide two openings because it involves the basic capabilities of the robot, as
long as the robot is operated properly, our map label is attached, and our map tool is used correctly to build a map
along the label, then a line is formed. The navigation route identified by the infrared camera on the top of the robot
itself will not affect the normal operation of the related functions of the top camera as long as the label and the top
camera are correct. (In addition, the radar can also guarantee the positioning and navigation functions of the robot,
but the label is the most accurate. Under normal circumstances, the robot must be labeled when entering the venue).

## Lucki multi-machine collaboration

Currently, the SDK opening capabilities related to Zhaocai Leopard's multi-machine collaboration are not yet provided.

Multi-machine cooperation includes multi-machine scheduling and multi-machine avoidance functions. It involves the basic capabilities of robot multi-machine cooperation. The communication module mainly involved here also belongs to the robot's multi-machine cooperation basis.
The capability part, the system function to which it belongs, is therefore not provided to secondary development partners for open expansion.

Multi-robot collaboration does not require us to do any operations, and all behaviors are scheduled by the robot system. But the premise is that the robots must be guaranteed to work under the same map. After multiple robots meet, they will call our robots to communicate, and their work priorities at this time will be sorted to determine whether to avoid or continue to work, so as to avoid multiple robots. When two robots meet at the same place at work, they are sluggish. Therefore, it is only necessary to ensure that the robot performance and hardware are normal, and the multi-machine collaboration capability can work normally.

## No response after video call

After a video call or multiple video calls, there is no response to the conversation with Xiaobao.

Because of the particularity of the robot microphone array, only the correct parameters can get data from the Recorder, and all parameters are fixed parameters and cannot be changed, otherwise there may be no data collected.

When accessing the three-party SDK, it is possible that the audio data collection parameters in the SDK are inconsistent with the robot parameters, resulting in a different sampling rate after a video call. It needs to be reset when the system takes over. However, resetting the sampling rate sometimes does not succeed. It cannot be converted to the specific sampling rate of the robot, so the robot cannot receive the sound normally after the video call.

Solution: Just change the audio sampling rate of Sanfang SDK, or custom audio sampling rate, to the robot's fixed sampling rate.

[Agora solution](https://docs.agora.io/cn/Video/custom_audio_android?platform=Android)

[Robot audio collection parameters](https://orionbase.cn/doc?m=21&h=6065a29&lang=cn#%E9%9F%B3%E9%A2%91%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86)

