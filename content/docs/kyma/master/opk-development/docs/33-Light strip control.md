---
title: 'Light strip control'
type: 'API Reference (for OPK)'
---

## Introduction
LightApi is mainly used to control the light strip display on the robot. At present, the main light strips on the robot include the bottom chassis light strip, the light strip on the inner circle of the shutdown button, and the light strip on the outer circle of the shutdown button.

<div class="fixed-table bordered-table">

|Light strip type|Type Constant definition|
|----------------|------------------------|
|Chassis light belt|LightConst.LIGHT_BASE_TARGET_FOOT
|Turn off button inner circle light strip LightConst.|LIGHT_BASE_TARGET_POWER_INSIDE|
|Turn off button outer ring light belt|LightConst.LIGHT_BASE_TARGET_POWER_OUTSIDE
|All light strips|LightConst.LIGHT_BASE_TARGET_ALL|



## Parameter class
### LightColor
Common lighting effect parameters, only supports fixed color values:

- `baseTarget`: light strip type, for specific definition, please refer to the introduction of light strip type section
- `rgbValue`: rgb color value

### LightAnimation
Dynamic lighting effect parameters, start and end colors can be set, gradient display:

- `rgbStart`: starting color value
- `rgbEnd`: end color value
- `rgbFreeze`: transition color
- `startTime`: the time that the gradient starts to stay in color
- `endTime`: the time that the gradient ends the color stay
- `onTime`: the time spent in the gradual change process
- `repeat`: number of repetitions

## Set the light strip color type
Method name: `playEffect`

Calling method:
```
LightApi.playEffect(effect);
```

Parameter Description:

- `effect`: light strip color type
    - "light_effect_green_light": green
    - "light_effect_green_breath": green breath
    - "light_effect_blue_light": blue
    - "light_effect_blue_breath": blue breath
    - "light_effect_red_light": red
    - "light_effect_red_breath": red breath

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set the color of the light strip
Method name: `playLightColor`

Calling method:
```
LightApi.playLightColor(lightColor);
```

Parameter Description:

- `lightColor`: Type LightColor, please refer to the introduction of the parameter class section for details

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set dynamic lighting effects
Method name: `playLightColor`

Calling method:
```
LightApi.playLightAnimation(lightAnimation);
```

Parameter Description:

- `lightAnimation`: Type LightAnimation, please refer to the introduction of the parameter class section for details

Minimum version: 2.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
