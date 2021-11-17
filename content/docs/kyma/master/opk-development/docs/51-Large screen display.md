---
title: 'Large screen display'
type: 'UI Components'
---

## Large screen display

Component name: `ExDisplay`

Component description: 

The content display component that controls the big screen of the robot is only valid on the big screen robot of the BigScreen.

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
