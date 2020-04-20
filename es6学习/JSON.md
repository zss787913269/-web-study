```js
JSON.stringify()的作用是将 JavaScript 值转换为 JSON 字符串，
而JSON.parse()可以将JSON字符串转为一个对象。
简单点说，它们的作用是相对的，我用JSON.stringify()将对象a变成了字符串c，那么我就可以用JSON.parse()将字符串c还原成对象a。

var msg = {"message": 123, "name": 456};

var str = JSON.stringify(msg);
console.log(str)                // '{"message":123,"name":456}'
console.log(typeof str)        // string


console.log(JSON.parse(str))    // { message: 123, name: 456 }
console.log(typeof JSON.parse(str))   // Object
```

