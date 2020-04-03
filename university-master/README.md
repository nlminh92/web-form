# API

## MỤC LỤC

 - [1. API TẠO STICKER](#1-api-tạo-sticker)
 - [2. API DANH SACH STICKER](#2-api-danh-sach-sticker)
 - [3. API XEM CHI TIET STICKER](#3-api-xem-chi-tiet-sticker)
 - [4. API SỬA STICKER](#4-api-sua-sticker)
 - [5. API SỬA ACTION](#5-api-sua-action)
 - [6. API XÓA ACTION](#6-api-xoa-action)
 - [7. API XÓA STICKER](#7-api-xoa-sticker)
 - [8. API LẤY TOÀN BỘ THÔNG TIN STICKER](#8-api-lay-toan-bo-thong-tin-sticker)

BASE URL: http://localhost:8042

<a name="1-api-tạo-sticker"></a>
## 1. API TẠO STICKER


> URL: 
 
 ```    
/api/stickers
```    
    
> Method: 
```    
POST  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

Parameter | Mandatory | datatype | Description
--------- | ------- | ------- | -----------
sticker_id | Require | string | Id của sticker nếu sticker đã có
sticker_name | Require | string | Tên của sticker nếu thêm mới
action_name | Require | string | Tên hành động
action_speed | Require | number | Tốc độ hành động
frames | Require | Array file | Hình ảnh (có thể gửi 1 hoặc nhiều file, gửi theo kiểu mảng)

> response

```json
{
    "code": 1,
    "message": "Thêm hành động sticker thành công",
    "data": {
        "_id": "5d3fcc2855b81945aab4a7aa",
        "name": "sticker",
        "actions": [
            {
                "frames": [
                    "uploads/frames-1564462120353.png",
                    "uploads/frames-1564462120354.png",
                    "uploads/frames-1564462120355.png"
                ],
                "_id": "5d3fcc2855b81945aab4a7ab",
                "name": "action",
                "speed": 100
            },
            {
                "frames": [
                    "uploads/frames-1564462305283.png",
                    "uploads/frames-1564462305285.png",
                    "uploads/frames-1564462305287.png"
                ],
                "_id": "5d3fcce1a0b824477ce147ef",
                "name": "action",
                "speed": 100
            },
            {
                "frames": [
                    "uploads/frames-1564462313021.png",
                    "uploads/frames-1564462313021.png",
                    "uploads/frames-1564462313022.png"
                ],
                "_id": "5d3fcce9a0b824477ce147f2",
                "name": "action",
                "speed": 100
            },
            {
                "frames": [
                    "uploads/frames-1564462463708.png",
                    "uploads/frames-1564462463708.png",
                    "uploads/frames-1564462463709.png"
                ],
                "_id": "5d3fcd7ffc065c48a9df7137",
                "name": "action 1",
                "speed": 100
            }
        ],
        "createdAt": "2019-07-30T04:48:40.370Z",
        "updatedAt": "2019-07-30T04:54:23.717Z",
        "__v": 0
    }
}
```
<a name="2-api-danh-sach-sticker"></a>
## 2. API DANH SACH STICKER


> URL: 
 
 ```    
/api/stickers
```    
    
> Method: 
```    
GET  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

> response

```json
{
    "code": 1,
    "message": null,
    "data": [
        {
            "_id": "5d4006c99bbd41040b99ef59",
            "name": "sticker"
        }
    ]
}
```
<a name="3-api-xem-chi-tiet-sticker"></a>
## 3. API XEM CHI TIET STICKER


> URL: 
 
 ```    
/api/stickers/:sticker_id
```    
    
> Method: 
```    
GET  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

> response

```json
{
    "code": 1,
    "message": null,
    "data": [
        {
            "frames": [
                "uploads/frames-1564462120353.png",
                "uploads/frames-1564462120354.png",
                "uploads/frames-1564462120355.png"
            ],
            "_id": "5d3fcc2855b81945aab4a7ab",
            "name": "action",
            "speed": 100
        },
        {
            "frames": [
                "uploads/frames-1564462305283.png",
                "uploads/frames-1564462305285.png",
                "uploads/frames-1564462305287.png"
            ],
            "_id": "5d3fcce1a0b824477ce147ef",
            "name": "action",
            "speed": 100
        },
        {
            "frames": [
                "uploads/frames-1564462313021.png",
                "uploads/frames-1564462313021.png",
                "uploads/frames-1564462313022.png"
            ],
            "_id": "5d3fcce9a0b824477ce147f2",
            "name": "action",
            "speed": 100
        },
        {
            "frames": [
                "uploads/frames-1564462463708.png",
                "uploads/frames-1564462463708.png",
                "uploads/frames-1564462463709.png"
            ],
            "_id": "5d3fcd7ffc065c48a9df7137",
            "name": "action 1",
            "speed": 100
        },
        {
            "frames": [
                "uploads/frames-1564471710994.png",
                "uploads/frames-1564471710995.png",
                "uploads/frames-1564471710996.png"
            ],
            "_id": "5d3ff19f03ed9d5bd13c7fdf",
            "name": "action 2",
            "speed": 100
        }
    ]
}
```
<a name="4-api-sua-sticker"></a>
## 4. API SỬA STICKER


> URL: 
 
 ```    
/api/updateSticker/:sticker_id
```    
    
> Method: 
```    
PUT  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

Parameter | Mandatory | datatype | Description
--------- | ------- | ------- | -----------
sticker_name | Require | string | Tên của sticker

> response

```json
{
    "code": 1,
    "message": "Cập nhật sticker thành công",
    "data": {
        "_id": "5d3fcc2855b81945aab4a7aa",
        "name": "updated"
    }
}
```
<a name="5-api-sua-action"></a>
## 5. API SỬA ACTION


> URL: 
 
 ```    
/api/updateAction/:action_id
```    
    
> Method: 
```    
PUT  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

Parameter | Mandatory | datatype | Description
--------- | ------- | ------- | -----------
action_name | Require | string | Tên hành động
action_speed | Require | number | Tốc độ hành động
frames | Require | Array file | Hình ảnh (có thể gửi 1 hoặc nhiều file, gửi theo kiểu mảng)


> response

```json
{
    "code": 1,
    "message": "Cập nhật hành động thành công",
    "data": {
        "frames": [
            "uploads/frames-1564476714480.png",
            "uploads/frames-1564476714481.png"
        ],
        "_id": "5d3fcc2855b81945aab4a7ab",
        "name": "action 12",
        "speed": 20
    }
}
```
<a name="6-api-xoa-action"></a>
## 6. API XÓA ACTION


> URL: 
 
 ```    
/api/deleteAction/:action_id
```    
    
> Method: 
```    
DELETE  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

> response

```json
{
    "code": 1,
    "message": null,
    "data": "Xóa hành động thành công"
}
```
<a name="7-api-xoa-sticker"></a>
## 7. API XÓA STICKER


> URL: 
 
 ```    
/api/deleteSticker/:sticker_id
```    
    
> Method: 
```    
DELETE  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

> response

```json
{
    "code": 1,
    "message": null,
    "data": "Xóa sticker thành công"
}
```
<a name="8-api-lay-toan-bo-thong-tin-sticker"></a>
## 8. API LẤY TOÀN BỘ THÔNG TIN STICKER
> URL: 
 
 ```    
/api/getListSticker
```    
    
> Method: 
```    
GET  
```  
    
> Header: 
```      
x-access-token: fc98e8be71120f42cad70705927e4177c4b49bc5196281bfe820713b4718b2e0 
```  
POST BODY

> response

```json
{
    "code": 1,
    "message": null,
    "data": [
        {
            "_id": "5d4006c99bbd41040b99ef59",
            "name": "sticker",
            "actions": [
                {
                    "frames": [
                        "uploads/frames-1564477129519.png",
                        "uploads/frames-1564477129519.png"
                    ],
                    "_id": "5d4006c99bbd41040b99ef5a",
                    "name": "hanh dong",
                    "speed": 100
                }
            ],
            "createdAt": "2019-07-30T08:58:49.535Z",
            "updatedAt": "2019-07-30T08:58:49.535Z",
            "__v": 0
        }
    ]
}
```
"# university" 
