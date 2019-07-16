'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = demo;
exports.test = test;
/*
* 分别暴露
* */

function demo() {
  console.log('module1------demo()----' + obj.m + ',' + obj.n);
}

function test() {
  console.log('module1------test()-----' + str);
}

var obj = {
  m: 1,
  n: 2
};

var str = 'atguigu';