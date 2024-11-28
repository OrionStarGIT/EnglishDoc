---
title: 'Visual Ability'
type: 'API Reference'
---

## Introduction
Visual ability currently mainly refers to two modules of person detection and recognition. Api provides mainly in PersonApi and RobotApi.

Personnel information detection is a local capability. When a person is standing in front of the robot (excluding poor light conditions), the robot can detect the person in front. When the person is standing far away, both the face and the human body can be detected, and when the person is standing closer Only face information can be detected. When the person id is greater than or equal to 0, it means that the person's face information is complete, and the person's face photo can be obtained for recognition.

Person recognition requires the use of face photos for recognition. This ability is deprecated for legal reasons. You can use Google or Microsoft person recognition instead.

## Person information

``` java
int id; //face id
int angle; //face angle
double distance; //distance
int headSpeed; //robot head speed
long latency; //data latency
int facewidth; //facewidth
int faceheight; //faceheight
double faceAngleX; //X-axis angle of face
double faceAngleY; //Y-axis angle of face
double angleInView; //The angle of the person relative to the robot's head
int faceX; //X-axis coordinate of face
int faceY; //Y-axis coordinate of face
int bodyX; //X-axis coordinate of human body
int bodyY: //Y-axis coordinate of human body

//The following fields are deprecated for legal reasons
String remoteFaceId //deprecated
int age; //deprecated
String gender; //deprecated
int glasses;//deprecated
```

## Person change monitoring
Method name: registerPersonListener / unregisterPersonListener

stopGetAllPersonInfo

Calling method:

``` java
PersonListener listener = new PersonListener() {
    @Override
    public void personChanged() {
        super.personChanged();
        //when person changed, use "getAllPersons()" to get all people info in the robot's field of view
    }
};
//registerPersonListener
PersonApi.getInstance().registerPersonListener(listener);
//unregisterPersonListener
PersonApi.getInstance().unregisterPersonListener(listener);
```

Parameter Description:

- listener: person information change monitoring

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get all personnel information
Method name: getAllPersons

Calling method:
``` java
//get all people infos in the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllPersons();
//get all people infos within 1m of the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllPersons(1);
```
 
Parameter Description:

- maxDistance: What is the field of view of the robot, in meters

Return:

- personList: personnel information list

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get a list of people who have detected a human body
Method name: getAllBodyList

Calling method:

``` java
//get all body infos in the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllBodyList();
//get all body infos within 1m of the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllBodyList(1);
```
 
Parameter Description:

- maxDistance: What is the field of view of the robot, in meters

Return:

- personList: personnel information list

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get a list of people whose faces are detected
Method name: getAllFaceList

Calling method:

``` java
//get all face infos in the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllFaceList();
//get all face infos within 1m of the robot's field of view
List<Person> personList = PersonApi.getInstance().getAllFaceList(1);
```

Parameter Description:

- maxDistance: What is the field of view of the robot, in meters

Return:

- personList: personnel information list

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

##  a list of people who have detected complete faces
Method name: getCompleteFaceList

Calling method:

``` java
List<Person> personList = PersonApi.getInstance().getCompleteFaceList();
```

Return:

- personList: personnel information list

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get the person who is following the focus 
<font color=orange>*(this method is only valid when the focus is following)*</font>

Method name: getFocusPerson

Calling method:

``` java
Person person = PersonApi.getInstance().getFocusPerson();
```

Return:

- person: personnel information

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get face photos
Method name: getPictureById

Calling method:

``` java
RobotApi.getInstance().getPictureById(reqId, faceId, count, new CommandListener() {
    @Override
    public void onResult(int result, String message) {
        try {
            JSONObject json = new JSONObject(message);
            String status = json.optString("status");
            //get photos successfully
            if (Definition.RESPONSE_OK.equals(status)) {
                JSONArray pictures = json.optJSONArray("pictures");
                if (!TextUtils.isEmpty(pictures.optString(0))) {
                    //Photo storage local full path
                    String picturePath = pictures.optString(0);
                }
            }
        } catch (JSONException | NullPointerException e) {
            e.printStackTrace();
        }
    }
});
``` 
Parameter Description:

- faceID: face id, which can be obtained through local face recognition (Person id)
- count: the number of photos that need to be obtained, this parameter is currently invalid, and there is only one by default

*Note: The pictures saved in this interface need to be deleted manually after use*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Start focus follow
Method name: startFocusFollow

Calling method:

``` java
RobotApi.getInstance().startFocusFollow(reqId, faceId, lostTimeout, maxDistance, new ActionListener() {
    @Override
    public void onStatusUpdate(int status, String data) {
        switch (status) {
            case Definition.STATUS_TRACK_TARGET_SUCCEED:
                //follow the target succeed
                break;
            case Definition.STATUS_GUEST_LOST:
                //lost target
                break;
            case Definition.STATUS_GUEST_FARAWAY:
                //target out of range
                break;
            case Definition.STATUS_GUEST_APPEAR:
                //target in range again
                break;
        }
    }
    @Override public void onError(int errorCode, String errorString) {
        switch (errorCode) {
            case Definition.ERROR_SET_TRACK_FAILED:
            case Definition.ERROR_TARGET_NOT_FOUND:
                //can't find target
                break;
            case Definition.ACTION_RESPONSE_ALREADY_RUN:
                //not ready, please stop all focus follow and try again
                break;
            case Definition.ACTION_RESPONSE_REQUEST_RES_ERROR:
                //There are already api calls that need to control the chassis (such as guidance and navigation). Please stop before continuing to call
                break;
        }
    }
    @Override public void onResult(int status, String responseString) {
        Log.d(TAG, "startTrackPerson onResult status: " + status);
        switch (status) {
            case Definition.ACTION_RESPONSE_STOP_SUCCESS:
                //api call "stopFocusFollow" succeed
                break;
        }
    }
});
``` 
Parameter Description:

- faceID: face id, which can be obtained through local face recognition (Person id).
- lostTimeout：How long can we not identify the target and report the target loss status.
- maxDistance：How far is the target to report the over-range status. Unit meter.

*Note1: When this api is used, it will take up chassis resources. You cannot perform any chassis operations at the same time, including navigation.*

*Note2: Don't call this api repeatedly to track the same person, just start startFocusFollow again after the following is lost or stopped.*

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Stop focus follow
Method name: stopFocusFollow

Calling method:

``` java
RobotApi.getInstance().stopFocusFollow(reqId);
``` 

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


<!-- 

## Remote registration
Method name: startRegister

<font color="red">Notice: To use this API, you need contect sales engineer, sign agreement to first. </font>

Calling method:

``` java
RobotApi.getInstance().startRegister(reqId, personName, timeout, tryCount, secondDelay, new ActionListener() {
    @Override
    public void onResult(int status, String response) throws RemoteException {
        if (Definition.RESULT_OK != status) {
            //registration failed
            return;
        }
    try {
        JSONObject json = new JSONObject(response);
        String remoteType = json.optString(Definition.REGISTER_REMOTE_TYPE);
        String remoteName = json.optString(Definition.REGISTER_REMOTE_NAME);
        if (Definition.REGISTER_REMOTE_SERVER_EXIST.equals(remoteType)) {
            //user already exists
        } else if (Definition.REGISTER_REMOTE_SERVER_NEW.equals(remoteType)) {
            //user registration success
        }
    } catch (JSONException e) {
        e.printStackTrace();
    }
}
```

Parameter Description:

- personName: registered name
- timeout: registration timeout time, when registration fails, it will try to re-register until it times out
- tryCount: the number of failed retries, after the retry time is greater than timeout, it will give up and try again
- secondDelay: retry interval

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Remote identification
Method name: getPersonInfoFromNet 

<font color="red">Notice: To use this API, you need contect sales engineer, sign agreement to first. </font>

Calling method:
``` java
RobotApi.getInstance().getPersonInfoFromNet(reqId, faceId, pictures, new CommandListener() {
@Override
public void onResult(int result, String message) {
    try {
        JSONObject json = new JSONObject(message);
        JSONObject info = json.getJSONObject("people");
        info.getString("name");
        info.getString("gender");
        info.getString("age");
    } catch (JSONException | NullPointerException e) {
        e.printStackTrace();
    }
}
```

Parameter Description:

- faceID: face id, which can be obtained through local face recognition (Person id)
- pictures: face photos, available through the getPictureById interface

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

-->