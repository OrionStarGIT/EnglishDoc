---
title: 'Multi Robots Info'
type: 'API Reference'
---

## Get multi robots info

If the robot have ESP32 multi-robot hardware, use this code get receive multi-robot info.

``` java
JRobotApi.getInstance().registerStatusListener(Definition.STATUS_MULTIPLE_ROBOT_WORKING, mStatusListener);

private StatusListener mStatusListener = new StatusListener() {
    @Override
    public void onStatusUpdate(String type, String data) {
        try {
            Type dataType = new TypeToken<List<MultiRobotStatus>>(){}.getType();
            List<MultiRobotStatus> curRobotStatus = mGson.fromJson(data, dataType);
        }catch(Exception ex){

        }
    }
}
```

If the robot does not have ESP32 multi-robot hardware, this will not work. And about the structure of MultiRobotStatus, just like this:


``` java
public class MultiRobotStatus {
    private BasePoseBean pose;
    private BasePoseBean goal;
    private int id;
    private int priority;
    private boolean mapMatch;
    private long time;
    private int status;
    private boolean curRobot = false;
    private int errorStatus = 0;
}
```


<div class="fixed-table bordered-table">

|Greetbot|Mini|Lucki|Baoxiaodi MAX|Baodaping|
|:-:|:-:|:-:|:-:|:-:|
|No|No|Yes|No|No|

</div>

