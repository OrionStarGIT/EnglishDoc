---
title: 'Face recognition'
type: 'API Reference (for OPK)'
---

## Get the information of the identified owner
Method name: `getAllPerson`

Calling method:

```java
PersonManager.getAllPerson(true).then((data) => {
      let persons = JSON.parse(data);
      //TODO: 'persons' is a list of face data
});
```

Parameter Description:

- `isOnlyFace`: whether only the face data is needed

**Face data**

The result obtained is a list of face data, which can be traversed to obtain:

- id: Face ID. ID is required as a parameter for face tracking. It should be noted that the same person may obtain different IDs for multiple identifications and cannot be used as a unique ID for the same person.
- name: registered name, the identified person has not been registered, the value is empty
- angle: face angle
- distance: distance
- facewidth: face width
- faceheight: face height
- faceX: the x coordinate of the face
- faceY: the y coordinate of the face

Minimum version: 1.10.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get the number of people identified
Method name: `getAllPersonNum`

Calling method:

```
PersonManager.getAllPersonNum().then((number) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>


## Get the id of the last person
Method name: `getLastPersonId`

Calling method:

```
PersonManager.getLastPersonId().then((personId) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>

## Get the name of the last person
Method name: `getLastPersonName`

Calling method:

```
PersonManager.getLastPersonName().then((name) => {

});
```

Parameter Description: none

Minimum version: 1.3.0

Applicable Platform:

<div class="fixed-table bordered-table">

|GreetBot|Mini|Lucki|DeliverBot|BigScreenBot|
|:-:|:-:|:-:|:-:|:-:|
|Yes|Yes|Yes|Yes|Yes|

</div>
