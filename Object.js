var laptop = {
  operatingSystem: 'mac',
  screenSize: '15 inches',
  purchaseYear: 2016
};
19:43:39.458 undefined
19:43:48.239 laptop
19:43:48.246 {operatingSystem: "mac", screenSize: "15 inches", purchaseYear: 2016}operatingSystem: "mac"purchaseYear: 2016screenSize: "15 inches"__proto__: Objectconstructor: ƒ Object()arguments: (...)assign: ƒ assign()arguments: (...)caller: (...)length: 2name: "assign"__proto__: ƒ ()[[Scopes]]: Scopes[0]caller: (...)create: ƒ create()defineProperties: ƒ defineProperties()defineProperty: ƒ defineProperty()entries: ƒ entries()freeze: ƒ freeze()getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()getOwnPropertyNames: ƒ getOwnPropertyNames()getOwnPropertySymbols: ƒ getOwnPropertySymbols()getPrototypeOf: ƒ getPrototypeOf()is: ƒ is()isExtensible: ƒ isExtensible()isFrozen: ƒ isFrozen()isSealed: ƒ isSealed()keys: ƒ keys()length: 1name: "Object"preventExtensions: ƒ preventExtensions()prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}seal: ƒ seal()setPrototypeOf: ƒ setPrototypeOf()values: ƒ values()__proto__: ƒ ()[[Scopes]]: Scopes[0]hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
19:47:56.078 laptop.purchaseYear
19:47:56.081 2016
19:48:04.176 laptop.operatingSystem
19:48:04.179 "mac"
19:48:16.006 laptop.screenSize
19:48:16.010 "15 inches"

19:55:24.393 var myInfo = {
  Name: 'Shiraz Ali',
  Age: '21 yrs',
  description: function() {
    console.log(this);
  }
}
19:55:24.399 undefined
19:55:33.545 myInfo.description
19:55:33.549 ƒ () {
    console.log(this);
  }
19:56:11.421 myInfo
19:56:11.425 {Name: "Shiraz Ali", Age: "21 yrs", description: ƒ}Age: "21 yrs"Name: "Shiraz Ali"description: ƒ ()__proto__: Object
19:57:11.070 var myInfo = {
  Name: 'Shiraz Ali',
  Age: '21 yrs',
  description: function() {
    console.log(this.name);
  }
}
19:57:11.074 undefined
19:57:15.853 myInfo.description
19:57:15.857 ƒ () {
    console.log(this.name);
  }
19:57:30.256 myInfo.description()
19:57:30.256 VM539:5 undefined
19:57:30.264 undefined
19:58:05.791 myInfo.description();
19:58:05.791 VM539:5 undefined
19:58:05.800 undefined
19:58:44.132 myInfo
19:58:44.138 {Name: "Shiraz Ali", Age: "21 yrs", description: ƒ}
19:59:01.882 description();
19:59:01.885 VM576:1 Uncaught ReferenceError: description is not defined
    at <anonymous>:1:1
(anonymous) @ VM576:1
19:59:40.890 var myInfo = {
  Name: 'Shiraz Ali',
  Age: '21 yrs',
  description: function description() {
    console.log(this.name);
  }
}
19:59:40.896 undefined
19:59:49.364 description();
19:59:49.367 VM579:1 Uncaught ReferenceError: description is not defined
    at <anonymous>:1:1
(anonymous) @ VM579:1
20:00:02.546 myInfo.description();
20:00:02.547 VM577:5 undefined
20:00:02.555 undefined
20:00:33.280 myInfo.description
20:00:33.283 ƒ description() {
    console.log(this.name);
  }
20:00:46.690 myInfo.description()
20:00:46.690 VM577:5 undefined
20:00:46.696 undefined
20:02:10.304 var myInfo = {
  Name: 'Shiraz Ali',
  description: function description() {
    console.log(this.Name);
  }
}
20:02:10.311 undefined
20:02:26.159 myInfo.description();
20:02:26.158 VM596:4 undefined
20:02:26.169 undefined

var myInfo = {
  Name: 'Shiraz Ali',
  description: function description() {
    console.log(this.Name);
  }
}
20:29:06.488 undefined
20:29:09.436 myInfo.description();
20:29:09.435 VM98:4 Shiraz Ali
20:29:09.446 undefined
