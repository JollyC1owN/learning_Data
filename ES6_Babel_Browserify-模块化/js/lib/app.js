'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*$('body').css('background','skyblue')
demo()
test()
foo1()
foo2()
let p1 = new module3('kobe',19)
p1.speak()*/

//import * as module3 from './module3'

//引入module4，module4即使用了默认暴露，也使用了分别暴露

//import * as module1 from './module1' //这种写法会将所有module1里暴露内容收集到一个对象里

//引入【统一暴露】的模块
(0, _module6.default)();

//引入第三方模块

//import * as module2 from './module2'

//引入【默认暴露】的模块
//引入【分别暴露】的模块

(0, _module5.fun)();
(0, _module5.fun2)();