'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  console.log('module4');
};

exports.fun = fun;


/*分别暴露*/
function fun() {
  console.log('module4------test');
} /*默认暴露*/


function fun2() {
  console.log('module4------fun2');
}

/*统一暴露*/
exports.fun2 = fun2;