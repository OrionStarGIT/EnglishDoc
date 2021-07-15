---
title: 'Gaussian Blur'
type: 'UI Components'
---

## Gaussian Blur

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
