---
title: 'Management'
description: 'update: 2022-02-28'
---

## 1. Overview
This is the document about how to manage the Robot/Enterprise/Agent.

Please first read the OrionStar Robotics Enterprise Open Platform API Documentation-Foundation and Authenticalization.

## 2. Public data object

### 2.1 Enterprise information object

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|corpid|string|The affiliated enterprise, uuid|
|ov_corp_id|string|Voice link enterprise id|
|corp_name|string|the name of firm|
|corp_cate|string|form of business enterprise id|
|corp_cate_name|string|Enterprise type name|
|create_time|string|Add a time, an integer timestamp.|
|update_time|string|Last modified time, the integer timestamp.|

</div>

### 2.2 Enterprise employee information object

oUserGet Enterprise Employee Information object-Get(Under construction, will release in the futrue)

### 2.3 Agent information object

oAgencyGet Agent Information Objects-Get(Under construction, will release in the futrue)

### 2.4 Agent management, member information object

oAguserGet Agent Administrator Information Object-obtain(Under construction, will release in the futrue)


### 2.5 Robot information object

2.5.1 oRobotGet Robot Information Object-obtain

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|corpid|string|The affiliated enterprise, uuid|
|robot_uuid|string|robot uuid|
|robot_sn|string|robot sn|
|robot_name|string|Robot name|
|robot_version|string|Robot version|
|robot_model|string|Robot model|
|robot_mode|string|Robot mode|
|bind_time|string|Time of being bound to the current enterprise|
|online_status|string|Robot online status.0: Not online, 1: Online. The online state is judged by the heartbeat the robot sends, with about 5 seconds delayed from offline to online, and about 10 seconds delayed from online to offline.|

</div>

2.5.2 oRobotMod Robot Information Object-Modify

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|parameter|type|Parameters, instructions|
|robot_name|string|Robot name|
</div>

2.5.3 oRobotReportStatusGet robot reports status information object-obtain

> Description: It is obtained when obtaining the robot information.This information comes from robot reporting and has some delays,
The delay is greater when the network environment is not ideal.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|battery|object|Electricity information|
|battery.battery_rate|string|Remremaining percentage of current charge|
|battery.is_charging|string|0: No 1: Yes|
|task_info|object|The Task Information object|
|task_info.task_key|string|The tasks that the robot is currently performing, such as: waiting for food delivery|
|task_info.last_task_key|string|The last task the robot performed, such as: waiting for food delivery|
|location|object|Location information object|
|location.state|string|Robot positioning status.ready: Localization successfully get_lost: Location failed|
|location.pos_name|string|Current location of the robot, the default language.|
|location.pos_all_name|object|The current location of the robot, a multilingual object.|
|location.pos_all_name.zh_CN|string|The current location of the robot, in Chinese.|
|location.pos_all_name.en_US|string|The current location of the robot, in English.|
|location.emergency|string|Is it in an emergency stop state.|


</div>

### 2.5.4 oRobot Map Position Get Robot Point Information Object-Get

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|map_name|string|Map name|
|pos_name|string|Map point name|

</div>

## 3. Reference value agreement

### 3.1 Parameter gender-value convention

0 unknown

1 man

2 woman

### 3.2 Parameter oUser.The role_id value convention

6 Ordinary, employee

5 Enterprise administrator

9 system administrator


### 3.3 Parameter, oAguser.The role_id value convention

5 Ordinary administrator

9 system administrator


## 4. Robot information interface

### 4.1 Get the robot information

Interface address

+ GET  /v1/robot/robot_info

Required parameter

> Note: Do not forget to pass the public request parameters;


<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|robot_sn|string|No|robot sn.This parameter and the robot_uuid parameter pass only one of them, if both pass preferentially using robot_uuid.|
|robot_uuid|string|No|Robot uuid.This parameter and robot_sn parameter pass only one of them if both pass robot_uuid.|
|is_report_status|string|No|0: No 1: Yes (Only works with OrionStar robot APPs)

</div>

Business response parameters

> Description: Only business response parameters are listed here, see the format of public response packets.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|robot|object|oRobotGet robot information object-obtain|
|corp|object|oCorpGet enterprise information object-obtain|
|robot_report_status|object|oRobotReportStatusGet robot report status information object-obtain|

</div>

Example:

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "robot" : {
            "corpid" : "CORPYaQyDOHMlv3fjWpCDE", 
            "robot_uuid" : "ROBOTYaQyDOHMlv3fjWpCD", 
            "robot_sn" : "testsn",
            "The robot_name": "Robot name",
            // ...Other properties
        },
        "robot_report_status" : {
             "battery" : {
                "battery_rate" : "75",
                "is_charging" : "0",
            },
            // ...Other properties
        },
        "task" : {
            "task_id":"",
            // ...Other properties
        },
        "corp" : {
            'corpid': 'AB4RYaQyDOHMlv3fjWpCDE', 
            'corp_name': 'Enterprise name',
            // ...Other properties
        }
    }
}

```

About task id, there are many tasks.

<div class="fixed-table bordered-table">

|Task id|Meaning|Details|
|:-:|:-:|:-:|
|5LyR55ygH|ibernated|Hibernation, a low-power standby state. Although the robot remains connected to the Internet, it is impossible for the robot to perform any functions.|
|562J5b6F6YCB6aSQ|Waiting for delivery|In this state, the robot can be considered to be idle. But be careful, no one knows if the waiter is about to/in the process of loading food.|
|5oCl5YGc|Emergency stop  |At this point, the robot will not execute any commands unless someone helps it release the emergency stop knob|
|5Y2H57qn|Upgrading|Do not send any commands to the robot at this time until the upgrade is complete|
|5qyi6L-O|Welcome|In the welcome mode, in a state of welcoming guests|
|6YCB6aSQ5Lit|Meal delivering|The meal delivery task is in progress, please do not interrupt.|
|5YWF55S15Lit|Charging|Charging. Since the robot is connected to the charging cable, do not send any commands to the robot|
|6Lez6Iie|Dance|Robots are dancing in Promotion Mode |
|6aKG5L2N5Lit|Leading|Robots are leading someone somewhere.|
|5beh6Iiq|Cruise mode|The robot is in cruise mode.|
</div>

For other tasks, [Click Here](https://global-kb.orionstar.com/public/b64safe/) to decode the meaning.




### 4.2 Modify the robot information

Interface address

+ GET  /v1/robot/modify_robot

Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|robot_sn|string|No|robot sn.This parameter and the robot_uuid parameter pass only one of them, if both pass preferentially using robot_uuid.|
|robot_uuid|string|No|Robot uuid.This parameter and robot_sn parameter pass only one of them if both pass robot_uuid.|
|robot|string|No|oRobotMod robot information object. For example: {"robot_name": "new_robot_name" "}|

</div>

Business response parameters

> Description: Only business response parameters are listed here, see the format of public response packets.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|robot|object|oRobotGet robot information object-acquisition|

</div>

Example:

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "robot" : {
            "corpid" : "CORPYaQyDOHMlv3fjWpCDE", 
            "robot_uuid" : "ROBOTYaQyDOHMlv3fjWpCD", 
            "robot_sn" : "testsn",
            "The robot_name": "Robot name",
            // ...Other properties
        },
    }
}

```

### 4.3 Get the list of robots

Interface address

+ GET  /v1/robot/robot_list

Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|corpid|string|no|Enterprise uuid.Multiple numbers are separated by English commas.This parameter and the agency_id / ov_corpid parameter pass in at least one.|
|robot_uuid|string|no|Robot uuid.Multiple numbers are separated by English commas.|
|robot_sn|string|no|robot sn.Multiple numbers are separated by English commas.|
|page|string|no|Page parameter.Several pages, starting with 1.|
|page_rows|string|no|Page parameter.How many pieces of data per page.

</div>

Business response parameters

> Description: Only business response parameters are listed here, see the format of public response packets.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|robot_list|object[]|List of oRobotGet Robot Information Object-acquisition|

</div>

Example:

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "robot_list" :[
            {
                "corpid" : "CORPYaQyDOHMlv3fjWpCDE", 
                "robot_uuid" : "ROBOTYaQyDOHMlv3fjWpC1", 
                "robot_sn" : "testsn1",
                "The robot_name": "Robot name 1",
                // ...Other properties
            },
            {
                "corpid" : "CORPYaQyDOHMlv3fjWpCDE", 
                "robot_uuid" : "ROBOTYaQyDOHMlv3fjWpC2", 
                "robot_sn" : "testsn2",
                "The robot_name": "Robot Name 2",
                // ...Other properties
            }
        ]
    }
}

```

### 4.4 Get a list of robot floor map points

Interface address

+ GET  /v1/robot/map/position_list

Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|robot_sn|string|No|robot sn. This parameter and the robot_uuid parameter pass only one of them, if both pass preferentially using robot_uuid.|
|robot_uuid|string|No|Robot uuid.This parameter and robot_sn parameter pass only one of them if both pass robot_uuid.|
|floor_number|string|No|Floor number.  No Delivery is not restricted.|
|floor_id|string|No|Floor id. No Delivery is not restricted.|
|pos_name|string|No|Point name, full match. No Delivery is not restricted.|
|lang|string|No|Language, and the default is zh_CN. For example, the zh_CN / en_US, etc.|

</div>

Business response parameters

> Description: Only business response parameters are listed here, see the format of public response packets.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|position_list|object[]|List of robot point information objects|
|position_list[].position|object|oRobotMapPositionGet machine Human-point information object-obtain|

</div>

Example:

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "position_list" : [
        {
            "position": 
            {
                "map_name": "Map 1",
                "The pos_name": "Point A",
                // ...Other properties
            },
        }
        // ...Other points
        ]
    }
}

```


