---
title: 'Error Code'
description: 'update: 2022-02-28'
---

## 1. Overview

This doc is about the error code about OrionStar Enterprise Open Platform API

## 2. Code


<div class="fixed-table bordered-table">

|Code|Message|Description|
|:-:|:-:|:-:|
|101002	|appid invalid	|appid parameter is not passed, or the format is incorrect, or the request method is not GET.|
|101002	|secret invalid	|secret parameter is not passed, or the format is incorrect, or the request method is not GET.|
|101002	|grant_type invalid	|grant_type parameter is not passed, or the format is incorrect.|
|101002	|access args invalid	|access_token parameter is not passed, or the format is incorrect.|
|101009	|appid or secret invalid a	|appid or secret parameter is not passed, or the format is incorrect.|
|101009	|appid or secret invalid b	|The same as above|
|101009	|deny, appid invalid for set set_secret	|appid not match access_token.|
|101009	|deny, access_token format b invalid	|access_token parameter is not passed, or the format is incorrect. Please set access_token to url parameters |
|101009	|deny, acl deny for class and method​	| methed deny, Please contact presales to apply the permission.|
|101009	|deny, appid agency deny E02	| enterprise uuid（corpid）or（agency_id）format is incorrect, or is denied. Please contact presales to apply the permission. |
|101009	|deny, appid corp deny E03	|The same as above|
|101009	|deny, appid corp not exists E04	|The same as above|
|101009	|deny, appid corp agency deny E05	|The same as above|
|101009	|deny, appid corp not exists E06	|The same as above|
|101009	|deny, appid corp agency deny E07	|The same as above|
|101009	|deny, appid agency deny E08	|The same as above|
|101025	|client ip 11.22.33.44 deny	| server IP is not allow，Please contact presales to add your server IP address to the allow list.|
|101024	|access_token expire	|access_token expire，validity period of the access_token is usually 2 hours. If it expires, please get it again.
</div>
