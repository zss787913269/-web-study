```js
文字消息
{
    "version": 1, 
    "target_type": "single",
    "target_id": "javen",
    "target_name": "Javen Fang",
    "from_type": "user",
    "from_id": "fang", 
    "from_name": "Fang Javen", 
    "create_time": 135432432187,
    "msg_type": "text",
    "msg_body": {
        "text": "Hello, JPush IM!"  
    }
}

图片消息
{
    "version": 1, 
    "target_type": "single",
    "target_id": "javen",
    "from_type": "admin",
    "from_id": "fang", 
    "msg_type": "image",
    "msg_body": {
        "media_id": "qiniu/image/CE0ACD035CBF71F8",
        "media_crc32":2778919613,
        "width":3840,
        "height":2160,
        "fsize":3328738,
        "format":"jpg"
    }
}

语音消息
{
    "version": 1, 
    "target_type": "single",
    "target_id": "ppppp",
    "from_type": "admin",
    "from_id": "admin_caiyh", 
    "msg_type": "voice",
    "msg_body": {
        "media_id": "qiniu/voice/j/A96B61EB3AF0E5CDE66D377DEA4F76B8",
        "media_crc32":1882116055,
        "hash":"FoYn15bAGRUM9gZCAkvf9dolVH7h",
        "fsize" :12344,
        "duration": 6
    }
}

位置消息
{
    "version":1,
    "target_type":"single", 
    "target_id":"oooo", 
    "target_appkey":"4f7aef34fb361292c566a1cd",
    "from_type":"admin",
    "from_id":"oooo",
    "msg_type":"location",
    "msg_body":{
        "latitude":111.2,
        "longitude":22.3,
        "scale":500,
        "label":"xx省xx市xx区xx街道"
    }
}

视频消息
{
    "version":1,
    "target_type":"single", 
    "target_id":"oooo", 
    "target_appkey":"4f7aef34fb361292c566a1cd",
    "from_type":"admin",
    "from_id":"oooo",
    "msg_type":"video",
    "msg_body":{
        "duration":10,
        "thumb":{
            "fsize":20736,
            "width":72,
            "format":"png",
            "media_crc32":2565087609,
            "media_id":"qiniu/image/a/707F13B42CEDB275702938DD13ED76E8.png",
            "height":72
        },
        "video":{
            "fname":"testvideo",
            "fsize":2900883,
            "media_crc32":428957395,
            "media_id":"qiniu/file/a/2745EACC984972A4F914C7614CEC1572"
        }
    }
}

自定义消息
{
    "version": 1, 
    "target_type": "single",
    "target_id": "ppppp",
    "from_type": "admin",
    "from_id": "admin_caiyh", 
    "msg_type": "voice",
    "msg_body": {
        json define yourself
    }
}

```

