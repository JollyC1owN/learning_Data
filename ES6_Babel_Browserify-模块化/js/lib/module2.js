'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* 统一暴露
* */

function foo1() {
  console.log('module2-----foo1');
}

function foo2() {
  console.log('module2-----foo1');
}

var arr = [1, 3, 5, 7, 9];

var person = { name: 'kobe', age: 18

  //简写方式
  //export {foo1,foo2,arr,person}

  //完整写法
};exports.haha1 = foo1;
exports.haha2 = foo2;
exports.haha3 = arr;
exports.haha4 = person;