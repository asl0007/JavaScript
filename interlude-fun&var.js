22:49:14.594 var myName = 'Shiraz Ali'
22:49:14.598 undefined
22:49:55.525 function sayName(){
console.log(myName);
}
22:49:55.528 undefined
22:51:00.019 sayName()
22:51:00.019 VM990:2 Shiraz Ali

23:00:44.462 function sayName(){
var Secret = 'Watch and code';
console.log(myName);
}
23:00:44.464 undefined
23:01:00.563 sayName()
23:01:00.563 VM1015:3 Shiraz Ali
23:01:00.569 undefined
23:01:28.241 console.log(Secret)
23:01:28.243 VM1066:1 Uncaught ReferenceError: Secret is not defined
    at <anonymous>:1:13
(anonymous) @ VM1066:1
23:02:13.011 function sayName(){
var Secret = 'Watch and code';
console.log(Secret);
}
console.log(sayName);
23:02:13.010 VM1114:5 ƒ sayName(){
var Secret = 'Watch and code';
console.log(Secret);
}
23:02:13.019 undefined
23:02:27.293 sayName()
23:02:27.293 VM1114:3 Watch and code
23:02:27.302 undefined
23:03:24.520 function sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(sayName);
}
23:03:24.530 undefined
23:03:31.051 sayName()
23:03:31.051 VM1128:3 Watch and code
23:03:31.052 VM1128:4 ƒ sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(sayName);
}
23:03:31.058 undefined
23:03:43.922 sayName()
23:03:43.922 VM1128:3 Watch and code
23:03:43.922 VM1128:4 ƒ sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(sayName);
}
23:03:43.929 undefined
23:04:00.188 function sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(sayName);
};
23:04:00.194 undefined
23:04:06.295 sayName()
23:04:06.294 VM1144:3 Watch and code
23:04:06.295 VM1144:4 ƒ sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(sayName);
}
23:04:06.301 undefined
23:05:22.410 function sayName(){
console.log(sayName);
var Secret = 'Watch and code';
console.log(Secret);
};
23:05:22.418 undefined
23:05:28.271 sayName()
23:05:28.271 VM1147:2 ƒ sayName(){
console.log(sayName);
var Secret = 'Watch and code';
console.log(Secret);
}
23:05:28.272 VM1147:4 Watch and code
23:05:28.279 undefined
23:05:58.391 function sayName(){
console.log(sayName);
var Secret = 'Watch and code';
console.log(Secret);
}
23:05:58.397 undefined
23:06:02.533 sayName()
23:06:02.534 VM1159:2 ƒ sayName(){
console.log(sayName);
var Secret = 'Watch and code';
console.log(Secret);
}
23:06:02.534 VM1159:4 Watch and code
23:06:02.541 undefined
23:06:29.270 function sayName(){
console.log(myName);
var Secret = 'Watch and code';
console.log(Secret);
}
23:06:29.276 undefined
23:06:35.720 sayName()
23:06:35.717 VM1166:2 Shiraz Ali
23:06:35.717 VM1166:4 Watch and code
23:06:35.727 undefined
23:07:03.500 function sayName(){
var Secret = 'Watch and code';
console.log(Secret);
console.log(myName);
};
23:07:03.505 undefined
23:07:09.408 sayName()
23:07:09.405 VM1179:3 Watch and code
23:07:09.405 VM1179:4 Shiraz Ali

//When we are inside a function we can look out and see data but the opposite is not true as we can't see inside from outside.

23:13:19.125 var todos = ['list1', 'list2', 'list3']

23:13:19.132 undefined
23:13:40.666 function displayTodos(){
  console.log('My Todos: ',todos);
}
23:13:40.669 undefined
23:14:22.789 displayTodos()
23:14:22.790 VM1198:2 My Todos:  (3) ["list1", "list2", "list3"]
23:14:22.796 undefined
23:15:06.807 function changeTodo(position,newValue) {
  todos[position] = newValue;
  displayTodos();
}
23:15:06.809 undefined
23:15:51.511 function toAddTodo(todo){
  todos.push(todo);
  displayTodos();
}
23:15:51.514 undefined
23:16:13.406 function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}
