---
title: 'BigScreenBot Development' description: 'update: 2021-11-24'
---

## Introduction

BigScreenBot is a large-screen version of GreetBot, which supports large-screen display content.

## 1. Permission issues

BigScreenBot display content must apply for the SYSTEM_ALERT_WINDOW permission of the global pop-up dialog box.

``` java
<uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />
```

## 2. The picture is not full screen problem

``` java
<ImageView
    android:id="@+id/bs_image"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_weight="1"
    android:scaleType="fitXY"/>
```

[Sample code](https://orion-base-test-1256573505.cos.ap-beijing.myqcloud.com/cn_docs_file/2021-11-24_14%3A40%3A42_DoubleScreen.zip)

