---
title: 'LuckiBot Usage Data API'
description: 'update: 2022-04-14'
---

## 1. Overview

### 1.1 Overview Description

This doc can be used to get LockiBot usage data

### 1.2 Preparation

Please read the "Orion Star open API of Robot Enterprise Open Platform - Basics and Authentication and Orion Star open API of Robot Enterprise Open Platform-Robot Command-Basic first


## 2. LuckiBot Usage Data

### 2.1 API request info

Get LuckiBot usage data

> Data update frequency：10 minutes or more (Depends on server computing task)


Interface address

+ Open API https://{domain}/proxyopen

+ POST  /dataopen/applet_zcb_item_line


Required parameter

> Note: Do not forget to pass the public request parameters;

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|compare|string|Yes|The date range to be queried, the start and end date are separated by commas. It also supports assigning only one date value, that is, querying the hourly data of this date. The format is YYYY-MM-DD e.g: compare=2021-01-02,2021-01-05|
|product_line|string|No|The Model of the robot. (Optional) e.g: OS-R-DR01|
|devices|string|No|This is robot SN, separated by commas (Optional)|
|pageIndex|string|No|The data results are displayed in pagination, which page of data is needed (default 1st page) (Optional) e.g: pageIndex= 1|
|pageSize|string|No|The max items displayed per page of data results (Optional) e.g: pageSize = 10|
|classify|string|Yes|The data type, about the value type, have a look the table below.|

</div>

classify parameter value table

<div class="fixed-table bordered-table">

|value|Description|
|:-:|:-:|
|b_delivery_nums|Sum of tables delivered for Delivery Mode|
|b_guide_nums|Sum of Guidance task execution times|
|b_snack_seconds|Total duration of the cruise (minutes)|
|adv_wakeup_num|Passenger flow statistics in Promotion Mode (That is: the number of times the robot actively broadcasts welcome words within 1-2 meters)|
|run_mileage|Distance travelled (meters)|
|ad_show_nums|The number of times ads played in Promotion Mode|
|wakeup_num|The number of times of wake-up in Promotion mode|
|voice_query_num|Number of voice conversations|
|active_hour|Working hours of the robot (hours when it is powered on and connected to the Internet)|

</div>

### 2.2 API request response

The response of this API

|Parameter|Type|Description|
|:-:|:-:|:-:|
|timezone|string|Specify a time zone to display data results Values are positive or negative integers or 0 e.g:timezone=-2|
|classify|string|Map point name|
|classify.b_delivery_nums|int|Sum of tables delivered for Delivery Mode|
|classify.b_guide_nums|int|Sum of Guidance task execution times|
|classify.b_snack_seconds|int|Total duration of the cruise (minutes)|
|classify.adv_wakeup_num|int|Passenger flow statistics in Promotion Mode (That is: the number of times the robot actively broadcasts welcome words within 1-2 meters)|
|classify.run_mileage|int|Distance travelled (meters)|
|classify.ad_show_nums|int|The number of times ads played in Promotion Mode|
|classify.wakeup_num|int|The number of times of wake-up in Promotion mode|
|classify.voice_query_num|int|Number of voice conversations|
|classify.active_hour|int|Working hours of the robot (hours when it is powered on and connected to the Internet)|

### 2.3 Examples of result

> Request:classify=b_delivery_nums&compare=2021-12-16,2021-12-20

``` json
{
    "code":200,
    "ret":0,
    "desc":"成功",
    "msg":"成功",
    "data":{
        "list":[
            {
                "name":"Delivery To Table",
                "list":[
                    20,
                    28,
                    17,
                    33,
                    29
                ]
            }
        ],
        "weeklist":[
            "2021-12-16",
            "2021-12-17",
            "2021-12-18",
            "2021-12-19",
            "2021-12-20"
        ]
    }
}
``` 

> Request:classify=b_guide_nums&compare=2021-12-16,2021-12-20

``` json
{
    "code":200,
    "ret":0,
    "desc":"成功",
    "msg":"成功",
    "data":{
        "list":[
            {
                "name":"Leading Records",
                "list":[
                    8,
                    10,
                    15,
                    20,
                    9
                ]
            }
        ],
        "weeklist":[
            "2021-12-16",
            "2021-12-17",
            "2021-12-18",
            "2021-12-19",
            "2021-12-20"
        ]
    }
}
```

> Request:classify=b_delivery_nums&compare=2021-12-16

``` json
{
    "code":200,
    "ret":0,
    "desc":"成功",
    "msg":"成功",
    "data":{
        "list":[
            {
                "name":"Delivery To Table",
                "list":[
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                    3,
                    7,
                    2,
                    6,
                    10,
                    4,
                    2,
                    8,
                    7,
                    12,
                    6,
                    3,
                    0,
                    0,
                    0
                ]
            }
        ],
        "weeklist":[
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
        ]
    }
}
```