---
title: 'Map and Position'
type: 'API Reference'
---

## Introduction
Maps and positioning are the prerequisites for robot navigation. Creating a new map is equivalent to telling the robot's walking range, and positioning is equivalent to telling the robot's current location. The robot comes with a "map tool" that can complete all map and point operations, of course, you can also use the api to complete the function yourself.

    Set point:
    
    inform robot the name of the current point, and then you can use the interface to navigate to this point

## Mapping and positioning
Mapping and positioning can be operated with the integrated map tool on the robot.

## Positioning (set the initial coordinate point of the robot)
Method name: setPoseEstimate

Calling method:

``` java
try {
    JSONObject params = new JSONObject();
    //x coordinate
    params.put(Definition.JSON_NAVI_POSITION_X, x);
    //y coordinate
    params.put(Definition.JSON_NAVI_POSITION_Y, y);
    //z coordinate
    params.put(Definition.JSON_NAVI_POSITION_THETA, theta);
    RobotApi.getInstance().setPoseEstimate(reqId, params.toString(), new CommandListener() {
        @Override
        public void onResult(int result, String message) {
            if ("succeed".equals(message)) {
                //Successful positioning
            }
        }
    });
} catch (JSONException e) {
    e.printStackTrace();
}
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Determine whether it is currently located

Method name: isRobotEstimate

Calling method:

``` java
RobotApi.getInstance().isRobotEstimate(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if (!"true".equals(message)) {
            //currently not located
        } else {
            //currently located
        }
    }
});
```

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Set current location name
Method name: setLocation

Calling method:

``` java
RobotApi.getInstance().setLocation(reqId, placeName, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //save the location point successfully
        } else {
            //failed to save location point
        }
    }
});
```

Parameter Description:
- placeName : location name

*Note: Before calling this interface, you need to make sure that it has been located*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Get coordinate points based on location name
Method name: getLocation 

Calling method:

``` java
RobotApi.getInstance().getLocation(reqId, placeName, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            //whether the location exist
            boolean isExist = json.getBoolean(Definition.JSON_NAVI_SITE_EXIST);
            if (isExist) {
                //x coordinate
                double x = json.getDouble(Definition.JSON_NAVI_POSITION_X);
                //y coordinate
                double y = json.getDouble(Definition.JSON_NAVI_POSITION_Y);
                //z coordinate
                double z = json.getDouble(Definition.JSON_NAVI_POSITION_THETA);
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
```

Parameter Description:
- placeName : location name

*Note: The location saved by setLocation will be associated with the map, and the same map should be maintained when getting via getLocation, otherwise getLocation fails to get*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Remove location point
Method name: removeLocation

Calling method:

``` java
RobotApi.getInstance().removeLocation(reqId, placeName, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //removeLocation successful
        } else {
            //removeLocation failed
        }
    }
});
```

Parameter Description:
- placeName: place name

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get all location points on the current map
Method name: getPlaceList

Calling method:

``` java
RobotApi.getInstance().getPlaceList(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONArray jsonArray = new JSONArray(message);
            int length = jsonArray.length();
            for (int i = 0; i < length; i++) {
                JSONObject json = jsonArray.getJSONObject(i);
                json.getDouble("x"); //x coordinate
                json.getDouble("y"); //y coordinate
                json.getDouble("theta"); //z coordinate
                json.getString("name"); //position name
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
```
 
Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>


## Get the current coordinate point of the robot
Method name: getPosition

Calling method:

``` java
RobotApi.getInstance().getPosition(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            //x coordinate
            double x = json.getDouble(Definition.JSON_NAVI_POSITION_X);
            //y coordinate
            double y = json.getDouble(Definition.JSON_NAVI_POSITION_Y);
            //z coordinate
            double z = json.getDouble(Definition.JSON_NAVI_POSITION_THETA);
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
```

*Note: Before calling this interface, you need to make sure that it has been located*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
 

## Determine whether the robot is at the position
Method name: isRobotInLocations

Calling method:

``` java
try {
    JSONObject params = new JSONObject();
    params.put(Definition.JSON_NAVI_TARGET_PLACE_NAME, placeName); //position name
    params.put(Definition.JSON_NAVI_COORDINATE_DEVIATION, range); //position range
    RobotApi.getInstance().isRobotInlocations(reqId,
            params.toString(), new CommandListener() {
                @Override
                public void onResult(int result, String message) {
                    try {
                        JSONObject json = new JSONObject(message);
                        //whether or not at the target point
                        json.getBoolean(Definition.JSON_NAVI_IS_IN_LOCATION);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
} catch (JSONException e) {
    e.printStackTrace();
}
```

Parameter Description:
- placeName : location name
- range : position range, unit m

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Get the current map name
Method name: getMapName

Calling method:

``` java
RobotApi.getInstance().getMapName(reqId, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        if (!TextUtils.isEmpty(message)) {
            //"message" means map name
            String mapName = message;
        }
    }
});
``` 

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Pose listener
This is a listener about post event, when post change or pose status change, it will trigger this listener.

``` java
public class Pose {

    public float px, py, theta;
    public final long time;
    public String name;
    /**
     * SAFE = 0;      // normal area
     * NOT_SAFE = 1;  // dangerous area
     * OBSTACLE = 2;  // forbidden area
     * OUTSIDE = 3;   // out of the map
     */
    public int status;
    public float distance;
}

RobotApi.getInstance().registerStatusListener(Definition.STATUS_POSE,
    new StatusListener(){
        @Override
        public void onStatusUpdate(String type, String value) {
            Pose pose = GsonUtil.fromJson(value, Pose.class);
        }
    });
``` 

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>

## Switch map
Method name: switchMap

Calling method:

``` java
RobotApi.getInstance().switchMap(reqId, mapName, new CommandListener(){
    @Override
    public void onResult(int result, String message) {
        if ("succeed".equals(message)) {
            //switch map succeed
        }
    }
});
``` 

Parameter Description:
- mapName : the name of the map

*Note: You need to relocate after switching the map*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|No|

</div>
