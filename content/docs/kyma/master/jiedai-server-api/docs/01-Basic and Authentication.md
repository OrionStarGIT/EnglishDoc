---
title: 'Basic and Authentication'
description: 'update: 2021-07-01'
---

## 1. Overview
This is the documents about OrionStar Enterprise Open Platform API

### 1.1 Overview
This document is used to explain enterprise open platform of Orion Star’s Luckibot
(hereinafter referred to as Robot) to the interface caller (hereinafter referred to as the 
integrator) on API Calling methods and precautions .

### 1.2 Preparations
1.2.1 Apply for appid and appsecret and determine the authentication 
method

The integrator needs to apply for the appid and appsecret before accessing the 
interface, which is used to obtain the interface calling credential access_token or 
calculate the generated sign before calling the interface.
All API calls on the open platform need to use access_token or sign for 
authentication.

1.2.1.1 access_token authentication method

Before calling the open platform interface, the integrator first needs to call the 
authentication interface (see the following description for the authentication interface) 

to obtain access_token, and then pass the access_token through a public parameter 
when calling the open platform interface.

Please note that this authentication method is only suitable for calling the open 
platform interface on the server side, and appsecret must only be used and saved on 
the server side, please do not save and use on the client side.

The integrator needs to inform the public internet outgoing IP address of the 
server that calls the authentication interface (see the following description for the 
authentication interface).

After the IP address is added to the IP whitelist , the integrator can successfully call the authentication interface.

1.2.1.2 Signature authentication method

Before calling the open platform interface, the integrator first needs to calculate the signature sign (see the following for the calculation method of the signature sign) and then pass the signature sign through the public parameter when calling the open platform interface.

This authentication method is suitable for calling the open platform interface on the 
server or client. If it is called on the client side, please try to avoid storing the 
appsecret on the client side. If you must store the appsecret on the client side, be 
sure to confuse the appsecret. Prevent it from being easily access by decompiled.
Although we support calling this authentication method on the client side , we 
strongly recommend calling it on the server side as much as possible. Please be 
aware of the risks caused by appsecret leakage.

### 1.3 Agreement
The open platform interface uses HTTP protocol, supports HTTPS, and will perform 
HTTP standard Gzip compression on response data when necessary . 
The general interface is called by GET method, and some special interfaces use 
POST, and the description will be given in the specific interface.
The POST request data is generally in the form of Content-Type: form-urlencoded 
submission, and some use the submission form of Content-Type: multipart/form-data 
(for example, the interface related to file upload) or the form of POST json string (for example, too complex parameter structure) interface) will be described in the specific interface.

The response data is in json string format, please refer to the description of public 
response parameters for the specific format.

Both the request and the reply are character encodings of UTF-8.

### 1.4 Interface address
1.4.1 Interface address format

https://{domain}/{version}/{category}/{method}
+ {domain} interface domain name
+ {version} interface version, such as v1
+ {category} interface category, such as authentication interface is auth
+ {mehod } Interface method name, such as get_token

1.4.2 Interface Domain Name

+ Nodes in China
> Test environment domain name test-openapi.ainirobot.com
> Official environment domain name openapi.ainirobot.com
+ Overseas nodes
> Official environment domain name global-openapi.orionstar.com

1.4.3 Interface Address

In the specific interface description, only the interface address is given, that is, the part after the domain name. Please splicing the specific environment https://{domain} to call. For example:
> The interface address is: /v1/auth/get_token 
> The interface domain name is: openapi.ainirobot.com 
> The interface address is: https://openapi.ainirobot.com/v1/auth/get_token

## 2. Public parameters
### 2.1 Public request parameters

Use get or post to send those parameters

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|appid|string|Yes|the appid issued to the integrator, for example: ori-010aaf61fc3923150557c15ebd30|
|access_token|string|No|Access token for Api. In the access_token authentication mode, this parameter must be passed to all other interfaces except the interface that obtains the Access token for Api|
|sign|string|No|Signature sign. In the signature authentication mode, all interfaces must pass this parameter.|
|corpid|string|No|Enterprise id. This parameter or corpid must be passed if the issued appid is based on agent authorization. It is a mandatory parameter in some interfaces and will be explained in the specific interface.|
|ov_corpid|string|No|Voice link enterprise id. This parameter or corpid must be passed if the issued appid is based on enterprise authorization. It is a mandatory parameter in some interfaces and will be explained in the specific interface.|
|agency_id|string|No|Agency id. This parameter must be passed if the issued appid is based on reseller authorization. It is a mandatory parameter in some interfaces and will be explained in the specific interface.|
|ctrace|string|No|The trace string customized by the caller. The interface side will record this parameter in the log, which is used to trace the log when the two parties are jointly debugged. The maximum length cannot exceed 64 bytes, and it will be intercepted.。|
|ctime|string|Yes|The current time of the integrator, an integer timestamp, in seconds, for example 1539336895.|

</div>

### 2.2	Global public response packet

The responses of all interfaces are json strings (except for the interface of the download file class). The parameters contained in json are as follows:

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|ret|string|error code. 0 is success, non-0 is failure. Error codes are divided into global error codes and business error codes. The public error codes are listed in this chapter, and the error codes of other specific categories of interfaces are given in specific categories or specific interfaces.|
|msg|string|error message. When ret is 0, the value of this parameter is an empty string, and when ret is non-zero, this parameter will give a specific error description. For example appid invalid.|
|stime|string|The current time of the server, an integer timestamp, in seconds, for example 1539336895.|
|strace|string|The trace string returned by us, each response has a unique tracker, which is used to trace and query logs during joint debugging.|
|data|object|The response data object stores the business response parameters of specific interfaces, and the business response parameters of different interfaces numbers is different|
</div>

Example of public response data packet ( the part in data belongs to the business response parameter part):

``` java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "access_token" : "test_token",
        "expires_in" : "7200"
    }
}
```

## 3.Access_token acquisition and verification

### 3.1	Authentication interface public parameters

The authentication interface has no additional public parameters, which are consistent with the global public parameters.


### 3.2	Get the interface calling credentials access_token interface

3.2.1 Interface description

The access_token is the public unique interface calling credential of the open platform. Access_token is required when calling each interface . The integrator needs to keep it properly. The storage of access_token shall reserve at least 512 characters of space. The access_token is currently valid for 2 hours and needs to be refreshed (re-acquired) before it expires.

It is recommended that the integrator use a unified central control server to obtain and refresh the access_token . The access_token used by other business logic servers are all from the central control server, and it is not recommended to refresh them individually. The validity period of the access_token is conveyed through the response parameter expires_in of this interface, the unit is second, the current value is within 7200 seconds(it may be adjusted in the future). The access-side central control server needs to refresh the new access_token in advance according to the valid time. During the refresh process, the access-side central control server can continue to output the previous access_token to the outside, and the open platform will ensure that the new and previous access_tokens are available within 5 minutes after the refresh (provided that the old access_token has not expired), this guarantees smooth transition of the integrator.

Since the effective time of the access_token may be adjusted in the future, the access-side central control server not only needs to actively refresh the access_token internally , but also needs to provide an interface for passively refreshing the access_token, which is convenient for the access- side business server to know that the access_token has been In the case of timeout, the process of access_token refresh is automatically triggered.

3.2.2 Interface address

+ GET /v1/auth/get_token

3.2.3 Request Parameters

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|grant_type|string|Yes|Here pass a fix string client_credential|
|appid|string|Yes|appid issued to integrator，for example: ori-e802392efc56ffcdba97ce35ddea|
|secret|string|Yes|appsecret issued to integrator，for example 5c65892744ee1d7dcbffd02159ccbd06|

</div>

+ Demo: 

https://openapi.ainirobot.com/v1/auth/get_token?grant_type=client_credential&appid=ori
-e802392efc56ffcdba97ce35ddea&secret=5c65892744ee1d7dcbffd02159ccbd06

3.2.4 Service Response Parameters

Note: Only the service response parameters are listed here, please refer to the corresponding description for the format of the public response data packet.

<div class="fixed-table bordered-table">

|Parameter|Type|Description|
|:-:|:-:|:-:|
|access_token|string|interface call credentials access_token|
|expires_in|string|The expiration time of the access_token, in seconds, for example, 7200 seconds means this access_token will expire after 7200 seconds.|

</div>

+ Demo:

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
        "access_token" : "test_token",
        "expires_in" : "7200"
    }
}
```

### 3.3 Verify the call credentials access_token interface

3.3.1 Interface description

It is used to verify whether the access_token and appid are legal, and can also be used to verify whether the enterprise/agent/interface is authorized.

3.3.2 Interface Address

+ POST /v1/auth/auth_token

3.3.3 Request Parameters

<div class="fixed-table bordered-table">

|Parameter|Type|Required|Description|
|:-:|:-:|:-:|:-:|
|appid|string|Yes|See details: public request parameters |
|access_token|string|Yes|See details: public request parameters|
|corpid|string|No|See details: public request parameters|
|ov_corpid|string|N|See details: public request parameters|
|agency_id|string|N|See details: public request parameters|
|acl|string|N|Authorization interface acl name, used to verify whether the specific interface has been authorized.|

</div>

3.3.4 Business response parameter

No Business response parameter

+ Demo：

```java
{
    "ret" : "0",
    "msg" : "",
    "stime" : "1539336895",
    "data" : {
    }
}
```

## 4.Signature sign calculation and verification

### 4.1Signature algorithm

Signature Algorithm:

1.	splicing signature string SignPre, GET or POST method, and different content-type spell reception signature
The way of the string is different, and the splicing method is given below.

> The splicing method of the string to be signed for a GET request or a POST submitted in a form (content-type is application/x-www-form-urlencoded or multipart /form-data) :

> Sort all request parameters (including POST parameters and GET parameters in the URL, but not including the parameters related to file upload) according to the parameter name ASCII code from small to large (lexicographical order), using the URL key-value pair format (ie key1=value1&key2=value2&…) spliced into a string to get SignPre;

> The POST submitted with json, html or text (content-type is application/json or text/html or text/plain) splicing the string to be
signed method:

> Sort the GET request parameters in all URLs according to the parameter name ASCII code from small to large
(lexicographical order), use the URL key-value pair format (ie key1=value1&key2=value2&… ) to splicing into a string, and then splicing the MD5 value (lowercase letters ) of the original content in the POST body to the end with body_md5 as the parameter name (ie key1=value1&key2=value2&body_md5=BodyContentMd5) to get SignPre;

2.	The following are some points that need to be paid attention to when splicing the signed string SignPre:

> Parameters whose parameter value is an empty string should also participate in the signature;

> The key value of the parameter is case-sensitive; 

> All parameters need to participate in the calculation of the signature, so please pay attention to the integrator additional parameters are also involved in the signature;

3.	Use the HMAC-SHA256 algorithm to encrypt the SignPre string, and convert all the encrypted results into lowercase letters o the signature sign, the encryption key of HMAC-SHA256 is appsecret.

Example – form submission: 
+ appsecret is

> test_secret

+ The request parameter is

> appid=test_appid 

> user_id=test_user_id

> ctime=1614149115

+ SignPre is

> appid=test_appid&ctime=1614149115&user_id=test_user_id 

+ The final signature result sign is

> HMAC-SHA256('appid=test_appid&ctime=1614149115&user_id=test_user_id, 'test_secret')

> 1443a064b63b6ccafb1ac1bf05c23d8bf2bfe8950235b86629177395eac64611

Example - JSON submission:

+ appsecret is

> test_secret 

+ The request parameter is

> appid=test_appid

> ctime=1614149115

+ POST Body is

> {"key":"value"} 

+ MD5 of POST Body is

> a7353f7cddce808de0032747a0b7be50

+ SignPre is 

> appid=test_appid&ctime=1614149115&body_md5=a7353f7cddce808de0032 747a0b7be50

+ The final signature result sign is

> HMAC-SHA256('appid=test_appid&ctime=1614149115&&body_md5=a7353f7
cddce808de0032747a0b7be50, 'test_secret')

> 79402d812c1e641d580d4cede84db7d14960444974e8ea6c19bd533f5be93fde

