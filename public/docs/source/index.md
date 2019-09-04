---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_0c068b4037fb2e47e71bd44bd36e3e2a -->
## Authorize a client to access the user&#039;s account.

> Example request:

```bash
curl -X GET -G "http://localhost/oauth/authorize" 
```

```javascript
const url = new URL("http://localhost/oauth/authorize");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/authorize`


<!-- END_0c068b4037fb2e47e71bd44bd36e3e2a -->

<!-- START_e48cc6a0b45dd21b7076ab2c03908687 -->
## Approve the authorization request.

> Example request:

```bash
curl -X POST "http://localhost/oauth/authorize" 
```

```javascript
const url = new URL("http://localhost/oauth/authorize");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/authorize`


<!-- END_e48cc6a0b45dd21b7076ab2c03908687 -->

<!-- START_de5d7581ef1275fce2a229b6b6eaad9c -->
## Deny the authorization request.

> Example request:

```bash
curl -X DELETE "http://localhost/oauth/authorize" 
```

```javascript
const url = new URL("http://localhost/oauth/authorize");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/authorize`


<!-- END_de5d7581ef1275fce2a229b6b6eaad9c -->

<!-- START_a09d20357336aa979ecd8e3972ac9168 -->
## Authorize a client to access the user&#039;s account.

> Example request:

```bash
curl -X POST "http://localhost/oauth/token" 
```

```javascript
const url = new URL("http://localhost/oauth/token");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/token`


<!-- END_a09d20357336aa979ecd8e3972ac9168 -->

<!-- START_d6a56149547e03307199e39e03e12d1c -->
## Get all of the authorized tokens for the authenticated user.

> Example request:

```bash
curl -X GET -G "http://localhost/oauth/tokens" 
```

```javascript
const url = new URL("http://localhost/oauth/tokens");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/tokens`


<!-- END_d6a56149547e03307199e39e03e12d1c -->

<!-- START_a9a802c25737cca5324125e5f60b72a5 -->
## Delete the given token.

> Example request:

```bash
curl -X DELETE "http://localhost/oauth/tokens/1" 
```

```javascript
const url = new URL("http://localhost/oauth/tokens/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/tokens/{token_id}`


<!-- END_a9a802c25737cca5324125e5f60b72a5 -->

<!-- START_abe905e69f5d002aa7d26f433676d623 -->
## Get a fresh transient token cookie for the authenticated user.

> Example request:

```bash
curl -X POST "http://localhost/oauth/token/refresh" 
```

```javascript
const url = new URL("http://localhost/oauth/token/refresh");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/token/refresh`


<!-- END_abe905e69f5d002aa7d26f433676d623 -->

<!-- START_babcfe12d87b8708f5985e9d39ba8f2c -->
## Get all of the clients for the authenticated user.

> Example request:

```bash
curl -X GET -G "http://localhost/oauth/clients" 
```

```javascript
const url = new URL("http://localhost/oauth/clients");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/clients`


<!-- END_babcfe12d87b8708f5985e9d39ba8f2c -->

<!-- START_9eabf8d6e4ab449c24c503fcb42fba82 -->
## Store a new client.

> Example request:

```bash
curl -X POST "http://localhost/oauth/clients" 
```

```javascript
const url = new URL("http://localhost/oauth/clients");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/clients`


<!-- END_9eabf8d6e4ab449c24c503fcb42fba82 -->

<!-- START_784aec390a455073fc7464335c1defa1 -->
## Update the given client.

> Example request:

```bash
curl -X PUT "http://localhost/oauth/clients/1" 
```

```javascript
const url = new URL("http://localhost/oauth/clients/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT oauth/clients/{client_id}`


<!-- END_784aec390a455073fc7464335c1defa1 -->

<!-- START_1f65a511dd86ba0541d7ba13ca57e364 -->
## Delete the given client.

> Example request:

```bash
curl -X DELETE "http://localhost/oauth/clients/1" 
```

```javascript
const url = new URL("http://localhost/oauth/clients/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/clients/{client_id}`


<!-- END_1f65a511dd86ba0541d7ba13ca57e364 -->

<!-- START_9e281bd3a1eb1d9eb63190c8effb607c -->
## Get all of the available scopes for the application.

> Example request:

```bash
curl -X GET -G "http://localhost/oauth/scopes" 
```

```javascript
const url = new URL("http://localhost/oauth/scopes");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/scopes`


<!-- END_9e281bd3a1eb1d9eb63190c8effb607c -->

<!-- START_9b2a7699ce6214a79e0fd8107f8b1c9e -->
## Get all of the personal access tokens for the authenticated user.

> Example request:

```bash
curl -X GET -G "http://localhost/oauth/personal-access-tokens" 
```

```javascript
const url = new URL("http://localhost/oauth/personal-access-tokens");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET oauth/personal-access-tokens`


<!-- END_9b2a7699ce6214a79e0fd8107f8b1c9e -->

<!-- START_a8dd9c0a5583742e671711f9bb3ee406 -->
## Create a new personal access token for the user.

> Example request:

```bash
curl -X POST "http://localhost/oauth/personal-access-tokens" 
```

```javascript
const url = new URL("http://localhost/oauth/personal-access-tokens");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST oauth/personal-access-tokens`


<!-- END_a8dd9c0a5583742e671711f9bb3ee406 -->

<!-- START_bae65df80fd9d72a01439241a9ea20d0 -->
## Delete the given token.

> Example request:

```bash
curl -X DELETE "http://localhost/oauth/personal-access-tokens/1" 
```

```javascript
const url = new URL("http://localhost/oauth/personal-access-tokens/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE oauth/personal-access-tokens/{token_id}`


<!-- END_bae65df80fd9d72a01439241a9ea20d0 -->

<!-- START_d7b7952e7fdddc07c978c9bdaf757acf -->
## Register api

> Example request:

```bash
curl -X POST "http://localhost/api/register" 
```

```javascript
const url = new URL("http://localhost/api/register");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/register`


<!-- END_d7b7952e7fdddc07c978c9bdaf757acf -->

<!-- START_c3fa189a6c95ca36ad6ac4791a873d23 -->
## api/login
> Example request:

```bash
curl -X POST "http://localhost/api/login" 
```

```javascript
const url = new URL("http://localhost/api/login");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/login`


<!-- END_c3fa189a6c95ca36ad6ac4791a873d23 -->

<!-- START_cb3417a4db780f98f68e3f57bf696114 -->
## api/parts-search
> Example request:

```bash
curl -X POST "http://localhost/api/parts-search" 
```

```javascript
const url = new URL("http://localhost/api/parts-search");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/parts-search`


<!-- END_cb3417a4db780f98f68e3f57bf696114 -->

<!-- START_691c89017d389e6ca66a7322a79c4c5b -->
## api/parts-search1
> Example request:

```bash
curl -X POST "http://localhost/api/parts-search1" 
```

```javascript
const url = new URL("http://localhost/api/parts-search1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/parts-search1`


<!-- END_691c89017d389e6ca66a7322a79c4c5b -->

<!-- START_e021c000f96190a063b3ceb0969bf6a1 -->
## api/parts
> Example request:

```bash
curl -X POST "http://localhost/api/parts" 
```

```javascript
const url = new URL("http://localhost/api/parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/parts`


<!-- END_e021c000f96190a063b3ceb0969bf6a1 -->

<!-- START_3e4e232fd3fc34b8490c4acea01edbcd -->
## api/parts
> Example request:

```bash
curl -X GET -G "http://localhost/api/parts" 
```

```javascript
const url = new URL("http://localhost/api/parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{
    "current_page": 1,
    "data": [
        {
            "id": 1377186,
            "brand_name": "TOYOTA",
            "part_number": "68141-68151-80",
            "description_english": "Front set window runs 80 series",
            "weight_physical": null,
            "weight_volumetric": null,
            "qty": 2,
            "warehouse": "canada",
            "price": "120",
            "unique_hash": "BDL_6f38fd40b4a29c7f5f41eba0f7c4e124",
            "part_fits": null,
            "description_full": "front window runs",
            "color": null,
            "image": null,
            "is_bundle": 1,
            "subst_for": 0,
            "modified_by": null,
            "notes": null,
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-28 02:03:52",
            "updated_at": "2019-08-28 02:03:52",
            "categories": "80 Series\/ window runs",
            "tags": "[\"window runs\"]",
            "min_price": "115",
            "max_price": "130",
            "part_number_without_too_much": "681416815180",
            "min_stock": "1",
            "is_stock_ca": 1,
            "location": "BK-ROOM",
            "bundle_pivot": []
        },
        {
            "id": 1377185,
            "brand_name": "TOYOTA",
            "part_number": "1711517010",
            "description_english": "GASKETINTAKE PIPE",
            "weight_physical": "0.026",
            "weight_volumetric": "0.007",
            "qty": 2,
            "warehouse": "canada",
            "price": "0.76",
            "unique_hash": "CA_17c8f6a9db8cad0074ee618b2fd0b067",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:32;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:105921;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.76;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"1711517010\";s:18:\"DescriptionEnglish\";s:17:\"GASKETINTAKE PIPE\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:950;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:105921;s:10:\"PartNumber\";i:1711517010;s:18:\"DescriptionEnglish\";s:17:\"GASKETINTAKE PIPE\";s:14:\"WeightPhysical\";d:0.026;s:16:\"WeightVolumetric\";d:0.007;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"1711517010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:369;s:11:\"stock_ca_id\";i:32;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:0.76;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-02 17:29:00.000\";s:10:\"updated_at\";s:23:\"2019-06-02 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "1711517010",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377184,
            "brand_name": "TOYOTA",
            "part_number": "1540717011",
            "description_english": "PIPE SUBASSY TURBO",
            "weight_physical": "0.22",
            "weight_volumetric": "0.528",
            "qty": 2,
            "warehouse": "canada",
            "price": "18.86",
            "unique_hash": "CA_aada38ada9f7d599b89107cb9588d3de",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:35;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:118305;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:18.86;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"1540717011\";s:18:\"DescriptionEnglish\";s:18:\"PIPE SUBASSY TURBO\";s:16:\"description_full\";N;s:7:\"row_num\";i:949;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:118305;s:10:\"PartNumber\";i:1540717011;s:18:\"DescriptionEnglish\";s:18:\"PIPE SUBASSY TURBO\";s:14:\"WeightPhysical\";d:0.22;s:16:\"WeightVolumetric\";d:0.528;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"1540717011\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "1540717011",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377183,
            "brand_name": "TOYOTA",
            "part_number": "1567417010",
            "description_english": "RECEIVER OIL FILTER",
            "weight_physical": "0.142",
            "weight_volumetric": "0.184",
            "qty": 4,
            "warehouse": "canada",
            "price": "9.89",
            "unique_hash": "CA_9b69d1dda58a6559710fde8efac749d3",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:37;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:118862;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"A2-009\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:9.89;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"1567417010\";s:18:\"DescriptionEnglish\";s:19:\"RECEIVER OIL FILTER\";s:16:\"description_full\";N;s:7:\"row_num\";i:948;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:118862;s:10:\"PartNumber\";i:1567417010;s:18:\"DescriptionEnglish\";s:19:\"RECEIVER OIL FILTER\";s:14:\"WeightPhysical\";d:0.142;s:16:\"WeightVolumetric\";d:0.184;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"1567417010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "1567417010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-009",
            "bundle_pivot": []
        },
        {
            "id": 1377182,
            "brand_name": "TOYOTA",
            "part_number": "3812160290",
            "description_english": "GASKET WINCH GEAR",
            "weight_physical": "0.05",
            "weight_volumetric": "0.007",
            "qty": 2,
            "warehouse": "canada",
            "price": "1.56",
            "unique_hash": "CA_55efae976dfa62d0d5717d901c5a18d3",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:38;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:125541;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.56;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3812160290\";s:18:\"DescriptionEnglish\";s:17:\"GASKET WINCH GEAR\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:947;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:125541;s:10:\"PartNumber\";i:3812160290;s:18:\"DescriptionEnglish\";s:17:\"GASKET WINCH GEAR\";s:14:\"WeightPhysical\";d:0.05;s:16:\"WeightVolumetric\";d:0.007;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3812160290\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:434;s:11:\"stock_ca_id\";i:38;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:1.56;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-09 15:03:52.000\";s:10:\"updated_at\";s:23:\"2019-06-09 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "3812160290",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377181,
            "brand_name": "TOYOTA",
            "part_number": "3823160170",
            "description_english": "RINGSNAP",
            "weight_physical": "0.006",
            "weight_volumetric": "0.001",
            "qty": 2,
            "warehouse": "canada",
            "price": "4.54",
            "unique_hash": "CA_fbaeec938165df261516759e35ddec9e",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:39;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:126066;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.54;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3823160170\";s:18:\"DescriptionEnglish\";s:8:\"RINGSNAP\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:946;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:126066;s:10:\"PartNumber\";i:3823160170;s:18:\"DescriptionEnglish\";s:8:\"RINGSNAP\";s:14:\"WeightPhysical\";d:0.006;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3823160170\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:433;s:11:\"stock_ca_id\";i:39;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:4.54;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-09 15:03:37.000\";s:10:\"updated_at\";s:23:\"2019-06-09 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "3823160170",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377180,
            "brand_name": "TOYOTA",
            "part_number": "4323660020",
            "description_english": "SHIM",
            "weight_physical": "0.004",
            "weight_volumetric": "0.001",
            "qty": 2,
            "warehouse": "canada",
            "price": "0.59",
            "unique_hash": "CA_b74dbdb25fa3384974426505e19d8766",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:40;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:135097;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.59;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4323660020\";s:18:\"DescriptionEnglish\";s:4:\"SHIM\";s:16:\"description_full\";N;s:7:\"row_num\";i:945;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:135097;s:10:\"PartNumber\";i:4323660020;s:18:\"DescriptionEnglish\";s:4:\"SHIM\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4323660020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4323660020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377179,
            "brand_name": "TOYOTA",
            "part_number": "4342260040",
            "description_english": "GASKETFR AXLEOUTER",
            "weight_physical": "0.004",
            "weight_volumetric": "0.005",
            "qty": 2,
            "warehouse": "canada",
            "price": "1.06",
            "unique_hash": "CA_1fc07575da7cf992e192cec74f73c13e",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "anna@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:41;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:135595;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.06;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4342260040\";s:18:\"DescriptionEnglish\";s:18:\"GASKETFR AXLEOUTER\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:944;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:135595;s:10:\"PartNumber\";i:4342260040;s:18:\"DescriptionEnglish\";s:18:\"GASKETFR AXLEOUTER\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.005;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4342260040\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:64;s:11:\"stock_ca_id\";i:41;s:9:\"stock_min\";i:2;s:10:\"list_price\";d:1.06;s:9:\"min_price\";i:1;s:9:\"max_price\";d:1.08;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-03 02:09:48.000\";s:10:\"updated_at\";s:23:\"2019-05-03 00:00:00.000\";s:10:\"updated_by\";i:2;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:2;s:5:\"email\";s:25:\"anna@cruiseraddiction.com\";s:10:\"first_name\";s:4:\"Anna\";s:9:\"last_name\";s:9:\"Komelkova\";s:5:\"phone\";s:10:\"4188580848\";s:17:\"registration_date\";s:27:\"2018-07-22 22:56:29.4400000\";s:15:\"last_login_date\";s:27:\"2019-08-14 17:27:09.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Canada\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"CA\";s:9:\"full_name\";s:14:\"Komelkova Anna\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "1",
            "max_price": "1.08",
            "part_number_without_too_much": "4342260040",
            "min_stock": "2",
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377178,
            "brand_name": "TOYOTA",
            "part_number": "4323560020",
            "description_english": "SHIM",
            "weight_physical": "0.015",
            "weight_volumetric": "0.002",
            "qty": 2,
            "warehouse": "canada",
            "price": "2.57",
            "unique_hash": "CA_dfa5717dcd3b108905398745705349d4",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:42;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:136387;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.57;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4323560020\";s:18:\"DescriptionEnglish\";s:4:\"SHIM\";s:16:\"description_full\";N;s:7:\"row_num\";i:943;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:136387;s:10:\"PartNumber\";i:4323560020;s:18:\"DescriptionEnglish\";s:4:\"SHIM\";s:14:\"WeightPhysical\";d:0.015;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4323560020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4323560020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377177,
            "brand_name": "TOYOTA",
            "part_number": "2335517030",
            "description_english": "ELEMENTPREFILTER",
            "weight_physical": "0.384",
            "weight_volumetric": "0.366",
            "qty": 1,
            "warehouse": "canada",
            "price": "8.15",
            "unique_hash": "CA_3db0db07680c46880704d7d4735fa4d0",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:43;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:137749;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"A2-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:8.15;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2335517030\";s:18:\"DescriptionEnglish\";s:16:\"ELEMENTPREFILTER\";s:16:\"description_full\";N;s:7:\"row_num\";i:942;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:137749;s:10:\"PartNumber\";i:2335517030;s:18:\"DescriptionEnglish\";s:16:\"ELEMENTPREFILTER\";s:14:\"WeightPhysical\";d:0.384;s:16:\"WeightVolumetric\";d:0.366;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2335517030\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "2335517030",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377176,
            "brand_name": "TOYOTA",
            "part_number": "2239056291",
            "description_english": "SOLENOID ASSYFUEL CUT OFF",
            "weight_physical": "0.092",
            "weight_volumetric": "0.013",
            "qty": 1,
            "warehouse": "canada",
            "price": "101.97",
            "unique_hash": "CA_1579511d6a105f59a84aa13d8193b254",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:44;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:143534;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:101.97;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2239056291\";s:18:\"DescriptionEnglish\";s:25:\"SOLENOID ASSYFUEL CUT OFF\";s:16:\"description_full\";N;s:7:\"row_num\";i:941;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:143534;s:10:\"PartNumber\";i:2239056291;s:18:\"DescriptionEnglish\";s:25:\"SOLENOID ASSYFUEL CUT OFF\";s:14:\"WeightPhysical\";d:0.092;s:16:\"WeightVolumetric\";d:0.013;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2239056291\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "2239056291",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377175,
            "brand_name": "TOYOTA",
            "part_number": "4881530090",
            "description_english": "BUSHING",
            "weight_physical": "0.034",
            "weight_volumetric": "0.011",
            "qty": 2,
            "warehouse": "canada",
            "price": "6.36",
            "unique_hash": "CA_861eb97db1f082b881dfa68c79104afc",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:45;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:147147;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A1-002\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:6.36;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4881530090\";s:18:\"DescriptionEnglish\";s:7:\"BUSHING\";s:16:\"description_full\";N;s:7:\"row_num\";i:940;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:147147;s:10:\"PartNumber\";i:4881530090;s:18:\"DescriptionEnglish\";s:7:\"BUSHING\";s:14:\"WeightPhysical\";d:0.034;s:16:\"WeightVolumetric\";d:0.011;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4881530090\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4881530090",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A1-002",
            "bundle_pivot": []
        },
        {
            "id": 1377174,
            "brand_name": "TOYOTA",
            "part_number": "2254017550",
            "description_english": "COMPENSATOR SUBASSY",
            "weight_physical": "0.94",
            "weight_volumetric": "0.358",
            "qty": 1,
            "warehouse": "canada",
            "price": "252.86",
            "unique_hash": "CA_05faf70e13d5b4a7361c26d19f2a15f5",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:47;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:152286;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:252.86;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2254017550\";s:18:\"DescriptionEnglish\";s:19:\"COMPENSATOR SUBASSY\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:939;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:152286;s:10:\"PartNumber\";i:2254017550;s:18:\"DescriptionEnglish\";s:19:\"COMPENSATOR SUBASSY\";s:14:\"WeightPhysical\";d:0.94;s:16:\"WeightVolumetric\";d:0.358;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2254017550\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:233;s:11:\"stock_ca_id\";i:47;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:252.86;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-31 04:32:21.000\";s:10:\"updated_at\";s:23:\"2019-05-31 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "2254017550",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377173,
            "brand_name": "TOYOTA",
            "part_number": "5145448010",
            "description_english": "LEXSILENCER ENGINE",
            "weight_physical": "0.004",
            "weight_volumetric": "0.002",
            "qty": 1,
            "warehouse": "canada",
            "price": "2.49",
            "unique_hash": "CA_a0eb2671fa145251d640b08f84a367b7",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:48;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:152338;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.49;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"5145448010\";s:18:\"DescriptionEnglish\";s:18:\"LEXSILENCER ENGINE\";s:16:\"description_full\";N;s:7:\"row_num\";i:938;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:152338;s:10:\"PartNumber\";i:5145448010;s:18:\"DescriptionEnglish\";s:18:\"LEXSILENCER ENGINE\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"5145448010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5145448010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377172,
            "brand_name": "TOYOTA",
            "part_number": "2310061050",
            "description_english": "PUMP",
            "weight_physical": "0.568",
            "weight_volumetric": "0.524",
            "qty": 2,
            "warehouse": "canada",
            "price": "55.16",
            "unique_hash": "CA_15553218e3b0fef00acad489c0a54d43",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "anna@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:53;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:165248;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:5:\"B3-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:55.16;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2310061050\";s:18:\"DescriptionEnglish\";s:4:\"PUMP\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:937;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:165248;s:10:\"PartNumber\";i:2310061050;s:18:\"DescriptionEnglish\";s:4:\"PUMP\";s:14:\"WeightPhysical\";d:0.568;s:16:\"WeightVolumetric\";d:0.524;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2310061050\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:492;s:11:\"stock_ca_id\";i:53;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:55.16;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-08-27 01:33:48.000\";s:10:\"updated_at\";s:23:\"2019-08-27 00:00:00.000\";s:10:\"updated_by\";i:2;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:2;s:5:\"email\";s:25:\"anna@cruiseraddiction.com\";s:10:\"first_name\";s:4:\"Anna\";s:9:\"last_name\";s:9:\"Komelkova\";s:5:\"phone\";s:10:\"4188580848\";s:17:\"registration_date\";s:27:\"2018-07-22 22:56:29.4400000\";s:15:\"last_login_date\";s:27:\"2019-08-14 17:27:09.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Canada\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"CA\";s:9:\"full_name\";s:14:\"Komelkova Anna\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "2310061050",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377171,
            "brand_name": "TOYOTA",
            "part_number": "2741117010",
            "description_english": "PULLEY",
            "weight_physical": "0.434",
            "weight_volumetric": "0.081",
            "qty": 2,
            "warehouse": "canada",
            "price": "28.64",
            "unique_hash": "CA_58278ec3b083378ee89bcce9983ba910",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:55;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:168429;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:5:\"B3-LF\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:28.64;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2741117010\";s:18:\"DescriptionEnglish\";s:6:\"PULLEY\";s:16:\"description_full\";N;s:7:\"row_num\";i:936;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:168429;s:10:\"PartNumber\";i:2741117010;s:18:\"DescriptionEnglish\";s:6:\"PULLEY\";s:14:\"WeightPhysical\";d:0.434;s:16:\"WeightVolumetric\";d:0.081;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2741117010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "2741117010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-LF",
            "bundle_pivot": []
        },
        {
            "id": 1377170,
            "brand_name": "TOYOTA",
            "part_number": "2212955110",
            "description_english": "PLUG",
            "weight_physical": "0.01",
            "weight_volumetric": "0.001",
            "qty": 2,
            "warehouse": "canada",
            "price": "2.86",
            "unique_hash": "CA_44988c5c22c1f08389f2d30e1544291c",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:56;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:187837;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.86;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2212955110\";s:18:\"DescriptionEnglish\";s:4:\"PLUG\";s:16:\"description_full\";N;s:7:\"row_num\";i:935;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:187837;s:10:\"PartNumber\";i:2212955110;s:18:\"DescriptionEnglish\";s:4:\"PLUG\";s:14:\"WeightPhysical\";d:0.01;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2212955110\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "2212955110",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377169,
            "brand_name": "TOYOTA",
            "part_number": "3333660010",
            "description_english": "TRANSMISSION GEAR",
            "weight_physical": "0.502",
            "weight_volumetric": "0.032",
            "qty": 1,
            "warehouse": "canada",
            "price": "240.82",
            "unique_hash": "CA_a823624a0f74f739ca69eb3544261668",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:58;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:198494;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:240.82;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3333660010\";s:18:\"DescriptionEnglish\";s:17:\"TRANSMISSION GEAR\";s:16:\"description_full\";N;s:7:\"row_num\";i:934;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:198494;s:10:\"PartNumber\";i:3333660010;s:18:\"DescriptionEnglish\";s:17:\"TRANSMISSION GEAR\";s:14:\"WeightPhysical\";d:0.502;s:16:\"WeightVolumetric\";d:0.032;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3333660010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "3333660010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377168,
            "brand_name": "TOYOTA",
            "part_number": "6179460030c0",
            "description_english": "PAD RR WHEEL LH",
            "weight_physical": "0.018",
            "weight_volumetric": "0.033",
            "qty": 4,
            "warehouse": "canada",
            "price": "10.41",
            "unique_hash": "CA_60bbee1614bc7b76a38db8ad5c3762d1",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:59;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:198977;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"A3-010\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:10.41;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"6179460030c0\";s:18:\"DescriptionEnglish\";s:15:\"PAD RR WHEEL LH\";s:16:\"description_full\";N;s:7:\"row_num\";i:933;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:198977;s:10:\"PartNumber\";i:6179460030;s:18:\"DescriptionEnglish\";s:15:\"PAD RR WHEEL LH\";s:14:\"WeightPhysical\";d:0.018;s:16:\"WeightVolumetric\";d:0.033;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"6179460030c0\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6179460030c0",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A3-010",
            "bundle_pivot": []
        },
        {
            "id": 1377167,
            "brand_name": "KOYO",
            "part_number": "6203cm",
            "description_english": "BEARING",
            "weight_physical": "0.1",
            "weight_volumetric": "0.005",
            "qty": 3,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_64f6b28de5d88f69f75486350b8c6fd8",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:61;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:200065;s:9:\"Stock_Qty\";i:3;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:71;s:10:\"PartNumber\";s:6:\"6203cm\";s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:16:\"description_full\";N;s:7:\"row_num\";i:932;s:8:\"StockQty\";i:3;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:200065;s:10:\"PartNumber\";i:6203;s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:14:\"WeightPhysical\";d:0.1;s:16:\"WeightVolumetric\";d:0.005;s:7:\"BrandId\";i:71;s:15:\"ClearPartNumber\";s:6:\"6203cm\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6203cm",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377166,
            "brand_name": "TOYOTA",
            "part_number": "3132136010",
            "description_english": "CLUTCH  BRAKE PEDAL",
            "weight_physical": "0.044",
            "weight_volumetric": "0.018",
            "qty": 4,
            "warehouse": "canada",
            "price": "4.08",
            "unique_hash": "CA_a7f53a3e0902c5b4e46d833c36aa24c2",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:62;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:212504;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"B4-022\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.08;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3132136010\";s:18:\"DescriptionEnglish\";s:19:\"CLUTCH  BRAKE PEDAL\";s:16:\"description_full\";N;s:7:\"row_num\";i:931;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:212504;s:10:\"PartNumber\";i:3132136010;s:18:\"DescriptionEnglish\";s:19:\"CLUTCH  BRAKE PEDAL\";s:14:\"WeightPhysical\";d:0.044;s:16:\"WeightVolumetric\";d:0.018;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3132136010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "3132136010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-022",
            "bundle_pivot": []
        },
        {
            "id": 1377165,
            "brand_name": "TOYOTA",
            "part_number": "3350414050b8",
            "description_english": "KNOB SUBASSY SHIFT",
            "weight_physical": "0.065",
            "weight_volumetric": "0.025",
            "qty": 1,
            "warehouse": "canada",
            "price": "28.03",
            "unique_hash": "CA_81366d4d11d127da59631f6b638bf0b5",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:63;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:212860;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:28.03;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"3350414050b8\";s:18:\"DescriptionEnglish\";s:18:\"KNOB SUBASSY SHIFT\";s:16:\"description_full\";N;s:7:\"row_num\";i:930;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:212860;s:10:\"PartNumber\";i:3350414050;s:18:\"DescriptionEnglish\";s:18:\"KNOB SUBASSY SHIFT\";s:14:\"WeightPhysical\";d:0.065;s:16:\"WeightVolumetric\";d:0.025;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"3350414050b8\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "3350414050b8",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377164,
            "brand_name": "TOYOTA",
            "part_number": "3354860010",
            "description_english": "BUSH",
            "weight_physical": "0.004",
            "weight_volumetric": "0.001",
            "qty": 1,
            "warehouse": "canada",
            "price": "2.39",
            "unique_hash": "CA_ac1bd8d11a2160fc55e3fe1e13695eba",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:64;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:213345;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.39;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3354860010\";s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:16:\"description_full\";N;s:7:\"row_num\";i:929;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:213345;s:10:\"PartNumber\";i:3354860010;s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3354860010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "3354860010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377163,
            "brand_name": "TOYOTA",
            "part_number": "6819190300",
            "description_english": "SPACER",
            "weight_physical": "0.018",
            "weight_volumetric": "0.007",
            "qty": 2,
            "warehouse": "canada",
            "price": "3.28",
            "unique_hash": "CA_5609affe117bdd528f52804dd3c779e6",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:66;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:224588;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A2-009\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.28;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"6819190300\";s:18:\"DescriptionEnglish\";s:6:\"SPACER\";s:16:\"description_full\";N;s:7:\"row_num\";i:928;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:224588;s:10:\"PartNumber\";i:6819190300;s:18:\"DescriptionEnglish\";s:6:\"SPACER\";s:14:\"WeightPhysical\";d:0.018;s:16:\"WeightVolumetric\";d:0.007;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"6819190300\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6819190300",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-009",
            "bundle_pivot": []
        },
        {
            "id": 1377162,
            "brand_name": "TOYOTA",
            "part_number": "4343660011",
            "description_english": "GASKET KNUCKLE SPINDLE OIL RETAINER",
            "weight_physical": "0.004",
            "weight_volumetric": "0.004",
            "qty": 10,
            "warehouse": "canada",
            "price": "0.53",
            "unique_hash": "CA_769e814fd07a4256fe722a644d19d5a8",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:68;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:228223;s:9:\"Stock_Qty\";i:10;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.53;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4343660011\";s:18:\"DescriptionEnglish\";s:35:\"GASKET KNUCKLE SPINDLE OIL RETAINER\";s:16:\"description_full\";N;s:7:\"row_num\";i:927;s:8:\"StockQty\";i:10;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:228223;s:10:\"PartNumber\";i:4343660011;s:18:\"DescriptionEnglish\";s:35:\"GASKET KNUCKLE SPINDLE OIL RETAINER\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.004;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4343660011\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4343660011",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377161,
            "brand_name": "TOYOTA",
            "part_number": "4353160010",
            "description_english": "GASKET",
            "weight_physical": "0.004",
            "weight_volumetric": "0.001",
            "qty": 6,
            "warehouse": "canada",
            "price": "0.81",
            "unique_hash": "CA_9669b13f280455243446147386fa782e",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:69;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:228231;s:9:\"Stock_Qty\";i:6;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.81;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4353160010\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:926;s:8:\"StockQty\";i:6;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:228231;s:10:\"PartNumber\";i:4353160010;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4353160010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4353160010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377160,
            "brand_name": "TOYOTA",
            "part_number": "4431289101",
            "description_english": "SHAFT",
            "weight_physical": "0.154",
            "weight_volumetric": "0.007",
            "qty": 2,
            "warehouse": "canada",
            "price": "12.09",
            "unique_hash": "CA_7ffb2a779bb31728f21c548df6526254",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:70;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:230948;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:12.09;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4431289101\";s:18:\"DescriptionEnglish\";s:5:\"SHAFT\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:925;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:230948;s:10:\"PartNumber\";i:4431289101;s:18:\"DescriptionEnglish\";s:5:\"SHAFT\";s:14:\"WeightPhysical\";d:0.154;s:16:\"WeightVolumetric\";d:0.007;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4431289101\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:345;s:11:\"stock_ca_id\";i:70;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:12.09;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-02 16:53:35.000\";s:10:\"updated_at\";s:23:\"2019-06-02 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "4431289101",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377159,
            "brand_name": "TOYOTA",
            "part_number": "4434860120",
            "description_english": "OIL RESERVOR HOSE",
            "weight_physical": "0.096",
            "weight_volumetric": "0.03",
            "qty": 1,
            "warehouse": "canada",
            "price": "16.65",
            "unique_hash": "CA_afb2cf60ec2f8c53589feaa8ebca857a",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:71;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:231790;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:16.65;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4434860120\";s:18:\"DescriptionEnglish\";s:17:\"OIL RESERVOR HOSE\";s:16:\"description_full\";N;s:7:\"row_num\";i:924;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:231790;s:10:\"PartNumber\";i:4434860120;s:18:\"DescriptionEnglish\";s:17:\"OIL RESERVOR HOSE\";s:14:\"WeightPhysical\";d:0.096;s:16:\"WeightVolumetric\";d:0.03;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4434860120\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4434860120",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377158,
            "brand_name": "TOYOTA",
            "part_number": "6940590300",
            "description_english": "STOP ASSY",
            "weight_physical": "0.039",
            "weight_volumetric": "0.005",
            "qty": 1,
            "warehouse": "canada",
            "price": "31.3",
            "unique_hash": "CA_7c805a8b61ba9e3871d5fa60d669e34c",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:73;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:233170;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:31.3;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"6940590300\";s:18:\"DescriptionEnglish\";s:9:\"STOP ASSY\";s:16:\"description_full\";N;s:7:\"row_num\";i:923;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:233170;s:10:\"PartNumber\";i:6940590300;s:18:\"DescriptionEnglish\";s:9:\"STOP ASSY\";s:14:\"WeightPhysical\";d:0.039;s:16:\"WeightVolumetric\";d:0.005;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"6940590300\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6940590300",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377157,
            "brand_name": "TOYOTA",
            "part_number": "7530152080",
            "description_english": "EMBLEM SUBASSY FR BUMPER",
            "weight_physical": "0.062",
            "weight_volumetric": "0.066",
            "qty": 7,
            "warehouse": "canada",
            "price": "20.29",
            "unique_hash": "CA_930b62d8fd9c03482026966be422647a",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:74;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:235127;s:9:\"Stock_Qty\";i:7;s:8:\"Location\";s:6:\"A2-007\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:20.29;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7530152080\";s:18:\"DescriptionEnglish\";s:24:\"EMBLEM SUBASSY FR BUMPER\";s:16:\"description_full\";N;s:7:\"row_num\";i:922;s:8:\"StockQty\";i:7;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:235127;s:10:\"PartNumber\";i:7530152080;s:18:\"DescriptionEnglish\";s:24:\"EMBLEM SUBASSY FR BUMPER\";s:14:\"WeightPhysical\";d:0.062;s:16:\"WeightVolumetric\";d:0.066;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7530152080\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7530152080",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-007",
            "bundle_pivot": []
        },
        {
            "id": 1377156,
            "brand_name": "TOYOTA",
            "part_number": "7531152140",
            "description_english": "EMBLEM RADIATOR GRILLE",
            "weight_physical": "0.078",
            "weight_volumetric": "0.062",
            "qty": 3,
            "warehouse": "canada",
            "price": "19.19",
            "unique_hash": "CA_c2bdd1fb817c68ba1c634b38f391890d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:75;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:235488;s:9:\"Stock_Qty\";i:3;s:8:\"Location\";s:6:\"A2-007\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:19.19;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7531152140\";s:18:\"DescriptionEnglish\";s:22:\"EMBLEM RADIATOR GRILLE\";s:16:\"description_full\";N;s:7:\"row_num\";i:921;s:8:\"StockQty\";i:3;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:235488;s:10:\"PartNumber\";i:7531152140;s:18:\"DescriptionEnglish\";s:22:\"EMBLEM RADIATOR GRILLE\";s:14:\"WeightPhysical\";d:0.078;s:16:\"WeightVolumetric\";d:0.062;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7531152140\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7531152140",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-007",
            "bundle_pivot": []
        },
        {
            "id": 1377155,
            "brand_name": "TOYOTA",
            "part_number": "7660460021",
            "description_english": "MUDGUARD SUBASSY",
            "weight_physical": "0.5",
            "weight_volumetric": "2.148",
            "qty": 1,
            "warehouse": "canada",
            "price": "75.08",
            "unique_hash": "CA_a3c231982144ad1cc863a2d35407fefa",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:78;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:240245;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B1-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:75.08;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7660460021\";s:18:\"DescriptionEnglish\";s:16:\"MUDGUARD SUBASSY\";s:16:\"description_full\";N;s:7:\"row_num\";i:920;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:240245;s:10:\"PartNumber\";i:7660460021;s:18:\"DescriptionEnglish\";s:16:\"MUDGUARD SUBASSY\";s:14:\"WeightPhysical\";d:0.5;s:16:\"WeightVolumetric\";d:2.148;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7660460021\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7660460021",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B1-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377154,
            "brand_name": "KOYO",
            "part_number": "38vp5243",
            "description_english": "BEARING",
            "weight_physical": "0.19",
            "weight_volumetric": "0.049",
            "qty": 2,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_3677da4c63bd7b9d97dc9a5a8ed3c7cc",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:79;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:243853;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:71;s:10:\"PartNumber\";s:8:\"38vp5243\";s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:16:\"description_full\";N;s:7:\"row_num\";i:919;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:243853;s:10:\"PartNumber\";i:38;s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:14:\"WeightPhysical\";d:0.19;s:16:\"WeightVolumetric\";d:0.049;s:7:\"BrandId\";i:71;s:15:\"ClearPartNumber\";s:8:\"38vp5243\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "38vp5243",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377153,
            "brand_name": "TOYOTA",
            "part_number": "4323360030",
            "description_english": "SHIMSTG KNUCKLE ADJ",
            "weight_physical": "0.004",
            "weight_volumetric": "0.001",
            "qty": 2,
            "warehouse": "canada",
            "price": "1.3",
            "unique_hash": "CA_7e4b0f11deba98021478543168a946c5",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:80;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:247109;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.3;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4323360030\";s:18:\"DescriptionEnglish\";s:19:\"SHIMSTG KNUCKLE ADJ\";s:16:\"description_full\";N;s:7:\"row_num\";i:918;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:247109;s:10:\"PartNumber\";i:4323360030;s:18:\"DescriptionEnglish\";s:19:\"SHIMSTG KNUCKLE ADJ\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4323360030\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4323360030",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377152,
            "brand_name": "TOYOTA",
            "part_number": "4332469085",
            "description_english": "COVERUPR BALL JOINT",
            "weight_physical": "0.039",
            "weight_volumetric": "0.041",
            "qty": 1,
            "warehouse": "canada",
            "price": "6.23",
            "unique_hash": "CA_45aa39f694016a948b904bc51144a93c",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:81;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:248021;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:6.23;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4332469085\";s:18:\"DescriptionEnglish\";s:19:\"COVERUPR BALL JOINT\";s:16:\"description_full\";N;s:7:\"row_num\";i:917;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:248021;s:10:\"PartNumber\";i:4332469085;s:18:\"DescriptionEnglish\";s:19:\"COVERUPR BALL JOINT\";s:14:\"WeightPhysical\";d:0.039;s:16:\"WeightVolumetric\";d:0.041;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4332469085\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4332469085",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377151,
            "brand_name": "TOYOTA",
            "part_number": "4791060070",
            "description_english": "LOAD SENSING VALVE",
            "weight_physical": "0.572",
            "weight_volumetric": "0.113",
            "qty": 1,
            "warehouse": "canada",
            "price": "105.39",
            "unique_hash": "CA_215420e6256e49a88c5c751b09fcff30",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:82;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:250402;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:105.39;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4791060070\";s:18:\"DescriptionEnglish\";s:18:\"LOAD SENSING VALVE\";s:16:\"description_full\";N;s:7:\"row_num\";i:916;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:250402;s:10:\"PartNumber\";i:4791060070;s:18:\"DescriptionEnglish\";s:18:\"LOAD SENSING VALVE\";s:14:\"WeightPhysical\";d:0.572;s:16:\"WeightVolumetric\";d:0.113;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4791060070\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4791060070",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377150,
            "brand_name": "TOYOTA",
            "part_number": "4881528080",
            "description_english": "STABILISER BUSH",
            "weight_physical": "0.031",
            "weight_volumetric": "0.013",
            "qty": 2,
            "warehouse": "canada",
            "price": "5.72",
            "unique_hash": "CA_2385b81fa655e441e79423dfd1d9a5ee",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:87;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:255188;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A1-002\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:5.72;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4881528080\";s:18:\"DescriptionEnglish\";s:15:\"STABILISER BUSH\";s:16:\"description_full\";N;s:7:\"row_num\";i:915;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:255188;s:10:\"PartNumber\";i:4881528080;s:18:\"DescriptionEnglish\";s:15:\"STABILISER BUSH\";s:14:\"WeightPhysical\";d:0.031;s:16:\"WeightVolumetric\";d:0.013;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4881528080\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4881528080",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A1-002",
            "bundle_pivot": []
        },
        {
            "id": 1377149,
            "brand_name": "TOYOTA",
            "part_number": "8148160010",
            "description_english": "BRACKET",
            "weight_physical": "0.12",
            "weight_volumetric": "0.028",
            "qty": 2,
            "warehouse": "canada",
            "price": "49.36",
            "unique_hash": "CA_a0121a524a232647c5906dea51a1ae7c",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:88;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:258619;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:49.36;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8148160010\";s:18:\"DescriptionEnglish\";s:7:\"BRACKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:914;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:258619;s:10:\"PartNumber\";i:8148160010;s:18:\"DescriptionEnglish\";s:7:\"BRACKET\";s:14:\"WeightPhysical\";d:0.12;s:16:\"WeightVolumetric\";d:0.028;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8148160010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8148160010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377148,
            "brand_name": "TOYOTA",
            "part_number": "4320460020",
            "description_english": "GASKET",
            "weight_physical": "0.145",
            "weight_volumetric": "0.043",
            "qty": 6,
            "warehouse": "canada",
            "price": "11.52",
            "unique_hash": "CA_adcd3a735999569dc1d8828aee1bb91e",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:90;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:260373;s:9:\"Stock_Qty\";i:6;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:11.52;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4320460020\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:913;s:8:\"StockQty\";i:6;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:260373;s:10:\"PartNumber\";i:4320460020;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.145;s:16:\"WeightVolumetric\";d:0.043;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4320460020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4320460020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377147,
            "brand_name": "TOYOTA",
            "part_number": "4340160081",
            "description_english": "SPINDLE SUBASSY",
            "weight_physical": "2.388",
            "weight_volumetric": "0.58",
            "qty": 2,
            "warehouse": "canada",
            "price": "99.03",
            "unique_hash": "CA_175e4f78839751f0180c2bb1a89091ac",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:91;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:261438;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:99.03;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4340160081\";s:18:\"DescriptionEnglish\";s:15:\"SPINDLE SUBASSY\";s:16:\"description_full\";N;s:7:\"row_num\";i:912;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:261438;s:10:\"PartNumber\";i:4340160081;s:18:\"DescriptionEnglish\";s:15:\"SPINDLE SUBASSY\";s:14:\"WeightPhysical\";d:2.388;s:16:\"WeightVolumetric\";d:0.58;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4340160081\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4340160081",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377146,
            "brand_name": "TOYOTA",
            "part_number": "8173060040",
            "description_english": "TURN SIGNAL LAMP",
            "weight_physical": "0.112",
            "weight_volumetric": "0.064",
            "qty": 0,
            "warehouse": "canada",
            "price": "21.57",
            "unique_hash": "CA_65a2f8191178efaacb26cccbfdb22808",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:93;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:262433;s:9:\"Stock_Qty\";i:0;s:8:\"Location\";s:6:\"A2-008\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:21.57;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8173060040\";s:18:\"DescriptionEnglish\";s:16:\"TURN SIGNAL LAMP\";s:16:\"description_full\";N;s:7:\"row_num\";i:911;s:8:\"StockQty\";i:0;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:262433;s:10:\"PartNumber\";i:8173060040;s:18:\"DescriptionEnglish\";s:16:\"TURN SIGNAL LAMP\";s:14:\"WeightPhysical\";d:0.112;s:16:\"WeightVolumetric\";d:0.064;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8173060040\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8173060040",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-008",
            "bundle_pivot": []
        },
        {
            "id": 1377145,
            "brand_name": "TOYOTA",
            "part_number": "4320460032",
            "description_english": "SEAL SUBASSY",
            "weight_physical": "0.231",
            "weight_volumetric": "0.094",
            "qty": 8,
            "warehouse": "canada",
            "price": "11.2",
            "unique_hash": "CA_96272e6f978a232ea810726b2d2a65f9",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:95;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:265724;s:9:\"Stock_Qty\";i:8;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:11.2;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4320460032\";s:18:\"DescriptionEnglish\";s:12:\"SEAL SUBASSY\";s:16:\"description_full\";N;s:7:\"row_num\";i:910;s:8:\"StockQty\";i:8;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:265724;s:10:\"PartNumber\";i:4320460032;s:18:\"DescriptionEnglish\";s:12:\"SEAL SUBASSY\";s:14:\"WeightPhysical\";d:0.231;s:16:\"WeightVolumetric\";d:0.094;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4320460032\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4320460032",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377144,
            "brand_name": "TOYOTA",
            "part_number": "4414260020",
            "description_english": "NUT",
            "weight_physical": "0.014",
            "weight_volumetric": "0.001",
            "qty": 1,
            "warehouse": "canada",
            "price": "4.33",
            "unique_hash": "CA_79d7f256646dd77ba630c4fd3dabf067",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:97;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:268653;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.33;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4414260020\";s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:16:\"description_full\";N;s:7:\"row_num\";i:909;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:268653;s:10:\"PartNumber\";i:4414260020;s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:14:\"WeightPhysical\";d:0.014;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4414260020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4414260020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377143,
            "brand_name": "TOYOTA",
            "part_number": "7841122010",
            "description_english": "KNOB",
            "weight_physical": "0.006",
            "weight_volumetric": "0.002",
            "qty": 2,
            "warehouse": "canada",
            "price": "5.36",
            "unique_hash": "CA_61441f796ed3703d2a3e954ed2715d06",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:98;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:271068;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-016\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:5.36;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7841122010\";s:18:\"DescriptionEnglish\";s:4:\"KNOB\";s:16:\"description_full\";N;s:7:\"row_num\";i:908;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:271068;s:10:\"PartNumber\";i:7841122010;s:18:\"DescriptionEnglish\";s:4:\"KNOB\";s:14:\"WeightPhysical\";d:0.006;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7841122010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7841122010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-016",
            "bundle_pivot": []
        },
        {
            "id": 1377142,
            "brand_name": "TOYOTA",
            "part_number": "7841060120",
            "description_english": "CHOKE CABLE",
            "weight_physical": "0.092",
            "weight_volumetric": "0.29",
            "qty": 2,
            "warehouse": "canada",
            "price": "30.23",
            "unique_hash": "CA_adf0810e28aa04d526ac24cec4560533",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:99;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:271426;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-016\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:30.23;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7841060120\";s:18:\"DescriptionEnglish\";s:11:\"CHOKE CABLE\";s:16:\"description_full\";N;s:7:\"row_num\";i:907;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:271426;s:10:\"PartNumber\";i:7841060120;s:18:\"DescriptionEnglish\";s:11:\"CHOKE CABLE\";s:14:\"WeightPhysical\";d:0.092;s:16:\"WeightVolumetric\";d:0.29;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7841060120\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7841060120",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-016",
            "bundle_pivot": []
        },
        {
            "id": 1377141,
            "brand_name": "TOYOTA",
            "part_number": "4881560050",
            "description_english": "STABILISER BUSH",
            "weight_physical": "0.048",
            "weight_volumetric": "0.015",
            "qty": 2,
            "warehouse": "canada",
            "price": "3.59",
            "unique_hash": "CA_0c8d8bc004b669cbfa7415b022d1b2f3",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:100;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:272850;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A1-002\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.59;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4881560050\";s:18:\"DescriptionEnglish\";s:15:\"STABILISER BUSH\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:906;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:272850;s:10:\"PartNumber\";i:4881560050;s:18:\"DescriptionEnglish\";s:15:\"STABILISER BUSH\";s:14:\"WeightPhysical\";d:0.048;s:16:\"WeightVolumetric\";d:0.015;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4881560050\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:392;s:11:\"stock_ca_id\";i:100;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:3.59;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-08 14:44:56.000\";s:10:\"updated_at\";s:23:\"2019-06-08 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "4881560050",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "A1-002",
            "bundle_pivot": []
        },
        {
            "id": 1377140,
            "brand_name": "TOYOTA",
            "part_number": "8299812440",
            "description_english": "TERMINAL REPAIR",
            "weight_physical": "0.004",
            "weight_volumetric": "0.011",
            "qty": 12,
            "warehouse": "canada",
            "price": "3.74",
            "unique_hash": "CA_0b91a50104b4a624b60d62dd8478953d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:102;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:275378;s:9:\"Stock_Qty\";i:12;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.74;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8299812440\";s:18:\"DescriptionEnglish\";s:15:\"TERMINAL REPAIR\";s:16:\"description_full\";N;s:7:\"row_num\";i:905;s:8:\"StockQty\";i:12;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:275378;s:10:\"PartNumber\";i:8299812440;s:18:\"DescriptionEnglish\";s:15:\"TERMINAL REPAIR\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.011;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8299812440\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8299812440",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377139,
            "brand_name": "TOYOTA",
            "part_number": "8111189117",
            "description_english": "RING SEALED BEAM",
            "weight_physical": "0.038",
            "weight_volumetric": "0.133",
            "qty": 1,
            "warehouse": "canada",
            "price": "4.71",
            "unique_hash": "CA_ad78e0b4ac06352c79eebabee1dd397d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:103;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:279894;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"A2-009\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.71;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8111189117\";s:18:\"DescriptionEnglish\";s:16:\"RING SEALED BEAM\";s:16:\"description_full\";N;s:7:\"row_num\";i:904;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:279894;s:10:\"PartNumber\";i:8111189117;s:18:\"DescriptionEnglish\";s:16:\"RING SEALED BEAM\";s:14:\"WeightPhysical\";d:0.038;s:16:\"WeightVolumetric\";d:0.133;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8111189117\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8111189117",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-009",
            "bundle_pivot": []
        },
        {
            "id": 1377138,
            "brand_name": "TOYOTA",
            "part_number": "8519595j01",
            "description_english": "COVER",
            "weight_physical": "0.006",
            "weight_volumetric": "0.005",
            "qty": 1,
            "warehouse": "canada",
            "price": "3.62",
            "unique_hash": "CA_5c60ba743b4456edfd940f3ef57591b0",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:108;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:287632;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.62;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8519595j01\";s:18:\"DescriptionEnglish\";s:5:\"COVER\";s:16:\"description_full\";N;s:7:\"row_num\";i:903;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:287632;s:10:\"PartNumber\";i:8519595;s:18:\"DescriptionEnglish\";s:5:\"COVER\";s:14:\"WeightPhysical\";d:0.006;s:16:\"WeightVolumetric\";d:0.005;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8519595j01\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8519595j01",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377137,
            "brand_name": "TOYOTA",
            "part_number": "3818660170",
            "description_english": "SEALOIL",
            "weight_physical": "0.008",
            "weight_volumetric": "0.001",
            "qty": 1,
            "warehouse": "canada",
            "price": "4.54",
            "unique_hash": "CA_4289974a187e536b8563abf9d15e4a7f",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:109;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:288503;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.54;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3818660170\";s:18:\"DescriptionEnglish\";s:7:\"SEALOIL\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:902;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:288503;s:10:\"PartNumber\";i:3818660170;s:18:\"DescriptionEnglish\";s:7:\"SEALOIL\";s:14:\"WeightPhysical\";d:0.008;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3818660170\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:432;s:11:\"stock_ca_id\";i:109;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:4.54;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-09 15:03:22.000\";s:10:\"updated_at\";s:23:\"2019-06-09 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "3818660170",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377136,
            "brand_name": "TOYOTA",
            "part_number": "4881526020",
            "description_english": "BUSH",
            "weight_physical": "0.045",
            "weight_volumetric": "0.022",
            "qty": 4,
            "warehouse": "canada",
            "price": "3.27",
            "unique_hash": "CA_ff281906c6c37174918c7f8276a06a25",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:110;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:289955;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"A1-002\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.27;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4881526020\";s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:901;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:289955;s:10:\"PartNumber\";i:4881526020;s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:14:\"WeightPhysical\";d:0.045;s:16:\"WeightVolumetric\";d:0.022;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4881526020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:12;s:11:\"stock_ca_id\";i:110;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:3.12;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-04-10 17:53:40.000\";s:10:\"updated_at\";s:23:\"2019-06-08 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:26",
            "updated_at": "2019-09-02 05:50:39",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "4881526020",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "A1-002",
            "bundle_pivot": []
        },
        {
            "id": 1377135,
            "brand_name": "TOYOTA",
            "part_number": "5385260040c0",
            "description_english": "GASKET",
            "weight_physical": "0.032",
            "weight_volumetric": "0.042",
            "qty": 2,
            "warehouse": "canada",
            "price": "17.6",
            "unique_hash": "CA_4f11311a5576218cbc1f72e6f0fe1b65",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:111;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:292113;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A3-010\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:17.6;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"5385260040c0\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:900;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:292113;s:10:\"PartNumber\";i:5385260040;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.032;s:16:\"WeightVolumetric\";d:0.042;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"5385260040c0\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5385260040c0",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A3-010",
            "bundle_pivot": []
        },
        {
            "id": 1377134,
            "brand_name": "TOYOTA",
            "part_number": "2219317840",
            "description_english": "RING OFOR TIMER COVER",
            "weight_physical": "0.004",
            "weight_volumetric": "0.001",
            "qty": 1,
            "warehouse": "canada",
            "price": "1.28",
            "unique_hash": "CA_b9dd18a1937f2d8720d0c21dbb2c157c",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:112;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:293402;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.28;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2219317840\";s:18:\"DescriptionEnglish\";s:21:\"RING OFOR TIMER COVER\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:899;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:293402;s:10:\"PartNumber\";i:2219317840;s:18:\"DescriptionEnglish\";s:21:\"RING OFOR TIMER COVER\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2219317840\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:178;s:11:\"stock_ca_id\";i:112;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:1.28;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-27 00:56:43.000\";s:10:\"updated_at\";s:23:\"2019-05-27 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "2219317840",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377133,
            "brand_name": "TOYOTA",
            "part_number": "2374217020",
            "description_english": "CLAMPINJECTION PIPE",
            "weight_physical": "0.038",
            "weight_volumetric": "0.008",
            "qty": 1,
            "warehouse": "canada",
            "price": "3.41",
            "unique_hash": "CA_ea0eff30a2343ed7f7a14e63d4903c46",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:114;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:302268;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.41;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2374217020\";s:18:\"DescriptionEnglish\";s:19:\"CLAMPINJECTION PIPE\";s:16:\"description_full\";N;s:7:\"row_num\";i:898;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:302268;s:10:\"PartNumber\";i:2374217020;s:18:\"DescriptionEnglish\";s:19:\"CLAMPINJECTION PIPE\";s:14:\"WeightPhysical\";d:0.038;s:16:\"WeightVolumetric\";d:0.008;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2374217020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "2374217020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377132,
            "brand_name": "TOYOTA",
            "part_number": "8521468011",
            "description_english": "RUBBER WIPER BLADE",
            "weight_physical": "0.099",
            "weight_volumetric": "0.003",
            "qty": 1,
            "warehouse": "canada",
            "price": "5.6",
            "unique_hash": "CA_f4d064719c4596c8a9b29acd5d5e17a6",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:119;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:307653;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:5.6;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8521468011\";s:18:\"DescriptionEnglish\";s:18:\"RUBBER WIPER BLADE\";s:16:\"description_full\";N;s:7:\"row_num\";i:897;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:307653;s:10:\"PartNumber\";i:8521468011;s:18:\"DescriptionEnglish\";s:18:\"RUBBER WIPER BLADE\";s:14:\"WeightPhysical\";d:0.099;s:16:\"WeightVolumetric\";d:0.003;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8521468011\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8521468011",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377131,
            "brand_name": "TOYOTA",
            "part_number": "8521448010",
            "description_english": "RUBBERWIPER BLADE",
            "weight_physical": "0.025",
            "weight_volumetric": "0.009",
            "qty": 1,
            "warehouse": "canada",
            "price": "9.62",
            "unique_hash": "CA_355f5603e77b4c59ddacb447997220ff",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:120;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:308013;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:9.62;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8521448010\";s:18:\"DescriptionEnglish\";s:17:\"RUBBERWIPER BLADE\";s:16:\"description_full\";N;s:7:\"row_num\";i:896;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:308013;s:10:\"PartNumber\";i:8521448010;s:18:\"DescriptionEnglish\";s:17:\"RUBBERWIPER BLADE\";s:14:\"WeightPhysical\";d:0.025;s:16:\"WeightVolumetric\";d:0.009;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8521448010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8521448010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377130,
            "brand_name": "TOYOTA",
            "part_number": "6293060010",
            "description_english": "DUCT ASSY QUARTER",
            "weight_physical": "0.148",
            "weight_volumetric": "0.527",
            "qty": 1,
            "warehouse": "canada",
            "price": "40.42",
            "unique_hash": "CA_52bda3a733e980b3b515214c3e504605",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:123;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:320202;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:9:\"STOCKROOM\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:40.42;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"6293060010\";s:18:\"DescriptionEnglish\";s:17:\"DUCT ASSY QUARTER\";s:16:\"description_full\";N;s:7:\"row_num\";i:895;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:320202;s:10:\"PartNumber\";i:6293060010;s:18:\"DescriptionEnglish\";s:17:\"DUCT ASSY QUARTER\";s:14:\"WeightPhysical\";d:0.148;s:16:\"WeightVolumetric\";d:0.527;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"6293060010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6293060010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "STOCKROOM",
            "bundle_pivot": []
        },
        {
            "id": 1377129,
            "brand_name": "TOYOTA",
            "part_number": "5828060041",
            "description_english": "BOOT SHIFT AND SELE",
            "weight_physical": "0.702",
            "weight_volumetric": "1.558",
            "qty": 1,
            "warehouse": "canada",
            "price": "86.68",
            "unique_hash": "CA_e4f141b42e2c94699b06227615129430",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:124;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:321797;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:9:\"STOCKROOM\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:86.68;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"5828060041\";s:18:\"DescriptionEnglish\";s:19:\"BOOT SHIFT AND SELE\";s:16:\"description_full\";N;s:7:\"row_num\";i:894;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:321797;s:10:\"PartNumber\";i:5828060041;s:18:\"DescriptionEnglish\";s:19:\"BOOT SHIFT AND SELE\";s:14:\"WeightPhysical\";d:0.702;s:16:\"WeightVolumetric\";d:1.558;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"5828060041\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5828060041",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "STOCKROOM",
            "bundle_pivot": []
        },
        {
            "id": 1377128,
            "brand_name": "TOYOTA",
            "part_number": "5897620020",
            "description_english": "DOOR LOCK",
            "weight_physical": "0.006",
            "weight_volumetric": "0.005",
            "qty": 1,
            "warehouse": "canada",
            "price": "3.4",
            "unique_hash": "CA_8361be914c51cc8dea05eb955af90355",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:125;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:325532;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.4;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"5897620020\";s:18:\"DescriptionEnglish\";s:9:\"DOOR LOCK\";s:16:\"description_full\";N;s:7:\"row_num\";i:893;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:325532;s:10:\"PartNumber\";i:5897620020;s:18:\"DescriptionEnglish\";s:9:\"DOOR LOCK\";s:14:\"WeightPhysical\";d:0.006;s:16:\"WeightVolumetric\";d:0.005;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"5897620020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5897620020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377127,
            "brand_name": "TOYOTA",
            "part_number": "4218160120",
            "description_english": "GASKET DIFFERENTIAL",
            "weight_physical": "0.015",
            "weight_volumetric": "0.009",
            "qty": 1,
            "warehouse": "canada",
            "price": "4.57",
            "unique_hash": "CA_cb31e3e596ae4f742746635fea39f618",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:126;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:330680;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B3-LF\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:4.57;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4218160120\";s:18:\"DescriptionEnglish\";s:19:\"GASKET DIFFERENTIAL\";s:16:\"description_full\";N;s:7:\"row_num\";i:892;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:330680;s:10:\"PartNumber\";i:4218160120;s:18:\"DescriptionEnglish\";s:19:\"GASKET DIFFERENTIAL\";s:14:\"WeightPhysical\";d:0.015;s:16:\"WeightVolumetric\";d:0.009;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4218160120\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4218160120",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-LF",
            "bundle_pivot": []
        },
        {
            "id": 1377126,
            "brand_name": "TOYOTA",
            "part_number": "5345160010",
            "description_english": "HOOD SUPPPORT",
            "weight_physical": "0.374",
            "weight_volumetric": "0.227",
            "qty": 2,
            "warehouse": "canada",
            "price": "19.05",
            "unique_hash": "CA_6d55002aff0e1ac01db9953a78f6555d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:130;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:332535;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:5:\"A0-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:19.05;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"5345160010\";s:18:\"DescriptionEnglish\";s:13:\"HOOD SUPPPORT\";s:16:\"description_full\";N;s:7:\"row_num\";i:891;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:332535;s:10:\"PartNumber\";i:5345160010;s:18:\"DescriptionEnglish\";s:13:\"HOOD SUPPPORT\";s:14:\"WeightPhysical\";d:0.374;s:16:\"WeightVolumetric\";d:0.227;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"5345160010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5345160010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A0-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377125,
            "brand_name": "NSK",
            "part_number": "62tb0629b29",
            "description_english": "TIMING BELT IDLER",
            "weight_physical": "0.412",
            "weight_volumetric": "0.078",
            "qty": 1,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_48898d048ae16a17587e66951e7f234d",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:132;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:336888;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:106;s:10:\"PartNumber\";s:11:\"62tb0629b29\";s:18:\"DescriptionEnglish\";s:17:\"TIMING BELT IDLER\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:890;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:106;s:9:\"BrandName\";s:3:\"NSK\";}s:4:\"part\";a:12:{s:2:\"Id\";i:336888;s:10:\"PartNumber\";i:62;s:18:\"DescriptionEnglish\";s:17:\"TIMING BELT IDLER\";s:14:\"WeightPhysical\";d:0.412;s:16:\"WeightVolumetric\";d:0.078;s:7:\"BrandId\";i:106;s:15:\"ClearPartNumber\";s:11:\"62tb0629b29\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:106;s:9:\"BrandName\";s:3:\"NSK\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:341;s:11:\"stock_ca_id\";i:132;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:999.99;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-02 16:47:24.000\";s:10:\"updated_at\";s:23:\"2019-06-02 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "62tb0629b29",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377124,
            "brand_name": "TOYOTA",
            "part_number": "9017011006",
            "description_english": "NUT",
            "weight_physical": "0.008",
            "weight_volumetric": "0.001",
            "qty": 3,
            "warehouse": "canada",
            "price": "0.39",
            "unique_hash": "CA_5ac5ae3bf8d58b8089f9c8b6fb460a76",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:133;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:337233;s:9:\"Stock_Qty\";i:3;s:8:\"Location\";s:6:\"B2-016\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.39;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9017011006\";s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:16:\"description_full\";N;s:7:\"row_num\";i:889;s:8:\"StockQty\";i:3;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:337233;s:10:\"PartNumber\";i:9017011006;s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:14:\"WeightPhysical\";d:0.008;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9017011006\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9017011006",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-016",
            "bundle_pivot": []
        },
        {
            "id": 1377123,
            "brand_name": "TOYOTA",
            "part_number": "9021542025",
            "description_english": "GASKET",
            "weight_physical": "0.012",
            "weight_volumetric": "0.007",
            "qty": 10,
            "warehouse": "canada",
            "price": "0.85",
            "unique_hash": "CA_feedbc4b67093828d84a609c27fdf276",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:135;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:337759;s:9:\"Stock_Qty\";i:10;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.85;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9021542025\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:888;s:8:\"StockQty\";i:10;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:337759;s:10:\"PartNumber\";i:9021542025;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.012;s:16:\"WeightVolumetric\";d:0.007;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9021542025\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9021542025",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377122,
            "brand_name": "TOYOTA",
            "part_number": "9017910028",
            "description_english": "NUT",
            "weight_physical": "0.012",
            "weight_volumetric": "0.001",
            "qty": 1,
            "warehouse": "canada",
            "price": "1.88",
            "unique_hash": "CA_1ae87e8029a5f89656412c5c25a9dec5",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:136;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:338089;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"A3-011\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.88;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9017910028\";s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:16:\"description_full\";N;s:7:\"row_num\";i:887;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:338089;s:10:\"PartNumber\";i:9017910028;s:18:\"DescriptionEnglish\";s:3:\"NUT\";s:14:\"WeightPhysical\";d:0.012;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9017910028\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9017910028",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A3-011",
            "bundle_pivot": []
        },
        {
            "id": 1377121,
            "brand_name": "TOYOTA",
            "part_number": "2934258010",
            "description_english": "RING",
            "weight_physical": "0.004",
            "weight_volumetric": "0.002",
            "qty": 2,
            "warehouse": "canada",
            "price": "2.66",
            "unique_hash": "CA_b01baa98eea4d7aabc3aa5b1c22d8a20",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:138;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:338547;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.66;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"2934258010\";s:18:\"DescriptionEnglish\";s:4:\"RING\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:886;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:338547;s:10:\"PartNumber\";i:2934258010;s:18:\"DescriptionEnglish\";s:4:\"RING\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"2934258010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:170;s:11:\"stock_ca_id\";i:138;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:2.66;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-27 00:49:10.000\";s:10:\"updated_at\";s:23:\"2019-05-27 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "2934258010",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377120,
            "brand_name": "KOYO",
            "part_number": "6308",
            "description_english": "BEARING",
            "weight_physical": "0.65",
            "weight_volumetric": "0.045",
            "qty": 1,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_6993016d49b398afc475deb270f920bd",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:140;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:340358;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:71;s:10:\"PartNumber\";s:4:\"6308\";s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:16:\"description_full\";N;s:7:\"row_num\";i:885;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:340358;s:10:\"PartNumber\";i:6308;s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:14:\"WeightPhysical\";d:0.65;s:16:\"WeightVolumetric\";d:0.045;s:7:\"BrandId\";i:71;s:15:\"ClearPartNumber\";s:4:\"6308\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6308",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377119,
            "brand_name": "TOYOTA",
            "part_number": "9046115013",
            "description_english": "CLAMP",
            "weight_physical": "0.104",
            "weight_volumetric": "0.045",
            "qty": 1,
            "warehouse": "canada",
            "price": "9.54",
            "unique_hash": "CA_44b74ebdb2934c59d1bdb2089a4c3611",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:142;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:340966;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:9.54;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9046115013\";s:18:\"DescriptionEnglish\";s:5:\"CLAMP\";s:16:\"description_full\";N;s:7:\"row_num\";i:884;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:340966;s:10:\"PartNumber\";i:9046115013;s:18:\"DescriptionEnglish\";s:5:\"CLAMP\";s:14:\"WeightPhysical\";d:0.104;s:16:\"WeightVolumetric\";d:0.045;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9046115013\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9046115013",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377118,
            "brand_name": "TOYOTA",
            "part_number": "9052134005",
            "description_english": "GASKET",
            "weight_physical": "0.006",
            "weight_volumetric": "0.001",
            "qty": 8,
            "warehouse": "canada",
            "price": "0.67",
            "unique_hash": "CA_330f3c581499272cdb32f076ef60dac6",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:144;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:344448;s:9:\"Stock_Qty\";i:8;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.67;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9052134005\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:883;s:8:\"StockQty\";i:8;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:344448;s:10:\"PartNumber\";i:9052134005;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.006;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9052134005\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9052134005",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377117,
            "brand_name": "TOYOTA",
            "part_number": "9091706083",
            "description_english": "GASKET EXHAUST PIPE",
            "weight_physical": "0.016",
            "weight_volumetric": "0.003",
            "qty": 2,
            "warehouse": "canada",
            "price": "4",
            "unique_hash": "CA_86b3b43e2d9f442db601f524d6fe642f",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:146;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:345700;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";i:4;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9091706083\";s:18:\"DescriptionEnglish\";s:19:\"GASKET EXHAUST PIPE\";s:16:\"description_full\";N;s:7:\"row_num\";i:882;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:345700;s:10:\"PartNumber\";i:9091706083;s:18:\"DescriptionEnglish\";s:19:\"GASKET EXHAUST PIPE\";s:14:\"WeightPhysical\";d:0.016;s:16:\"WeightVolumetric\";d:0.003;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9091706083\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9091706083",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377116,
            "brand_name": "TOYOTA",
            "part_number": "9094702817",
            "description_english": "FLEXIBLE HOSE",
            "weight_physical": "0.086",
            "weight_volumetric": "0.019",
            "qty": 6,
            "warehouse": "canada",
            "price": "14.95",
            "unique_hash": "CA_b77b12a66828257095e202091c55dab9",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:148;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:346402;s:9:\"Stock_Qty\";i:6;s:8:\"Location\";s:5:\"B3-LF\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:14.95;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9094702817\";s:18:\"DescriptionEnglish\";s:13:\"FLEXIBLE HOSE\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:881;s:8:\"StockQty\";i:6;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:346402;s:10:\"PartNumber\";i:9094702817;s:18:\"DescriptionEnglish\";s:13:\"FLEXIBLE HOSE\";s:14:\"WeightPhysical\";d:0.086;s:16:\"WeightVolumetric\";d:0.019;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9094702817\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:188;s:11:\"stock_ca_id\";i:148;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:14.95;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-28 19:54:10.000\";s:10:\"updated_at\";s:23:\"2019-05-28 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "9094702817",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-LF",
            "bundle_pivot": []
        },
        {
            "id": 1377115,
            "brand_name": "TOYOTA",
            "part_number": "9098011964",
            "description_english": "HOUSINGCONNECTOR",
            "weight_physical": "0.01",
            "weight_volumetric": "0.004",
            "qty": 6,
            "warehouse": "canada",
            "price": "5.75",
            "unique_hash": "CA_0d85fe1786dc29e975f7b89f5eb4c684",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:151;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:347191;s:9:\"Stock_Qty\";i:6;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:5.75;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"9098011964\";s:18:\"DescriptionEnglish\";s:16:\"HOUSINGCONNECTOR\";s:16:\"description_full\";N;s:7:\"row_num\";i:880;s:8:\"StockQty\";i:6;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:347191;s:10:\"PartNumber\";i:9098011964;s:18:\"DescriptionEnglish\";s:16:\"HOUSINGCONNECTOR\";s:14:\"WeightPhysical\";d:0.01;s:16:\"WeightVolumetric\";d:0.004;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"9098011964\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "9098011964",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377114,
            "brand_name": "TOYOTA",
            "part_number": "5819253061",
            "description_english": "FOOTREST FR FLOOR",
            "weight_physical": "0.142",
            "weight_volumetric": "0.44",
            "qty": 1,
            "warehouse": "canada",
            "price": "42.55",
            "unique_hash": "CA_a910a9a9c6c76abe655db325c4f2d926",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:154;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:359450;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-015\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:42.55;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"5819253061\";s:18:\"DescriptionEnglish\";s:17:\"FOOTREST FR FLOOR\";s:16:\"description_full\";N;s:7:\"row_num\";i:879;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:359450;s:10:\"PartNumber\";i:5819253061;s:18:\"DescriptionEnglish\";s:17:\"FOOTREST FR FLOOR\";s:14:\"WeightPhysical\";d:0.142;s:16:\"WeightVolumetric\";d:0.44;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"5819253061\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "5819253061",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-015",
            "bundle_pivot": []
        },
        {
            "id": 1377113,
            "brand_name": "TOYOTA",
            "part_number": "4535760030",
            "description_english": "SCREW",
            "weight_physical": "0.03",
            "weight_volumetric": "0.002",
            "qty": 1,
            "warehouse": "canada",
            "price": "3.1",
            "unique_hash": "CA_093b0bb0ac6439ce098d089ee37313cb",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:156;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:361238;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.1;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4535760030\";s:18:\"DescriptionEnglish\";s:5:\"SCREW\";s:16:\"description_full\";N;s:7:\"row_num\";i:878;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:361238;s:10:\"PartNumber\";i:4535760030;s:18:\"DescriptionEnglish\";s:5:\"SCREW\";s:14:\"WeightPhysical\";d:0.03;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4535760030\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4535760030",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377112,
            "brand_name": "TOYOTA",
            "part_number": "3630360070c0",
            "description_english": "KNOB SUBASSY SHIFT",
            "weight_physical": "0.064",
            "weight_volumetric": "0.016",
            "qty": 2,
            "warehouse": "canada",
            "price": "22.46",
            "unique_hash": "CA_1f9e9804b20e0167a79707c578513edf",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:158;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:371325;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A2-007\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:22.46;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"3630360070c0\";s:18:\"DescriptionEnglish\";s:18:\"KNOB SUBASSY SHIFT\";s:16:\"description_full\";N;s:7:\"row_num\";i:877;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:371325;s:10:\"PartNumber\";i:3630360070;s:18:\"DescriptionEnglish\";s:18:\"KNOB SUBASSY SHIFT\";s:14:\"WeightPhysical\";d:0.064;s:16:\"WeightVolumetric\";d:0.016;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"3630360070c0\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "3630360070c0",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-007",
            "bundle_pivot": []
        },
        {
            "id": 1377111,
            "brand_name": "TOYOTA",
            "part_number": "3818760170",
            "description_english": "RINGX",
            "weight_physical": "0.004",
            "weight_volumetric": "0.003",
            "qty": 2,
            "warehouse": "canada",
            "price": "8.51",
            "unique_hash": "CA_bd1621d7ba7ab26960548889178336fd",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:161;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:374844;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-018\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:8.51;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"3818760170\";s:18:\"DescriptionEnglish\";s:5:\"RINGX\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:876;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:374844;s:10:\"PartNumber\";i:3818760170;s:18:\"DescriptionEnglish\";s:5:\"RINGX\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.003;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"3818760170\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:435;s:11:\"stock_ca_id\";i:161;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:8.51;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-09 15:04:09.000\";s:10:\"updated_at\";s:23:\"2019-06-09 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "3818760170",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B3-018",
            "bundle_pivot": []
        },
        {
            "id": 1377110,
            "brand_name": "KOYO",
            "part_number": "dg3580ac4",
            "description_english": "BEARING",
            "weight_physical": "0.464",
            "weight_volumetric": "0.034",
            "qty": 1,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_19acee353e18cbbb1c7fc018eaff1f9a",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:162;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:377896;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:71;s:10:\"PartNumber\";s:9:\"dg3580ac4\";s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:16:\"description_full\";N;s:7:\"row_num\";i:875;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:377896;s:10:\"PartNumber\";i:0;s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:14:\"WeightPhysical\";d:0.464;s:16:\"WeightVolumetric\";d:0.034;s:7:\"BrandId\";i:71;s:15:\"ClearPartNumber\";s:9:\"dg3580ac4\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "dg3580ac4",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377109,
            "brand_name": "NSK",
            "part_number": "6207zz",
            "description_english": "35 72 17",
            "weight_physical": "0.3",
            "weight_volumetric": "0",
            "qty": 1,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_c04b7a4053dccac118d130c2e108fcba",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:164;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:384144;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:106;s:10:\"PartNumber\";s:6:\"6207zz\";s:18:\"DescriptionEnglish\";s:8:\"35 72 17\";s:16:\"description_full\";N;s:7:\"row_num\";i:874;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:106;s:9:\"BrandName\";s:3:\"NSK\";}s:4:\"part\";a:12:{s:2:\"Id\";i:384144;s:10:\"PartNumber\";i:6207;s:18:\"DescriptionEnglish\";s:8:\"35 72 17\";s:14:\"WeightPhysical\";d:0.3;s:16:\"WeightVolumetric\";i:0;s:7:\"BrandId\";i:106;s:15:\"ClearPartNumber\";s:6:\"6207zz\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:106;s:9:\"BrandName\";s:3:\"NSK\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6207zz",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377108,
            "brand_name": "TOYOTA",
            "part_number": "4323460020",
            "description_english": "SHIMSTG KNUCKLE ADJ",
            "weight_physical": "0.008",
            "weight_volumetric": "0.002",
            "qty": 2,
            "warehouse": "canada",
            "price": "1.73",
            "unique_hash": "CA_b2d32001473423a002fd5152ae80bff9",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:167;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:390923;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.73;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4323460020\";s:18:\"DescriptionEnglish\";s:19:\"SHIMSTG KNUCKLE ADJ\";s:16:\"description_full\";N;s:7:\"row_num\";i:873;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:390923;s:10:\"PartNumber\";i:4323460020;s:18:\"DescriptionEnglish\";s:19:\"SHIMSTG KNUCKLE ADJ\";s:14:\"WeightPhysical\";d:0.008;s:16:\"WeightVolumetric\";d:0.002;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4323460020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4323460020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377107,
            "brand_name": "TOYOTA",
            "part_number": "4343560011",
            "description_english": "GASKET",
            "weight_physical": "0.004",
            "weight_volumetric": "0.011",
            "qty": 4,
            "warehouse": "canada",
            "price": "0.48",
            "unique_hash": "CA_9c6ad710929be66a7a8c76297dd725a1",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:168;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:391367;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"B3-019\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:0.48;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4343560011\";s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:872;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:391367;s:10:\"PartNumber\";i:4343560011;s:18:\"DescriptionEnglish\";s:6:\"GASKET\";s:14:\"WeightPhysical\";d:0.004;s:16:\"WeightVolumetric\";d:0.011;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4343560011\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "4343560011",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B3-019",
            "bundle_pivot": []
        },
        {
            "id": 1377106,
            "brand_name": "TOYOTA",
            "part_number": "7660360021",
            "description_english": "MUDGUARD SUBASSY",
            "weight_physical": "0.498",
            "weight_volumetric": "2.284",
            "qty": 1,
            "warehouse": "canada",
            "price": "78.86",
            "unique_hash": "CA_f3161e599d7e1805bd6b8269e4583ae7",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:170;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:407242;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B1-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:78.86;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7660360021\";s:18:\"DescriptionEnglish\";s:16:\"MUDGUARD SUBASSY\";s:16:\"description_full\";N;s:7:\"row_num\";i:871;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:407242;s:10:\"PartNumber\";i:7660360021;s:18:\"DescriptionEnglish\";s:16:\"MUDGUARD SUBASSY\";s:14:\"WeightPhysical\";d:0.498;s:16:\"WeightVolumetric\";d:2.284;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7660360021\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7660360021",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B1-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377105,
            "brand_name": "TOYOTA",
            "part_number": "6786160060",
            "description_english": "DOOR WEATHERSTRIP",
            "weight_physical": "0.374",
            "weight_volumetric": "0.363",
            "qty": 1,
            "warehouse": "canada",
            "price": "85.8",
            "unique_hash": "CA_be35e7adc677061ecde98fc62f8c86be",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:171;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:408015;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:9:\"STOCKROOM\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:85.8;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"6786160060\";s:18:\"DescriptionEnglish\";s:17:\"DOOR WEATHERSTRIP\";s:16:\"description_full\";N;s:7:\"row_num\";i:870;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:408015;s:10:\"PartNumber\";i:6786160060;s:18:\"DescriptionEnglish\";s:17:\"DOOR WEATHERSTRIP\";s:14:\"WeightPhysical\";d:0.374;s:16:\"WeightVolumetric\";d:0.363;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"6786160060\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6786160060",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "STOCKROOM",
            "bundle_pivot": []
        },
        {
            "id": 1377104,
            "brand_name": "TOYOTA",
            "part_number": "725261004122",
            "description_english": "HANDLE RECLINING",
            "weight_physical": "0.016",
            "weight_volumetric": "0.03",
            "qty": 1,
            "warehouse": "canada",
            "price": "6.56",
            "unique_hash": "CA_81d6ae5e0e8833bf20964f58499fdf84",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:172;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:408047;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:6.56;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"725261004122\";s:18:\"DescriptionEnglish\";s:16:\"HANDLE RECLINING\";s:16:\"description_full\";N;s:7:\"row_num\";i:869;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:408047;s:10:\"PartNumber\";i:725261004122;s:18:\"DescriptionEnglish\";s:16:\"HANDLE RECLINING\";s:14:\"WeightPhysical\";d:0.016;s:16:\"WeightVolumetric\";d:0.03;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"725261004122\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "725261004122",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377103,
            "brand_name": "TOYOTA",
            "part_number": "6786260060",
            "description_english": "DOOR WEATHERSTRIP",
            "weight_physical": "0.385",
            "weight_volumetric": "1.4",
            "qty": 1,
            "warehouse": "canada",
            "price": "90.52",
            "unique_hash": "CA_9abd3ab4a0829b7acccf163c8c78da1f",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:173;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:408571;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:9:\"STOCKROOM\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:90.52;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"6786260060\";s:18:\"DescriptionEnglish\";s:17:\"DOOR WEATHERSTRIP\";s:16:\"description_full\";N;s:7:\"row_num\";i:868;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:408571;s:10:\"PartNumber\";i:6786260060;s:18:\"DescriptionEnglish\";s:17:\"DOOR WEATHERSTRIP\";s:14:\"WeightPhysical\";d:0.385;s:16:\"WeightVolumetric\";d:1.4;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"6786260060\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "6786260060",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "STOCKROOM",
            "bundle_pivot": []
        },
        {
            "id": 1377102,
            "brand_name": "TAIHO",
            "part_number": "p040hstd",
            "description_english": "BUSH",
            "weight_physical": "0.228",
            "weight_volumetric": "0.036",
            "qty": 3,
            "warehouse": "canada",
            "price": "14.99",
            "unique_hash": "CA_81d048ca9be4242249294ff0f44a312d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:176;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:418558;s:9:\"Stock_Qty\";i:3;s:8:\"Location\";s:6:\"B1-014\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:14.99;s:7:\"BrandId\";i:134;s:10:\"PartNumber\";s:8:\"p040hstd\";s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:16:\"description_full\";N;s:7:\"row_num\";i:867;s:8:\"StockQty\";i:3;s:5:\"brand\";a:2:{s:2:\"id\";i:134;s:9:\"BrandName\";s:5:\"TAIHO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:418558;s:10:\"PartNumber\";i:0;s:18:\"DescriptionEnglish\";s:4:\"BUSH\";s:14:\"WeightPhysical\";d:0.228;s:16:\"WeightVolumetric\";d:0.036;s:7:\"BrandId\";i:134;s:15:\"ClearPartNumber\";s:8:\"p040hstd\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:134;s:9:\"BrandName\";s:5:\"TAIHO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "p040hstd",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B1-014",
            "bundle_pivot": []
        },
        {
            "id": 1377101,
            "brand_name": "TOYOTA",
            "part_number": "4881530050",
            "description_english": "BUSH FRONT STABILIZER BAR",
            "weight_physical": "0.028",
            "weight_volumetric": "0.011",
            "qty": 2,
            "warehouse": "canada",
            "price": "2.22",
            "unique_hash": "CA_889737a66d7037f51a29738d46ed2eab",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:177;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:418796;s:9:\"Stock_Qty\";i:2;s:8:\"Location\";s:6:\"A1-002\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.22;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"4881530050\";s:18:\"DescriptionEnglish\";s:25:\"BUSH FRONT STABILIZER BAR\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:866;s:8:\"StockQty\";i:2;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:418796;s:10:\"PartNumber\";i:4881530050;s:18:\"DescriptionEnglish\";s:25:\"BUSH FRONT STABILIZER BAR\";s:14:\"WeightPhysical\";d:0.028;s:16:\"WeightVolumetric\";d:0.011;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"4881530050\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:393;s:11:\"stock_ca_id\";i:177;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:2.22;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-06-08 14:45:09.000\";s:10:\"updated_at\";s:23:\"2019-06-08 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "4881530050",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "A1-002",
            "bundle_pivot": []
        },
        {
            "id": 1377100,
            "brand_name": "TOYOTA",
            "part_number": "7841060090",
            "description_english": "CHOKE CABLE",
            "weight_physical": "0.092",
            "weight_volumetric": "0.027",
            "qty": 5,
            "warehouse": "canada",
            "price": "16.31",
            "unique_hash": "CA_69e7c7de4488872210b96a25f2e6b5c7",
            "part_fits": null,
            "description_full": "",
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": "vannia@cruiseraddiction.com",
            "notes": "a:17:{s:2:\"id\";i:187;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:437055;s:9:\"Stock_Qty\";i:5;s:8:\"Location\";s:6:\"B2-016\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:16.31;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7841060090\";s:18:\"DescriptionEnglish\";s:11:\"CHOKE CABLE\";s:16:\"description_full\";s:0:\"\";s:7:\"row_num\";i:865;s:8:\"StockQty\";i:5;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:437055;s:10:\"PartNumber\";i:7841060090;s:18:\"DescriptionEnglish\";s:11:\"CHOKE CABLE\";s:14:\"WeightPhysical\";d:0.092;s:16:\"WeightVolumetric\";d:0.027;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7841060090\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";s:0:\"\";s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";a:13:{s:2:\"id\";i:66;s:11:\"stock_ca_id\";i:187;s:9:\"stock_min\";i:0;s:10:\"list_price\";d:16.31;s:9:\"min_price\";i:0;s:9:\"max_price\";i:0;s:10:\"categories\";N;s:10:\"created_at\";s:23:\"2019-05-03 03:00:25.000\";s:10:\"updated_at\";s:23:\"2019-06-09 00:00:00.000\";s:10:\"updated_by\";i:6;s:7:\"bundles\";a:0:{}s:4:\"tags\";a:0:{}s:8:\"modifier\";a:17:{s:2:\"id\";i:6;s:5:\"email\";s:27:\"vannia@cruiseraddiction.com\";s:10:\"first_name\";s:6:\"Vannia\";s:9:\"last_name\";s:8:\"Leonardo\";s:5:\"phone\";s:8:\"22222222\";s:17:\"registration_date\";s:27:\"2018-07-23 15:55:33.3470000\";s:15:\"last_login_date\";s:27:\"2019-06-03 17:19:13.0000000\";s:13:\"last_login_ip\";s:9:\"127.0.0.1\";s:20:\"password_change_date\";N;s:9:\"is_active\";b:1;s:7:\"country\";s:6:\"Mexico\";s:10:\"group_name\";s:3:\"100\";s:6:\"avatar\";N;s:27:\"use_price_provider_modifier\";b:0;s:23:\"price_provider_modifier\";i:1;s:12:\"country_code\";s:2:\"MX\";s:9:\"full_name\";s:15:\"Leonardo Vannia\";}}}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": "0",
            "max_price": "0",
            "part_number_without_too_much": "7841060090",
            "min_stock": "0",
            "is_stock_ca": 1,
            "location": "B2-016",
            "bundle_pivot": []
        },
        {
            "id": 1377099,
            "brand_name": "HKT",
            "part_number": "pt150",
            "description_english": "GLOW PLUG 1C2C",
            "weight_physical": "0.033",
            "weight_volumetric": "0.006",
            "qty": 8,
            "warehouse": "canada",
            "price": "3.78",
            "unique_hash": "CA_6b8acfb3a139280776ea43a76d5449e1",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:188;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:437490;s:9:\"Stock_Qty\";i:8;s:8:\"Location\";s:6:\"B1-014\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:3.78;s:7:\"BrandId\";i:53;s:10:\"PartNumber\";s:5:\"pt150\";s:18:\"DescriptionEnglish\";s:14:\"GLOW PLUG 1C2C\";s:16:\"description_full\";N;s:7:\"row_num\";i:864;s:8:\"StockQty\";i:8;s:5:\"brand\";a:2:{s:2:\"id\";i:53;s:9:\"BrandName\";s:3:\"HKT\";}s:4:\"part\";a:12:{s:2:\"Id\";i:437490;s:10:\"PartNumber\";i:0;s:18:\"DescriptionEnglish\";s:14:\"GLOW PLUG 1C2C\";s:14:\"WeightPhysical\";d:0.033;s:16:\"WeightVolumetric\";d:0.006;s:7:\"BrandId\";i:53;s:15:\"ClearPartNumber\";s:5:\"pt150\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:53;s:9:\"BrandName\";s:3:\"HKT\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "pt150",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B1-014",
            "bundle_pivot": []
        },
        {
            "id": 1377098,
            "brand_name": "TOYOTA",
            "part_number": "8112162010",
            "description_english": "SPRING",
            "weight_physical": "0.007",
            "weight_volumetric": "0.001",
            "qty": 4,
            "warehouse": "canada",
            "price": "1.17",
            "unique_hash": "CA_f98bd8e6870999344e62b26783f999cd",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:189;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:438080;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:1.17;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8112162010\";s:18:\"DescriptionEnglish\";s:6:\"SPRING\";s:16:\"description_full\";N;s:7:\"row_num\";i:863;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:438080;s:10:\"PartNumber\";i:8112162010;s:18:\"DescriptionEnglish\";s:6:\"SPRING\";s:14:\"WeightPhysical\";d:0.007;s:16:\"WeightVolumetric\";d:0.001;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8112162010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8112162010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377097,
            "brand_name": "KOYO",
            "part_number": "rnu080821nr",
            "description_english": "BEARING",
            "weight_physical": "0.38",
            "weight_volumetric": "0.03",
            "qty": 1,
            "warehouse": "canada",
            "price": "999.99",
            "unique_hash": "CA_4d3e686a4348b801043bae46fb3f4b58",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:190;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:441252;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B0-013\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:999.99;s:7:\"BrandId\";i:71;s:10:\"PartNumber\";s:11:\"rnu080821nr\";s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:16:\"description_full\";N;s:7:\"row_num\";i:862;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}s:4:\"part\";a:12:{s:2:\"Id\";i:441252;s:10:\"PartNumber\";i:0;s:18:\"DescriptionEnglish\";s:7:\"BEARING\";s:14:\"WeightPhysical\";d:0.38;s:16:\"WeightVolumetric\";d:0.03;s:7:\"BrandId\";i:71;s:15:\"ClearPartNumber\";s:11:\"rnu080821nr\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:71;s:9:\"BrandName\";s:4:\"KOYO\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "rnu080821nr",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B0-013",
            "bundle_pivot": []
        },
        {
            "id": 1377096,
            "brand_name": "TOYOTA",
            "part_number": "8124095a16",
            "description_english": "ROOM LAMP GROUP",
            "weight_physical": "0.078",
            "weight_volumetric": "0.117",
            "qty": 1,
            "warehouse": "canada",
            "price": "23.8",
            "unique_hash": "CA_eb5da97f001e3ad0b2bdf2a8a5d96efd",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:193;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:450431;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:23.8;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8124095a16\";s:18:\"DescriptionEnglish\";s:15:\"ROOM LAMP GROUP\";s:16:\"description_full\";N;s:7:\"row_num\";i:861;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:450431;s:10:\"PartNumber\";i:8124095;s:18:\"DescriptionEnglish\";s:15:\"ROOM LAMP GROUP\";s:14:\"WeightPhysical\";d:0.078;s:16:\"WeightVolumetric\";d:0.117;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8124095a16\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8124095a16",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377095,
            "brand_name": "TOYOTA",
            "part_number": "7510160011",
            "description_english": "BRACKET",
            "weight_physical": "0.496",
            "weight_volumetric": "0.6",
            "qty": 0,
            "warehouse": "canada",
            "price": "36.09",
            "unique_hash": "CA_3d93e043b5f55d9ae446edab5e5d1548",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:196;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:454542;s:9:\"Stock_Qty\";i:0;s:8:\"Location\";s:6:\"B2-015\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:36.09;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7510160011\";s:18:\"DescriptionEnglish\";s:7:\"BRACKET\";s:16:\"description_full\";N;s:7:\"row_num\";i:860;s:8:\"StockQty\";i:0;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:454542;s:10:\"PartNumber\";i:7510160011;s:18:\"DescriptionEnglish\";s:7:\"BRACKET\";s:14:\"WeightPhysical\";d:0.496;s:16:\"WeightVolumetric\";d:0.6;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7510160011\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7510160011",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-015",
            "bundle_pivot": []
        },
        {
            "id": 1377094,
            "brand_name": "TOYOTA",
            "part_number": "8169090300",
            "description_english": "LICENCE PLATE COVER",
            "weight_physical": "0.108",
            "weight_volumetric": "0.056",
            "qty": 8,
            "warehouse": "canada",
            "price": "18.91",
            "unique_hash": "CA_5ed3b5b8f963c88aa0ad37afa42fdf1c",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:198;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:455030;s:9:\"Stock_Qty\";i:8;s:8:\"Location\";s:6:\"A2-009\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:18.91;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8169090300\";s:18:\"DescriptionEnglish\";s:19:\"LICENCE PLATE COVER\";s:16:\"description_full\";N;s:7:\"row_num\";i:859;s:8:\"StockQty\";i:8;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:455030;s:10:\"PartNumber\";i:8169090300;s:18:\"DescriptionEnglish\";s:19:\"LICENCE PLATE COVER\";s:14:\"WeightPhysical\";d:0.108;s:16:\"WeightVolumetric\";d:0.056;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8169090300\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8169090300",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-009",
            "bundle_pivot": []
        },
        {
            "id": 1377093,
            "brand_name": "TOYOTA",
            "part_number": "7546360010",
            "description_english": "PAD",
            "weight_physical": "0.008",
            "weight_volumetric": "0.006",
            "qty": 1,
            "warehouse": "canada",
            "price": "2.95",
            "unique_hash": "CA_47d190b8b2b93f81cfad92bc662cb11f",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:199;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:456062;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"A2-009\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:2.95;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7546360010\";s:18:\"DescriptionEnglish\";s:3:\"PAD\";s:16:\"description_full\";N;s:7:\"row_num\";i:858;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:456062;s:10:\"PartNumber\";i:7546360010;s:18:\"DescriptionEnglish\";s:3:\"PAD\";s:14:\"WeightPhysical\";d:0.008;s:16:\"WeightVolumetric\";d:0.006;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7546360010\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7546360010",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "A2-009",
            "bundle_pivot": []
        },
        {
            "id": 1377092,
            "brand_name": "TOYOTA",
            "part_number": "8342020020",
            "description_english": "GAGEWATER TEMPERATR",
            "weight_physical": "0.026",
            "weight_volumetric": "0.003",
            "qty": 1,
            "warehouse": "canada",
            "price": "23.53",
            "unique_hash": "CA_c8ada876191ee80cad75094d3bf57b71",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:203;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:460476;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:23.53;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8342020020\";s:18:\"DescriptionEnglish\";s:19:\"GAGEWATER TEMPERATR\";s:16:\"description_full\";N;s:7:\"row_num\";i:857;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:460476;s:10:\"PartNumber\";i:8342020020;s:18:\"DescriptionEnglish\";s:19:\"GAGEWATER TEMPERATR\";s:14:\"WeightPhysical\";d:0.026;s:16:\"WeightVolumetric\";d:0.003;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8342020020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8342020020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377091,
            "brand_name": "TOYOTA",
            "part_number": "7410260110e0",
            "description_english": "RECEPTACLE",
            "weight_physical": "0.145",
            "weight_volumetric": "0.132",
            "qty": 1,
            "warehouse": "canada",
            "price": "40.64",
            "unique_hash": "CA_f927be9721eda1992b025b631d81fb7b",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:204;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:460690;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-015\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:40.64;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:12:\"7410260110e0\";s:18:\"DescriptionEnglish\";s:10:\"RECEPTACLE\";s:16:\"description_full\";N;s:7:\"row_num\";i:856;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:460690;s:10:\"PartNumber\";i:7410260110;s:18:\"DescriptionEnglish\";s:10:\"RECEPTACLE\";s:14:\"WeightPhysical\";d:0.145;s:16:\"WeightVolumetric\";d:0.132;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:12:\"7410260110e0\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7410260110e0",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-015",
            "bundle_pivot": []
        },
        {
            "id": 1377090,
            "brand_name": "TOYOTA",
            "part_number": "7432090301",
            "description_english": "SUN VISOR",
            "weight_physical": "0.278",
            "weight_volumetric": "0.369",
            "qty": 4,
            "warehouse": "canada",
            "price": "57.03",
            "unique_hash": "CA_d3950776a865f45bf72306d244db5f7d",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:205;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:461237;s:9:\"Stock_Qty\";i:4;s:8:\"Location\";s:6:\"B2-016\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:57.03;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"7432090301\";s:18:\"DescriptionEnglish\";s:9:\"SUN VISOR\";s:16:\"description_full\";N;s:7:\"row_num\";i:855;s:8:\"StockQty\";i:4;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:461237;s:10:\"PartNumber\";i:7432090301;s:18:\"DescriptionEnglish\";s:9:\"SUN VISOR\";s:14:\"WeightPhysical\";d:0.278;s:16:\"WeightVolumetric\";d:0.369;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"7432090301\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "7432090301",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-016",
            "bundle_pivot": []
        },
        {
            "id": 1377089,
            "brand_name": "TOYOTA",
            "part_number": "8416516020",
            "description_english": "KAKUSHU SWITCH",
            "weight_physical": "0.028",
            "weight_volumetric": "0.009",
            "qty": 1,
            "warehouse": "canada",
            "price": "32.1",
            "unique_hash": "CA_b63eaf5221fc211102e76a7ab6d14232",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:211;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:467507;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:32.1;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8416516020\";s:18:\"DescriptionEnglish\";s:14:\"KAKUSHU SWITCH\";s:16:\"description_full\";N;s:7:\"row_num\";i:854;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:467507;s:10:\"PartNumber\";i:8416516020;s:18:\"DescriptionEnglish\";s:14:\"KAKUSHU SWITCH\";s:14:\"WeightPhysical\";d:0.028;s:16:\"WeightVolumetric\";d:0.009;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8416516020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8416516020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        },
        {
            "id": 1377088,
            "brand_name": "TOYOTA",
            "part_number": "8446060020",
            "description_english": "SWITCH ASSY LEVEL",
            "weight_physical": "0.062",
            "weight_volumetric": "0.045",
            "qty": 1,
            "warehouse": "canada",
            "price": "68.86",
            "unique_hash": "CA_9dfcbefb2e297a3421dc10bdd9451a56",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:213;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:471276;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:5:\"B4-LB\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:68.86;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8446060020\";s:18:\"DescriptionEnglish\";s:17:\"SWITCH ASSY LEVEL\";s:16:\"description_full\";N;s:7:\"row_num\";i:853;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:471276;s:10:\"PartNumber\";i:8446060020;s:18:\"DescriptionEnglish\";s:17:\"SWITCH ASSY LEVEL\";s:14:\"WeightPhysical\";d:0.062;s:16:\"WeightVolumetric\";d:0.045;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8446060020\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8446060020",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B4-LB",
            "bundle_pivot": []
        },
        {
            "id": 1377087,
            "brand_name": "TOYOTA",
            "part_number": "8456060030",
            "description_english": "SWTICH ASSY FUEL",
            "weight_physical": "0.028",
            "weight_volumetric": "0.01",
            "qty": 1,
            "warehouse": "canada",
            "price": "50.08",
            "unique_hash": "CA_31312bd59a2af4df277e410233c27597",
            "part_fits": null,
            "description_full": null,
            "color": null,
            "image": null,
            "is_bundle": 0,
            "subst_for": 0,
            "modified_by": null,
            "notes": "a:17:{s:2:\"id\";i:214;s:10:\"Stock_date\";s:10:\"2018-07-12\";s:26:\"diff_stock_date_with_today\";i:417;s:7:\"Part_id\";i:471916;s:9:\"Stock_Qty\";i:1;s:8:\"Location\";s:6:\"B2-017\";s:9:\"Condition\";s:0:\"\";s:5:\"Price\";d:50.08;s:7:\"BrandId\";i:145;s:10:\"PartNumber\";s:10:\"8456060030\";s:18:\"DescriptionEnglish\";s:16:\"SWTICH ASSY FUEL\";s:16:\"description_full\";N;s:7:\"row_num\";i:852;s:8:\"StockQty\";i:1;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}s:4:\"part\";a:12:{s:2:\"Id\";i:471916;s:10:\"PartNumber\";i:8456060030;s:18:\"DescriptionEnglish\";s:16:\"SWTICH ASSY FUEL\";s:14:\"WeightPhysical\";d:0.028;s:16:\"WeightVolumetric\";d:0.01;s:7:\"BrandId\";i:145;s:15:\"ClearPartNumber\";s:10:\"8456060030\";s:14:\"MainPartNumber\";N;s:18:\"Substitute_part_id\";N;s:8:\"IsBundle\";i:0;s:16:\"description_full\";N;s:5:\"brand\";a:2:{s:2:\"id\";i:145;s:9:\"BrandName\";s:6:\"TOYOTA\";}}s:5:\"stats\";N;}",
            "bundle_id": 0,
            "bundle_qty": 0,
            "created_at": "2019-08-27 13:05:25",
            "updated_at": "2019-09-02 05:50:38",
            "categories": null,
            "tags": null,
            "min_price": null,
            "max_price": null,
            "part_number_without_too_much": "8456060030",
            "min_stock": null,
            "is_stock_ca": 1,
            "location": "B2-017",
            "bundle_pivot": []
        }
    ],
    "first_page_url": "http:\/\/localhost\/api\/parts?page=1",
    "from": 1,
    "last_page": 1830,
    "last_page_url": "http:\/\/localhost\/api\/parts?page=1830",
    "next_page_url": "http:\/\/localhost\/api\/parts?page=2",
    "path": "http:\/\/localhost\/api\/parts",
    "per_page": 100,
    "prev_page_url": null,
    "to": 100,
    "total": 182918
}
```

### HTTP Request
`GET api/parts`


<!-- END_3e4e232fd3fc34b8490c4acea01edbcd -->

<!-- START_cc50b266660e94bf8b12f2587ade4932 -->
## api/stock-ca-parts
> Example request:

```bash
curl -X GET -G "http://localhost/api/stock-ca-parts" 
```

```javascript
const url = new URL("http://localhost/api/stock-ca-parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET api/stock-ca-parts`


<!-- END_cc50b266660e94bf8b12f2587ade4932 -->

<!-- START_ed47cb76a36c80d19ba60485d5bdeb1f -->
## api/rand-parts
> Example request:

```bash
curl -X GET -G "http://localhost/api/rand-parts" 
```

```javascript
const url = new URL("http://localhost/api/rand-parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[
    {
        "id": 1100023,
        "brand_name": "TOYOTA",
        "part_number": "1716766040",
        "description_english": "INSULATOR MANIFOLD",
        "weight_physical": "0.66",
        "weight_volumetric": "1.575",
        "qty": 4,
        "warehouse": "E 1 d.",
        "price": "55.643326297",
        "unique_hash": "0c7f6d8c3b82c79f5119eb9e37e29440",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100217,
        "brand_name": "TOYOTA",
        "part_number": "1717335120",
        "description_english": "MANIFOLD GASKET",
        "weight_physical": "0.122",
        "weight_volumetric": "0.34",
        "qty": 10,
        "warehouse": "O 1 d.",
        "price": "24.429985099",
        "unique_hash": "4c5fc9ea90233078049c495b498c1975",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100240,
        "brand_name": "TOYOTA",
        "part_number": "1717350021",
        "description_english": "MANIFOLD GASKET",
        "weight_physical": "0.105",
        "weight_volumetric": "0.02",
        "qty": 32,
        "warehouse": "E2 1 d.",
        "price": "17.29814515",
        "unique_hash": "49e0a938df52397a9dd54cff6f47603e",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100462,
        "brand_name": "TOYOTA",
        "part_number": "1719850010",
        "description_english": "GASKET EXHAUST",
        "weight_physical": "0.262",
        "weight_volumetric": "0.448",
        "qty": 69,
        "warehouse": "E 1 d.",
        "price": "17.924405005",
        "unique_hash": "7e3d3cb99e813249b400a7cb7c4f9cc3",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100592,
        "brand_name": "TOYOTA",
        "part_number": "173140W031",
        "description_english": "BRACKET AIR PUMP",
        "weight_physical": "0.414",
        "weight_volumetric": "0.546",
        "qty": 1,
        "warehouse": "E 1 d.",
        "price": "39.278672992",
        "unique_hash": "6b9b7e9a39f49d7a990de4d480223ac0",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100614,
        "brand_name": "TOYOTA",
        "part_number": "1734130060",
        "description_english": "HOSE AIR NO1",
        "weight_physical": "0.106",
        "weight_volumetric": "0.061",
        "qty": 40,
        "warehouse": "O 1 d.",
        "price": "12.986624768",
        "unique_hash": "008507273b6175b1d58060ae517939f5",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100751,
        "brand_name": "TOYOTA",
        "part_number": "1740135120",
        "description_english": "EXHAUST PIPE",
        "weight_physical": "2.9",
        "weight_volumetric": "3.876",
        "qty": 1,
        "warehouse": "O 1 d.",
        "price": "141.087616384",
        "unique_hash": "5931fc14da49cfbfafe2025f6526b57d",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100781,
        "brand_name": "TOYOTA",
        "part_number": "1740175180",
        "description_english": "PIPE ASSY EXHAUST",
        "weight_physical": "6.2",
        "weight_volumetric": "26.999",
        "qty": 1,
        "warehouse": "O 1 d.",
        "price": "209.960548993",
        "unique_hash": "a1675fe598bc4cea69c946d75e09aa62",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100911,
        "brand_name": "TOYOTA",
        "part_number": "1740538041",
        "description_english": "PIPE SUBASSY",
        "weight_physical": "0",
        "weight_volumetric": "0",
        "qty": 2,
        "warehouse": "E 1 d.",
        "price": "372.230146184",
        "unique_hash": "130459dfabbd4d5929e16e0b3470ce47",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100913,
        "brand_name": "TOYOTA",
        "part_number": "1740550030",
        "description_english": "PIPE ASSY EXHAUST TAIL",
        "weight_physical": "7.125",
        "weight_volumetric": "35.1",
        "qty": 8,
        "warehouse": "O 1 d.",
        "price": "227.98406631",
        "unique_hash": "b86a089611ee0f2168060f605b4804d5",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100942,
        "brand_name": "TOYOTA",
        "part_number": "1740575170",
        "description_english": "MUFFLER",
        "weight_physical": "8.5",
        "weight_volumetric": "7.706",
        "qty": 3,
        "warehouse": "O 1 d.",
        "price": "201.387981093",
        "unique_hash": "2d33a53f511ef6d98dba9581a8843244",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    },
    {
        "id": 1100996,
        "brand_name": "TOYOTA",
        "part_number": "174100P120",
        "description_english": "PIPE ASSY EXHAUST FR",
        "weight_physical": "6.59",
        "weight_volumetric": "5.158",
        "qty": 2,
        "warehouse": "O 1 d.",
        "price": "656.404247265",
        "unique_hash": "ae597acf14c9f7faa4c73191b39736de",
        "part_fits": null,
        "description_full": null,
        "color": null,
        "image": null,
        "is_bundle": 0,
        "subst_for": 0,
        "modified_by": null,
        "notes": null,
        "bundle_id": 0,
        "bundle_qty": 0,
        "created_at": null,
        "updated_at": null,
        "categories": null,
        "tags": null,
        "min_price": null,
        "max_price": null,
        "part_number_without_too_much": null,
        "min_stock": null,
        "is_stock_ca": 0,
        "location": null,
        "bundle_pivot": []
    }
]
```

### HTTP Request
`GET api/rand-parts`


<!-- END_ed47cb76a36c80d19ba60485d5bdeb1f -->

<!-- START_63f8a2c44de29b95bc5e1749681d7176 -->
## api/refresh-shopping-cart
> Example request:

```bash
curl -X POST "http://localhost/api/refresh-shopping-cart" 
```

```javascript
const url = new URL("http://localhost/api/refresh-shopping-cart");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/refresh-shopping-cart`


<!-- END_63f8a2c44de29b95bc5e1749681d7176 -->

<!-- START_f915518bef2448bd0f87b0372c39ec01 -->
## api/shipping-rates
> Example request:

```bash
curl -X POST "http://localhost/api/shipping-rates" 
```

```javascript
const url = new URL("http://localhost/api/shipping-rates");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/shipping-rates`


<!-- END_f915518bef2448bd0f87b0372c39ec01 -->

<!-- START_f9301c03a9281c0847565f96e6f723de -->
## api/orders
> Example request:

```bash
curl -X GET -G "http://localhost/api/orders" 
```

```javascript
const url = new URL("http://localhost/api/orders");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[
    {
        "id": 1,
        "order": {
            "user": {
                "country": "CA",
                "postal_code": "S0J 0E0",
                "email": "yarik@gmail.com",
                "first_name": "234",
                "last_name": "234",
                "street_address": "324",
                "street_address_two": "234",
                "city": "234",
                "state": "23",
                "phone": "342342",
                "create_ac": false,
                "same_address": false,
                "shipping": {
                    "max_delivery_date": "20 August 2019",
                    "total_price": "14.14",
                    "min_delivery_date": "20 August 2019",
                    "service_name": "Purolator Express",
                    "service_code": "2002",
                    "currency": "CAD",
                    "value": "14.14",
                    "select": true,
                    "index": 0,
                    "url": "\/_nuxt\/assets\/shipping\/purolator.png"
                }
            },
            "amount": "14.9",
            "data": [
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1711517010",
                    "part_number": "1711517010",
                    "warehouse": "canada",
                    "price": "0.76",
                    "description_english": "GASKETINTAKE PIPE",
                    "unique_hash": "CA_17c8f6a9db8cad0074ee618b2fd0b067",
                    "client_column_two": "15671514760"
                }
            ]
        },
        "created_at": "2019-08-30 07:51:16",
        "updated_at": "2019-08-30 07:51:16",
        "attachments": []
    },
    {
        "id": 2,
        "order": {
            "user": {
                "country": "CA",
                "postal_code": "S0J 0E0",
                "email": "gg@com.rt",
                "street_address": "3",
                "first_name": "345",
                "last_name": "345",
                "street_address_two": "345",
                "city": "345",
                "state": "345",
                "phone": "345",
                "create_ac": false,
                "same_address": false,
                "shipping": {
                    "max_delivery_date": "20 August 2019",
                    "total_price": "14.14",
                    "min_delivery_date": "20 August 2019",
                    "service_name": "Purolator Express",
                    "service_code": "2002",
                    "currency": "CAD",
                    "value": "14.14",
                    "select": true,
                    "index": 0,
                    "url": "\/_nuxt\/assets\/shipping\/purolator.png"
                }
            },
            "amount": "47.122879364",
            "data": [
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1711517010",
                    "part_number": "1711517010",
                    "warehouse": "canada",
                    "price": "0.76",
                    "description_english": "GASKETINTAKE PIPE",
                    "unique_hash": "CA_17c8f6a9db8cad0074ee618b2fd0b067",
                    "client_column_two": "15671522030"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "O 1 d.",
                    "price": "16.340293138",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "8a86ccd84346f480ce1d6145deb1ec9f",
                    "client_column_two": "15671522031"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "E 1 d.",
                    "price": "15.882586226",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "203a7f1c02ef9877186a6ed92b85a14f",
                    "client_column_two": "15671522032"
                }
            ]
        },
        "created_at": "2019-08-30 08:03:23",
        "updated_at": "2019-08-30 08:03:23",
        "attachments": []
    },
    {
        "id": 3,
        "order": {
            "user": {
                "id": 11,
                "email": "yasya@gmail.com",
                "email_verified_at": null,
                "created_at": "2019-08-30 12:24:29",
                "updated_at": "2019-08-30 12:24:29",
                "first_name": "2363796z",
                "last_name": "2363796z",
                "ihmud_username": null,
                "street_address": "2363796z",
                "street_address_two": "2363796z",
                "city": "2363796z",
                "state": "2363796z",
                "postal_code": "S0J 0E0",
                "country": "CA",
                "phone": "2363796z",
                "frame_number": null,
                "date_of_production": null,
                "original_country": null,
                "search_history": null,
                "subscribed_for_news": 0,
                "create_ac": true,
                "same_address": false,
                "shipping": {
                    "max_delivery_date": "20 August 2019",
                    "total_price": "14.14",
                    "min_delivery_date": "20 August 2019",
                    "service_name": "Purolator Express",
                    "service_code": "2002",
                    "currency": "CAD",
                    "value": "14.14",
                    "select": true,
                    "index": 0,
                    "url": "\/_nuxt\/assets\/shipping\/purolator.png"
                }
            },
            "amount": "47.122879364",
            "data": [
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1711517010",
                    "part_number": "1711517010",
                    "warehouse": "canada",
                    "price": "0.76",
                    "description_english": "GASKETINTAKE PIPE",
                    "unique_hash": "CA_17c8f6a9db8cad0074ee618b2fd0b067",
                    "client_column_two": "15671679440"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "O 1 d.",
                    "price": "16.340293138",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "8a86ccd84346f480ce1d6145deb1ec9f",
                    "client_column_two": "15671679441"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "E 1 d.",
                    "price": "15.882586226",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "203a7f1c02ef9877186a6ed92b85a14f",
                    "client_column_two": "15671679442"
                }
            ]
        },
        "created_at": "2019-08-30 12:25:44",
        "updated_at": "2019-08-30 12:25:44",
        "attachments": []
    },
    {
        "id": 4,
        "order": {
            "user": {
                "id": 12,
                "email": "gg1@com.rt",
                "email_verified_at": null,
                "created_at": "2019-08-30 15:04:19",
                "updated_at": "2019-08-30 15:04:19",
                "first_name": "gg1@com.rt",
                "last_name": "gg1@com.rt",
                "ihmud_username": null,
                "street_address": "345",
                "street_address_two": "354",
                "city": "345",
                "state": "345",
                "postal_code": "S0J 0E0",
                "country": "CA",
                "phone": "345345",
                "frame_number": null,
                "date_of_production": null,
                "original_country": null,
                "search_history": null,
                "subscribed_for_news": 0,
                "create_ac": false,
                "same_address": false,
                "shipping": {
                    "max_delivery_date": "20 August 2019",
                    "total_price": "14.14",
                    "min_delivery_date": "20 August 2019",
                    "service_name": "Purolator Express",
                    "service_code": "2002",
                    "currency": "CAD",
                    "value": "14.14",
                    "select": true,
                    "index": 0,
                    "url": "\/_nuxt\/assets\/shipping\/purolator.png"
                }
            },
            "amount": "47.122879364",
            "data": [
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1711517010",
                    "part_number": "1711517010",
                    "warehouse": "canada",
                    "price": "0.76",
                    "description_english": "GASKETINTAKE PIPE",
                    "unique_hash": "CA_17c8f6a9db8cad0074ee618b2fd0b067",
                    "client_column_two": "15671775280"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "O 1 d.",
                    "price": "16.340293138",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "8a86ccd84346f480ce1d6145deb1ec9f",
                    "client_column_two": "15671775281"
                },
                {
                    "count": 1,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "1540717011",
                    "part_number": "1540717011",
                    "warehouse": "E 1 d.",
                    "price": "15.882586226",
                    "description_english": "PIPE SUBASSY TURBO",
                    "unique_hash": "203a7f1c02ef9877186a6ed92b85a14f",
                    "client_column_two": "15671775282"
                }
            ]
        },
        "created_at": "2019-08-30 15:05:28",
        "updated_at": "2019-08-30 15:05:28",
        "attachments": []
    },
    {
        "id": 5,
        "order": {
            "user": {
                "country": "ZA",
                "postal_code": "7405",
                "email": "thenickraper@gmail.com",
                "first_name": "Nick",
                "last_name": "Raper",
                "street_address": "Kibo Connect, Unti F3, Sunrise Park",
                "street_address_two": "1 Prestige Drive, Ndabeni",
                "city": "Cape Town",
                "state": "Western Cape",
                "phone": "+27827770855",
                "create_ac": true,
                "same_address": true,
                "shipping": {
                    "max_delivery_date": "Mon Sep 09 00:00:00 EDT 2019",
                    "total_price": "54.34",
                    "min_delivery_date": "Mon Sep 09 00:00:00 EDT 2019",
                    "service_name": "DHL Express Worldwide",
                    "service_code": "301",
                    "currency": "CAD",
                    "value": "54.34",
                    "select": true,
                    "index": 0,
                    "url": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAARCAYAAABjEtTjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgB7ZdLSwJRFMfP+Gg0J82SsCAI0fa1Ddrnpk24z9bROmhrtA3aKq2ltvYBWgbtK4ggSgnFfOT70fxHRtS5M3Nnq\/426px77j3vOwr9J6FPM4KNZoi5s9OKg2dRO2ujz1Ov8smLK9Kl1XidpP3W8Fnt2aHsM0no7pec6z0qpkX6ufaMyZzBLm3eVIY2TIIzAid14oHL+nzKbclR0Hiz09e5RL2qoPyGfu5S0qyDsXAU8nxqUSOHI3apz9RFIHgdBaaZhdGY176DptlSqjw6ZefGg9J4tdPibocZsFFjkbVeRRiT+6JN8kZblE14mMFGxq1g6izKMXjxp3wvZUTNoZCjVBGU0oNIk87AUeiVM6Jm73bOTi97K8xzoYus6+mqFWEFrp5VDEMZJjya5+g3MCkb7bWCnFWrqAFm6bp32pbKV0Xgfal4P1rWZNUfa9DaWc1QDzrtnLV+t8k9iorR03WFu2Rbsv4uJGQPJUMtcXtwaDHtIl6Q1dB9SSlBvYyjBJG1fNKtkW\/dluX+X2BWktGZ2Bet1PlmB9dhFHUx0iEx3JGvAy\/x4pLXb1xVdcsX5TecvkmtHAYja1aCC1Bh0GnKs0MPhzPIbnIcGIg36OPYRzygjzCMAvFBL7EmqDpdgd6dqQ4df6xOBTkYGGJmoJ1wxWGa6\/kDhPkfgSll7uy08g+Xg\/Mg1cNZ5AAAAABJRU5ErkJggg=="
                }
            },
            "amount": "152.48000000000002",
            "data": [
                {
                    "count": 2,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "4806160010",
                    "part_number": "4806160010",
                    "warehouse": "canada",
                    "price": "14.11",
                    "description_english": "BUSH SUBASSY",
                    "unique_hash": "CA_e98512f1d82bdfc65aa9a4d708b59033",
                    "client_column_two": "15674330310"
                },
                {
                    "count": 4,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "4870260040",
                    "part_number": "4870260040",
                    "warehouse": "canada",
                    "price": "15.63",
                    "description_english": "BUSH SUBASSY",
                    "unique_hash": "CA_c0e6416693b381ade76b3da58a2eb098",
                    "client_column_two": "15674330311"
                },
                {
                    "count": 4,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "9017018007",
                    "part_number": "9017018007",
                    "warehouse": "canada",
                    "price": "0.53",
                    "description_english": "NUT",
                    "unique_hash": "CA_396cc5102d6bd68f5b02323bde6dc4aa",
                    "client_column_two": "15674330312"
                },
                {
                    "count": 2,
                    "brand_name": "TOYOTA",
                    "part_number_without_too_much": "9010518006",
                    "part_number": "9010518006",
                    "warehouse": "canada",
                    "price": "2.64",
                    "description_english": "BOLT",
                    "unique_hash": "CA_db3759001ef12a67948fbc08b4359b65",
                    "client_column_two": "15674330313"
                }
            ]
        },
        "created_at": "2019-09-02 14:03:51",
        "updated_at": "2019-09-02 14:03:51",
        "attachments": []
    }
]
```

### HTTP Request
`GET api/orders`


<!-- END_f9301c03a9281c0847565f96e6f723de -->

<!-- START_844a152ffb65b47ab7c19e0ded544725 -->
## api/stock-ca
> Example request:

```bash
curl -X GET -G "http://localhost/api/stock-ca" 
```

```javascript
const url = new URL("http://localhost/api/stock-ca");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET api/stock-ca`


<!-- END_844a152ffb65b47ab7c19e0ded544725 -->

<!-- START_316a4c3b4f6a4c4ff34e5893943cdebd -->
## api/countries
> Example request:

```bash
curl -X GET -G "http://localhost/api/countries" 
```

```javascript
const url = new URL("http://localhost/api/countries");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[
    {
        "id": 1,
        "name_ru": "Австралия",
        "name_en": "Australia",
        "code": "AU"
    },
    {
        "id": 2,
        "name_ru": "Малайзия",
        "name_en": "Malaysia",
        "code": "MY"
    },
    {
        "id": 3,
        "name_ru": "Республика Корея",
        "name_en": "Korea",
        "code": "KR"
    },
    {
        "id": 4,
        "name_ru": "Китай",
        "name_en": "China",
        "code": "CN"
    },
    {
        "id": 5,
        "name_ru": "Япония",
        "name_en": "Japan",
        "code": "JP"
    },
    {
        "id": 6,
        "name_ru": "Индия",
        "name_en": "India",
        "code": "IN"
    },
    {
        "id": 7,
        "name_ru": "Тайвань",
        "name_en": "Taiwan",
        "code": "TW"
    },
    {
        "id": 8,
        "name_ru": "Гонконг",
        "name_en": "Hong Kong",
        "code": "HK"
    },
    {
        "id": 9,
        "name_ru": "Таиланд",
        "name_en": "Thailand",
        "code": "TH"
    },
    {
        "id": 11,
        "name_ru": "Вьетнам",
        "name_en": "Vietnam",
        "code": "VN"
    },
    {
        "id": 12,
        "name_ru": "Франция",
        "name_en": "France",
        "code": "FR"
    },
    {
        "id": 13,
        "name_ru": "Италия",
        "name_en": "Italy",
        "code": "IT"
    },
    {
        "id": 14,
        "name_ru": "Объединенные Арабские Эмираты",
        "name_en": "United Arab Emirates",
        "code": "AE"
    },
    {
        "id": 15,
        "name_ru": "Швеция",
        "name_en": "Sweden",
        "code": "SE"
    },
    {
        "id": 16,
        "name_ru": "Казахстан",
        "name_en": "Kazakhstan",
        "code": "KZ"
    },
    {
        "id": 17,
        "name_ru": "Португалия",
        "name_en": "Portugal",
        "code": "PT"
    },
    {
        "id": 18,
        "name_ru": "Греция",
        "name_en": "Greece",
        "code": "GR"
    },
    {
        "id": 19,
        "name_ru": "Саудовская Аравия",
        "name_en": "Saudi Arabia",
        "code": "SA"
    },
    {
        "id": 20,
        "name_ru": "Российская Федерация",
        "name_en": "Russian Federation",
        "code": "RU"
    },
    {
        "id": 21,
        "name_ru": "Великобритания",
        "name_en": "United Kingdom",
        "code": "GB"
    },
    {
        "id": 22,
        "name_ru": "Дания",
        "name_en": "Denmark",
        "code": "DK"
    },
    {
        "id": 23,
        "name_ru": "США",
        "name_en": "United States",
        "code": "US"
    },
    {
        "id": 24,
        "name_ru": "Канада",
        "name_en": "Canada",
        "code": "CA"
    },
    {
        "id": 25,
        "name_ru": "Мексика",
        "name_en": "Mexico",
        "code": "MX"
    },
    {
        "id": 26,
        "name_ru": "Бермуды",
        "name_en": "Bermuda",
        "code": "BM"
    },
    {
        "id": 27,
        "name_ru": "Пуэрто Рико",
        "name_en": "Puerto Rico",
        "code": "PR"
    },
    {
        "id": 28,
        "name_ru": "Виргинские Острова США",
        "name_en": "Virgin Islands, U.S.",
        "code": "VI"
    },
    {
        "id": 29,
        "name_ru": "Германия",
        "name_en": "Germany",
        "code": "DE"
    },
    {
        "id": 30,
        "name_ru": "Иран",
        "name_en": "Iran",
        "code": "IR"
    },
    {
        "id": 31,
        "name_ru": "Боливия",
        "name_en": "Bolivia",
        "code": "BO"
    },
    {
        "id": 32,
        "name_ru": "Монтсеррат",
        "name_en": "Montserrat",
        "code": "MS"
    },
    {
        "id": 33,
        "name_ru": "Нидерланды",
        "name_en": "Netherlands",
        "code": "NL"
    },
    {
        "id": 34,
        "name_ru": "Израиль",
        "name_en": "Israel",
        "code": "IL"
    },
    {
        "id": 35,
        "name_ru": "Испания",
        "name_en": "Spain",
        "code": "ES"
    },
    {
        "id": 36,
        "name_ru": "Багамские острова",
        "name_en": "Bahamas",
        "code": "BS"
    },
    {
        "id": 37,
        "name_ru": "Сент-Винсент и Гренадины",
        "name_en": "Saint Vincent and the Grenadines",
        "code": "VC"
    },
    {
        "id": 38,
        "name_ru": "Чили",
        "name_en": "Chile",
        "code": "CL"
    },
    {
        "id": 39,
        "name_ru": "Новая Каледония",
        "name_en": "New Caledonia",
        "code": "NC"
    },
    {
        "id": 40,
        "name_ru": "Аргентина",
        "name_en": "Argentina",
        "code": "AR"
    },
    {
        "id": 41,
        "name_ru": "Доминика",
        "name_en": "Dominica",
        "code": "DM"
    },
    {
        "id": 42,
        "name_ru": "Сингапур",
        "name_en": "Singapore",
        "code": "SG"
    },
    {
        "id": 43,
        "name_ru": "Непал",
        "name_en": "Nepal",
        "code": "NP"
    },
    {
        "id": 44,
        "name_ru": "Филиппины",
        "name_en": "Philippines",
        "code": "PH"
    },
    {
        "id": 45,
        "name_ru": "Индонезия",
        "name_en": "Indonesia",
        "code": "ID"
    },
    {
        "id": 46,
        "name_ru": "Пакистан",
        "name_en": "Pakistan",
        "code": "PK"
    },
    {
        "id": 47,
        "name_ru": "Токелау",
        "name_en": "Tokelau",
        "code": "TK"
    },
    {
        "id": 48,
        "name_ru": "Новая Зеландия",
        "name_en": "New Zealand",
        "code": "NZ"
    },
    {
        "id": 49,
        "name_ru": "Камбоджа",
        "name_en": "Cambodia",
        "code": "KH"
    },
    {
        "id": 50,
        "name_ru": "Макау",
        "name_en": "Macau",
        "code": "MO"
    },
    {
        "id": 51,
        "name_ru": "Папуа Новая Гвинея",
        "name_en": "Papua New Guinea",
        "code": "PG"
    },
    {
        "id": 52,
        "name_ru": "Мальдивские острова",
        "name_en": "Maldives",
        "code": "MV"
    },
    {
        "id": 53,
        "name_ru": "Афганистан",
        "name_en": "Afghanistan",
        "code": "AF"
    },
    {
        "id": 54,
        "name_ru": "Бангладеш",
        "name_en": "Bangladesh",
        "code": "BD"
    },
    {
        "id": 55,
        "name_ru": "Ирландия",
        "name_en": "Ireland",
        "code": "IE"
    },
    {
        "id": 56,
        "name_ru": "Бельгия",
        "name_en": "Belgium",
        "code": "BE"
    },
    {
        "id": 57,
        "name_ru": "Белиз",
        "name_en": "Belize",
        "code": "BZ"
    },
    {
        "id": 58,
        "name_ru": "Бразилия",
        "name_en": "Brazil",
        "code": "BR"
    },
    {
        "id": 59,
        "name_ru": "Швейцария",
        "name_en": "Switzerland",
        "code": "CH"
    },
    {
        "id": 60,
        "name_ru": "Южно-Африканская Республика",
        "name_en": "South Africa",
        "code": "ZA"
    },
    {
        "id": 61,
        "name_ru": "Египет",
        "name_en": "Egypt",
        "code": "EG"
    },
    {
        "id": 62,
        "name_ru": "Нигерия",
        "name_en": "Nigeria",
        "code": "NG"
    },
    {
        "id": 63,
        "name_ru": "Танзания",
        "name_en": "Tanzania",
        "code": "TZ"
    },
    {
        "id": 64,
        "name_ru": "Замбия",
        "name_en": "Zambia",
        "code": "ZM"
    },
    {
        "id": 65,
        "name_ru": "Сенегал",
        "name_en": "Senegal",
        "code": "SN"
    },
    {
        "id": 66,
        "name_ru": "Гана",
        "name_en": "Ghana",
        "code": "GH"
    },
    {
        "id": 67,
        "name_ru": "Судан",
        "name_en": "Sudan",
        "code": "SD"
    },
    {
        "id": 68,
        "name_ru": "Камерун",
        "name_en": "Cameroon",
        "code": "CM"
    },
    {
        "id": 69,
        "name_ru": "Малави",
        "name_en": "Malawi",
        "code": "MW"
    },
    {
        "id": 70,
        "name_ru": "Ангола",
        "name_en": "Angola",
        "code": "AO"
    },
    {
        "id": 71,
        "name_ru": "Кения",
        "name_en": "Kenya",
        "code": "KE"
    },
    {
        "id": 72,
        "name_ru": "Габон",
        "name_en": "Gabon",
        "code": "GA"
    },
    {
        "id": 73,
        "name_ru": "Мали",
        "name_en": "Mali",
        "code": "ML"
    },
    {
        "id": 74,
        "name_ru": "Бенин",
        "name_en": "Benin",
        "code": "BJ"
    },
    {
        "id": 75,
        "name_ru": "Мадагаскар",
        "name_en": "Madagascar",
        "code": "MG"
    },
    {
        "id": 76,
        "name_ru": "Чад",
        "name_en": "Chad",
        "code": "TD"
    },
    {
        "id": 77,
        "name_ru": "Ботсвана",
        "name_en": "Botswana",
        "code": "BW"
    },
    {
        "id": 78,
        "name_ru": "Ливия",
        "name_en": "Libya",
        "code": "LY"
    },
    {
        "id": 79,
        "name_ru": "Кабо-Верде",
        "name_en": "Cape Verde",
        "code": "CV"
    },
    {
        "id": 80,
        "name_ru": "Руанда",
        "name_en": "Rwanda",
        "code": "RW"
    },
    {
        "id": 81,
        "name_ru": "Мозамбик",
        "name_en": "Mozambique",
        "code": "MZ"
    },
    {
        "id": 82,
        "name_ru": "Гамбия",
        "name_en": "Gambia",
        "code": "GM"
    },
    {
        "id": 83,
        "name_ru": "Лесото",
        "name_en": "Lesotho",
        "code": "LS"
    },
    {
        "id": 84,
        "name_ru": "Маврикий",
        "name_en": "Mauritius",
        "code": "MU"
    },
    {
        "id": 85,
        "name_ru": "Конго",
        "name_en": "Congo",
        "code": "CG"
    },
    {
        "id": 86,
        "name_ru": "Уганда",
        "name_en": "Uganda",
        "code": "UG"
    },
    {
        "id": 87,
        "name_ru": "Буркина Фасо",
        "name_en": "Burkina Faso",
        "code": "BF"
    },
    {
        "id": 88,
        "name_ru": "Сьерра-Леоне",
        "name_en": "Sierra Leone",
        "code": "SL"
    },
    {
        "id": 89,
        "name_ru": "Сомали",
        "name_en": "Somalia",
        "code": "SO"
    },
    {
        "id": 90,
        "name_ru": "Зимбабве",
        "name_en": "Zimbabwe",
        "code": "ZW"
    },
    {
        "id": 91,
        "name_ru": "Демократическая Республика Конго",
        "name_en": "Democratic Republic Of The Congo",
        "code": "CD"
    },
    {
        "id": 92,
        "name_ru": "Нигер",
        "name_en": "Niger",
        "code": "NE"
    },
    {
        "id": 93,
        "name_ru": "Центрально-Африканская Республика",
        "name_en": "Central African Republic",
        "code": "CF"
    },
    {
        "id": 94,
        "name_ru": "Свазиленд",
        "name_en": "Swaziland",
        "code": "SZ"
    },
    {
        "id": 95,
        "name_ru": "Того",
        "name_en": "Togo",
        "code": "TG"
    },
    {
        "id": 96,
        "name_ru": "Гвинея",
        "name_en": "Guinea",
        "code": "GN"
    },
    {
        "id": 97,
        "name_ru": "Либерия",
        "name_en": "Liberia",
        "code": "LR"
    },
    {
        "id": 98,
        "name_ru": "Сейшеллы",
        "name_en": "Seychelles",
        "code": "SC"
    },
    {
        "id": 99,
        "name_ru": "Марокко",
        "name_en": "Morocco",
        "code": "MA"
    },
    {
        "id": 100,
        "name_ru": "Алжир",
        "name_en": "Algeria",
        "code": "DZ"
    },
    {
        "id": 101,
        "name_ru": "Мавритания",
        "name_en": "Mauritania",
        "code": "MR"
    },
    {
        "id": 102,
        "name_ru": "Намибия",
        "name_en": "Namibia",
        "code": "NA"
    },
    {
        "id": 103,
        "name_ru": "Джибути",
        "name_en": "Djibouti",
        "code": "DJ"
    },
    {
        "id": 105,
        "name_ru": "Коморские острова",
        "name_en": "Comoros",
        "code": "KM"
    },
    {
        "id": 106,
        "name_ru": "Реюньон",
        "name_en": "Reunion",
        "code": "RE"
    },
    {
        "id": 107,
        "name_ru": "Экваториальная Гвинея",
        "name_en": "Equatorial Guinea",
        "code": "GQ"
    },
    {
        "id": 108,
        "name_ru": "Тунис",
        "name_en": "Tunisia",
        "code": "TN"
    },
    {
        "id": 109,
        "name_ru": "Турция",
        "name_en": "Turkey",
        "code": "TR"
    },
    {
        "id": 110,
        "name_ru": "Польша",
        "name_en": "Poland",
        "code": "PL"
    },
    {
        "id": 111,
        "name_ru": "Латвия",
        "name_en": "Latvia",
        "code": "LV"
    },
    {
        "id": 112,
        "name_ru": "Украина",
        "name_en": "Ukraine",
        "code": "UA"
    },
    {
        "id": 113,
        "name_ru": "Беларусь",
        "name_en": "Belarus",
        "code": "BY"
    },
    {
        "id": 114,
        "name_ru": "Чехия",
        "name_en": "Czech Republic",
        "code": "CZ"
    },
    {
        "id": 115,
        "name_ru": "Палестина",
        "name_en": "Palestinian Territory",
        "code": "PS"
    },
    {
        "id": 116,
        "name_ru": "Исландия",
        "name_en": "Iceland",
        "code": "IS"
    },
    {
        "id": 117,
        "name_ru": "Кипр",
        "name_en": "Cyprus",
        "code": "CY"
    },
    {
        "id": 118,
        "name_ru": "Венгрия",
        "name_en": "Hungary",
        "code": "HU"
    },
    {
        "id": 119,
        "name_ru": "Словакия",
        "name_en": "Slovakia",
        "code": "SK"
    },
    {
        "id": 120,
        "name_ru": "Сербия",
        "name_en": "Serbia",
        "code": "RS"
    },
    {
        "id": 121,
        "name_ru": "Болгария",
        "name_en": "Bulgaria",
        "code": "BG"
    },
    {
        "id": 122,
        "name_ru": "Оман",
        "name_en": "Oman",
        "code": "OM"
    },
    {
        "id": 123,
        "name_ru": "Румыния",
        "name_en": "Romania",
        "code": "RO"
    },
    {
        "id": 124,
        "name_ru": "Грузия",
        "name_en": "Georgia",
        "code": "GE"
    },
    {
        "id": 125,
        "name_ru": "Норвегия",
        "name_en": "Norway",
        "code": "NO"
    },
    {
        "id": 126,
        "name_ru": "Армения",
        "name_en": "Armenia",
        "code": "AM"
    },
    {
        "id": 127,
        "name_ru": "Австрия",
        "name_en": "Austria",
        "code": "AT"
    },
    {
        "id": 128,
        "name_ru": "Албания",
        "name_en": "Albania",
        "code": "AL"
    },
    {
        "id": 129,
        "name_ru": "Словения",
        "name_en": "Slovenia",
        "code": "SI"
    },
    {
        "id": 130,
        "name_ru": "Панама",
        "name_en": "Panama",
        "code": "PA"
    },
    {
        "id": 131,
        "name_ru": "Бруней",
        "name_en": "Brunei Darussalam",
        "code": "BN"
    },
    {
        "id": 132,
        "name_ru": "Шри-Ланка",
        "name_en": "Sri Lanka",
        "code": "LK"
    },
    {
        "id": 133,
        "name_ru": "Черногория",
        "name_en": "Montenegro",
        "code": "ME"
    },
    {
        "id": 134,
        "name_ru": "Европейский Союз",
        "name_en": "Europe",
        "code": "EU"
    },
    {
        "id": 135,
        "name_ru": "Таджикистан",
        "name_en": "Tajikistan",
        "code": "TJ"
    },
    {
        "id": 136,
        "name_ru": "Ирак",
        "name_en": "Iraq",
        "code": "IQ"
    },
    {
        "id": 137,
        "name_ru": "Ливан",
        "name_en": "Lebanon",
        "code": "LB"
    },
    {
        "id": 138,
        "name_ru": "Молдова",
        "name_en": "Moldova",
        "code": "MD"
    },
    {
        "id": 139,
        "name_ru": "Финляндия",
        "name_en": "Finland",
        "code": "FI"
    },
    {
        "id": 140,
        "name_ru": "Эстония",
        "name_en": "Estonia",
        "code": "EE"
    },
    {
        "id": 141,
        "name_ru": "Босния и Герцеговина",
        "name_en": "Bosnia and Herzegovina",
        "code": "BA"
    },
    {
        "id": 142,
        "name_ru": "Кувейт",
        "name_en": "Kuwait",
        "code": "KW"
    },
    {
        "id": 143,
        "name_ru": "Аландские острова",
        "name_en": "Aland Islands",
        "code": "AX"
    },
    {
        "id": 144,
        "name_ru": "Литва",
        "name_en": "Lithuania",
        "code": "LT"
    },
    {
        "id": 145,
        "name_ru": "Люксембург",
        "name_en": "Luxembourg",
        "code": "LU"
    },
    {
        "id": 146,
        "name_ru": "Антигуа и Барбуда",
        "name_en": "Antigua and Barbuda",
        "code": "AG"
    },
    {
        "id": 147,
        "name_ru": "Македония",
        "name_en": "Macedonia",
        "code": "MK"
    },
    {
        "id": 148,
        "name_ru": "Сан-Марино",
        "name_en": "San Marino",
        "code": "SM"
    },
    {
        "id": 149,
        "name_ru": "Мальта",
        "name_en": "Malta",
        "code": "MT"
    },
    {
        "id": 150,
        "name_ru": "Фолклендские острова",
        "name_en": "Falkland Islands",
        "code": "FK"
    },
    {
        "id": 151,
        "name_ru": "Бахрейн",
        "name_en": "Bahrain",
        "code": "BH"
    },
    {
        "id": 152,
        "name_ru": "Узбекистан",
        "name_en": "Uzbekistan",
        "code": "UZ"
    },
    {
        "id": 153,
        "name_ru": "Азербайджан",
        "name_en": "Azerbaijan",
        "code": "AZ"
    },
    {
        "id": 154,
        "name_ru": "Монако",
        "name_en": "Monaco",
        "code": "MC"
    },
    {
        "id": 155,
        "name_ru": "Гаити",
        "name_en": "Haiti",
        "code": "HT"
    },
    {
        "id": 156,
        "name_ru": "Гуам",
        "name_en": "Guam",
        "code": "GU"
    },
    {
        "id": 157,
        "name_ru": "Ямайка",
        "name_en": "Jamaica",
        "code": "JM"
    },
    {
        "id": 158,
        "name_ru": "Внешние малые острова США",
        "name_en": "United States Minor Outlying Islands",
        "code": "UM"
    },
    {
        "id": 159,
        "name_ru": "Микронезия",
        "name_en": "Micronesia",
        "code": "FM"
    },
    {
        "id": 160,
        "name_ru": "Эквадор",
        "name_en": "Ecuador",
        "code": "EC"
    },
    {
        "id": 161,
        "name_ru": "Перу",
        "name_en": "Peru",
        "code": "PE"
    },
    {
        "id": 162,
        "name_ru": "Каймановы острова",
        "name_en": "Cayman Islands",
        "code": "KY"
    },
    {
        "id": 163,
        "name_ru": "Колумбия",
        "name_en": "Colombia",
        "code": "CO"
    },
    {
        "id": 164,
        "name_ru": "Гондурас",
        "name_en": "Honduras",
        "code": "HN"
    },
    {
        "id": 165,
        "name_ru": "Антильские острова",
        "name_en": "Netherlands Antilles",
        "code": "AN"
    },
    {
        "id": 166,
        "name_ru": "Йемен",
        "name_en": "Yemen",
        "code": "YE"
    },
    {
        "id": 167,
        "name_ru": "Британские Виргинские острова",
        "name_en": "Virgin Islands, British",
        "code": "VG"
    },
    {
        "id": 168,
        "name_ru": "Сирия",
        "name_en": "Syria",
        "code": "SY"
    },
    {
        "id": 169,
        "name_ru": "Никарагуа",
        "name_en": "Nicaragua",
        "code": "NI"
    },
    {
        "id": 170,
        "name_ru": "Доминиканская республика",
        "name_en": "Dominican Republic",
        "code": "DO"
    },
    {
        "id": 171,
        "name_ru": "Гренада",
        "name_en": "Grenada",
        "code": "GD"
    },
    {
        "id": 172,
        "name_ru": "Гватемала",
        "name_en": "Guatemala",
        "code": "GT"
    },
    {
        "id": 173,
        "name_ru": "Коста-Рика",
        "name_en": "Costa Rica",
        "code": "CR"
    },
    {
        "id": 174,
        "name_ru": "Сальвадор",
        "name_en": "El Salvador",
        "code": "SV"
    },
    {
        "id": 175,
        "name_ru": "Венесуэла",
        "name_en": "Venezuela",
        "code": "VE"
    },
    {
        "id": 176,
        "name_ru": "Барбадос",
        "name_en": "Barbados",
        "code": "BB"
    },
    {
        "id": 177,
        "name_ru": "Тринидад и Тобаго",
        "name_en": "Trinidad and Tobago",
        "code": "TT"
    },
    {
        "id": 178,
        "name_ru": "Буве",
        "name_en": "Bouvet Island",
        "code": "BV"
    },
    {
        "id": 179,
        "name_ru": "Маршалловы острова",
        "name_en": "Marshall Islands",
        "code": "MH"
    },
    {
        "id": 180,
        "name_ru": "Острова Кука",
        "name_en": "Cook Islands",
        "code": "CK"
    },
    {
        "id": 181,
        "name_ru": "Гибралтар",
        "name_en": "Gibraltar",
        "code": "GI"
    },
    {
        "id": 182,
        "name_ru": "Парагвай",
        "name_en": "Paraguay",
        "code": "PY"
    },
    {
        "id": 247,
        "name_ru": "Южный Судан",
        "name_en": "South Sudan",
        "code": "SS"
    },
    {
        "id": 184,
        "name_ru": "Самоа",
        "name_en": "Samoa",
        "code": "WS"
    },
    {
        "id": 185,
        "name_ru": "Сент Китс и Невис",
        "name_en": "Saint Kitts and Nevis",
        "code": "KN"
    },
    {
        "id": 186,
        "name_ru": "Фиджи",
        "name_en": "Fiji",
        "code": "FJ"
    },
    {
        "id": 187,
        "name_ru": "Уругвай",
        "name_en": "Uruguay",
        "code": "UY"
    },
    {
        "id": 188,
        "name_ru": "Северные Марианские острова",
        "name_en": "Northern Mariana Islands",
        "code": "MP"
    },
    {
        "id": 189,
        "name_ru": "Палау",
        "name_en": "Palau",
        "code": "PW"
    },
    {
        "id": 190,
        "name_ru": "Катар",
        "name_en": "Qatar",
        "code": "QA"
    },
    {
        "id": 191,
        "name_ru": "Иордания",
        "name_en": "Jordan",
        "code": "JO"
    },
    {
        "id": 192,
        "name_ru": "Американское Самоа",
        "name_en": "American Samoa",
        "code": "AS"
    },
    {
        "id": 193,
        "name_ru": "Туркс и Кейкос",
        "name_en": "Turks and Caicos Islands",
        "code": "TC"
    },
    {
        "id": 194,
        "name_ru": "Святая Люсия",
        "name_en": "Saint Lucia",
        "code": "LC"
    },
    {
        "id": 195,
        "name_ru": "Монголия",
        "name_en": "Mongolia",
        "code": "MN"
    },
    {
        "id": 196,
        "name_ru": "Ватикан",
        "name_en": "Holy See",
        "code": "VA"
    },
    {
        "id": 197,
        "name_ru": "Арулько",
        "name_en": "Aruba",
        "code": "AW"
    },
    {
        "id": 198,
        "name_ru": "Гайана",
        "name_en": "Guyana",
        "code": "GY"
    },
    {
        "id": 199,
        "name_ru": "Суринам",
        "name_en": "Suriname",
        "code": "SR"
    },
    {
        "id": 200,
        "name_ru": "Остров Мэн",
        "name_en": "Isle of Man",
        "code": "IM"
    },
    {
        "id": 201,
        "name_ru": "Вануату",
        "name_en": "Vanuatu",
        "code": "VU"
    },
    {
        "id": 202,
        "name_ru": "Хорватия",
        "name_en": "Croatia",
        "code": "HR"
    },
    {
        "id": 203,
        "name_ru": "Ангуилья",
        "name_en": "Anguilla",
        "code": "AI"
    },
    {
        "id": 204,
        "name_ru": "Сен-Пьер и Микелон",
        "name_en": "Saint Pierre and Miquelon",
        "code": "PM"
    },
    {
        "id": 205,
        "name_ru": "Гваделупа",
        "name_en": "Guadeloupe",
        "code": "GP"
    },
    {
        "id": 206,
        "name_ru": "Сен-Мартен",
        "name_en": "Saint Martin",
        "code": "MF"
    },
    {
        "id": 207,
        "name_ru": "Гернси",
        "name_en": "Guernsey",
        "code": "GG"
    },
    {
        "id": 208,
        "name_ru": "Бурунди",
        "name_en": "Burundi",
        "code": "BI"
    },
    {
        "id": 209,
        "name_ru": "Туркменистан",
        "name_en": "Turkmenistan",
        "code": "TM"
    },
    {
        "id": 210,
        "name_ru": "Кыргызстан",
        "name_en": "Kyrgyzstan",
        "code": "KG"
    },
    {
        "id": 211,
        "name_ru": "Мьянма",
        "name_en": "Myanmar",
        "code": "MM"
    },
    {
        "id": 212,
        "name_ru": "Бутан",
        "name_en": "Bhutan",
        "code": "BT"
    },
    {
        "id": 213,
        "name_ru": "Лихтенштейн",
        "name_en": "Liechtenstein",
        "code": "LI"
    },
    {
        "id": 214,
        "name_ru": "Фарерские острова",
        "name_en": "Faroe Islands",
        "code": "FO"
    },
    {
        "id": 215,
        "name_ru": "Эфиопия",
        "name_en": "Ethiopia",
        "code": "ET"
    },
    {
        "id": 216,
        "name_ru": "Мартиника",
        "name_en": "Martinique",
        "code": "MQ"
    },
    {
        "id": 217,
        "name_ru": "Джерси",
        "name_en": "Jersey",
        "code": "JE"
    },
    {
        "id": 218,
        "name_ru": "Андорра",
        "name_en": "Andorra",
        "code": "AD"
    },
    {
        "id": 219,
        "name_ru": "Антарктида",
        "name_en": "Antarctica",
        "code": "AQ"
    },
    {
        "id": 220,
        "name_ru": "Британская территория в Индийском океане",
        "name_en": "British Indian Ocean Territory",
        "code": "IO"
    },
    {
        "id": 221,
        "name_ru": "Гренландия",
        "name_en": "Greenland",
        "code": "GL"
    },
    {
        "id": 222,
        "name_ru": "Гвинея-Бисау",
        "name_en": "Guinea-Bissau",
        "code": "GW"
    },
    {
        "id": 223,
        "name_ru": "Эритрея",
        "name_en": "Eritrea",
        "code": "ER"
    },
    {
        "id": 224,
        "name_ru": "Уоллис и Футуна",
        "name_en": "Wallis and Futuna",
        "code": "WF"
    },
    {
        "id": 225,
        "name_ru": "Французская Полинезия",
        "name_en": "French Polynesia",
        "code": "PF"
    },
    {
        "id": 226,
        "name_ru": "Куба",
        "name_en": "Cuba",
        "code": "CU"
    },
    {
        "id": 227,
        "name_ru": "Тонга",
        "name_en": "Tonga",
        "code": "TO"
    },
    {
        "id": 228,
        "name_ru": "Восточный Тимор",
        "name_en": "Timor-Leste",
        "code": "TL"
    },
    {
        "id": 229,
        "name_ru": "Сан-Томе и Принсипи",
        "name_en": "Sao Tome and Principe",
        "code": "ST"
    },
    {
        "id": 230,
        "name_ru": "Французская Гвинея",
        "name_en": "French Guiana",
        "code": "GF"
    },
    {
        "id": 231,
        "name_ru": "Соломоновы острова",
        "name_en": "Solomon Islands",
        "code": "SB"
    },
    {
        "id": 232,
        "name_ru": "Тувалу",
        "name_en": "Tuvalu",
        "code": "TV"
    },
    {
        "id": 233,
        "name_ru": "Кирибати",
        "name_en": "Kiribati",
        "code": "KI"
    },
    {
        "id": 234,
        "name_ru": "Ниуэ",
        "name_en": "Niue",
        "code": "NU"
    },
    {
        "id": 235,
        "name_ru": "Норфолк",
        "name_en": "Norfolk Island",
        "code": "NF"
    },
    {
        "id": 236,
        "name_ru": "Науру",
        "name_en": "Nauru",
        "code": "NR"
    },
    {
        "id": 237,
        "name_ru": "Майотта",
        "name_en": "Mayotte",
        "code": "YT"
    },
    {
        "id": 238,
        "name_ru": "Питкэрн",
        "name_en": "Pitcairn Islands",
        "code": "PN"
    },
    {
        "id": 239,
        "name_ru": "Кот-дИвуар",
        "name_en": "Cote D`voire",
        "code": "CI"
    },
    {
        "id": 240,
        "name_ru": "Лаос",
        "name_en": "Lao",
        "code": "LA"
    },
    {
        "id": 241,
        "name_ru": "Корейская Народно-Демократическая Республика",
        "name_en": "Democratic People`s Republic of Korea",
        "code": "KP"
    },
    {
        "id": 242,
        "name_ru": "Свальбард и Ян-Майен",
        "name_en": "Svalbard and Jan Mayen",
        "code": "SJ"
    },
    {
        "id": 243,
        "name_ru": "Остров Святой Елены",
        "name_en": "Saint Helena",
        "code": "SH"
    },
    {
        "id": 244,
        "name_ru": "Кокосовые острова",
        "name_en": "Cocos (Keeling) Islands",
        "code": "CC"
    },
    {
        "id": 245,
        "name_ru": "Западная Сахара",
        "name_en": "Western Sahara",
        "code": "EH"
    }
]
```

### HTTP Request
`GET api/countries`


<!-- END_316a4c3b4f6a4c4ff34e5893943cdebd -->

<!-- START_50999491bc3a54c383d134cba750f58d -->
## api/reviews
> Example request:

```bash
curl -X GET -G "http://localhost/api/reviews" 
```

```javascript
const url = new URL("http://localhost/api/reviews");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[]
```

### HTTP Request
`GET api/reviews`


<!-- END_50999491bc3a54c383d134cba750f58d -->

<!-- START_addef74ffb3ebdd2a128f801a9009fb7 -->
## api/reviews
> Example request:

```bash
curl -X POST "http://localhost/api/reviews" 
```

```javascript
const url = new URL("http://localhost/api/reviews");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/reviews`


<!-- END_addef74ffb3ebdd2a128f801a9009fb7 -->

<!-- START_8531499e22905e6be4b511a7ae53e723 -->
## api/reviews/{id}
> Example request:

```bash
curl -X GET -G "http://localhost/api/reviews/1" 
```

```javascript
const url = new URL("http://localhost/api/reviews/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
{}
```

### HTTP Request
`GET api/reviews/{id}`


<!-- END_8531499e22905e6be4b511a7ae53e723 -->

<!-- START_01eec4f897813b015036fbef3a57b0b9 -->
## api/reviews/{id}
> Example request:

```bash
curl -X DELETE "http://localhost/api/reviews/1" 
```

```javascript
const url = new URL("http://localhost/api/reviews/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/reviews/{id}`


<!-- END_01eec4f897813b015036fbef3a57b0b9 -->

<!-- START_4cd144993d93b74c6e2ad81b9be3d051 -->
## api/check-email
> Example request:

```bash
curl -X POST "http://localhost/api/check-email" 
```

```javascript
const url = new URL("http://localhost/api/check-email");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/check-email`


<!-- END_4cd144993d93b74c6e2ad81b9be3d051 -->

<!-- START_61739f3220a224b34228600649230ad1 -->
## api/logout
> Example request:

```bash
curl -X POST "http://localhost/api/logout" 
```

```javascript
const url = new URL("http://localhost/api/logout");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/logout`


<!-- END_61739f3220a224b34228600649230ad1 -->

<!-- START_929971b22cfc8120a3b7456bd9478d94 -->
## api/add-parts
> Example request:

```bash
curl -X POST "http://localhost/api/add-parts" 
```

```javascript
const url = new URL("http://localhost/api/add-parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/add-parts`


<!-- END_929971b22cfc8120a3b7456bd9478d94 -->

<!-- START_ea0eb769d4f8c0aeeef8b55b109a0789 -->
## api/update-parts
> Example request:

```bash
curl -X PUT "http://localhost/api/update-parts" 
```

```javascript
const url = new URL("http://localhost/api/update-parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/update-parts`


<!-- END_ea0eb769d4f8c0aeeef8b55b109a0789 -->

<!-- START_e6397fc5939cccf5d1c2a1a1769da74c -->
## api/delete-parts
> Example request:

```bash
curl -X DELETE "http://localhost/api/delete-parts" 
```

```javascript
const url = new URL("http://localhost/api/delete-parts");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/delete-parts`


<!-- END_e6397fc5939cccf5d1c2a1a1769da74c -->

<!-- START_2b6e5a4b188cb183c7e59558cce36cb6 -->
## api/user
> Example request:

```bash
curl -X GET -G "http://localhost/api/user" 
```

```javascript
const url = new URL("http://localhost/api/user");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET api/user`


<!-- END_2b6e5a4b188cb183c7e59558cce36cb6 -->

<!-- START_538c59bd7094f21614fa40efbc87039d -->
## api/user/{id}
> Example request:

```bash
curl -X PUT "http://localhost/api/user/1" 
```

```javascript
const url = new URL("http://localhost/api/user/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/user/{id}`


<!-- END_538c59bd7094f21614fa40efbc87039d -->

<!-- START_b4d446d308f42f03b8496e7df6676af1 -->
## api/user-orders/{id}
> Example request:

```bash
curl -X GET -G "http://localhost/api/user-orders/1" 
```

```javascript
const url = new URL("http://localhost/api/user-orders/1");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET api/user-orders/{id}`


<!-- END_b4d446d308f42f03b8496e7df6676af1 -->

<!-- START_841b3ebc8473d0eefda40498224b249a -->
## api/bundles
> Example request:

```bash
curl -X POST "http://localhost/api/bundles" 
```

```javascript
const url = new URL("http://localhost/api/bundles");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/bundles`


<!-- END_841b3ebc8473d0eefda40498224b249a -->

<!-- START_3fb244eb48ae90e82153887b29939814 -->
## Show the application paywith paypalpage.

> Example request:

```bash
curl -X GET -G "http://localhost/paywithpaypal" 
```

```javascript
const url = new URL("http://localhost/paywithpaypal");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET paywithpaypal`


<!-- END_3fb244eb48ae90e82153887b29939814 -->

<!-- START_c6e224c9623de9ff0bdc0c6384f0724d -->
## Store a details of payment with paypal.

> Example request:

```bash
curl -X GET -G "http://localhost/paypal" 
```

```javascript
const url = new URL("http://localhost/paypal");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET paypal`


<!-- END_c6e224c9623de9ff0bdc0c6384f0724d -->

<!-- START_d181f62c3758ef93ba54854ad8edc7b3 -->
## paypal/success
> Example request:

```bash
curl -X GET -G "http://localhost/paypal/success" 
```

```javascript
const url = new URL("http://localhost/paypal/success");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (302):

```json
null
```

### HTTP Request
`GET paypal/success`


<!-- END_d181f62c3758ef93ba54854ad8edc7b3 -->


