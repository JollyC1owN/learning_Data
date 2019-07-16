//引入【分别暴露】的模块
import {demo,test} from './module1'
//import * as module1 from './module1' //这种写法会将所有module1里暴露内容收集到一个对象里

//引入【统一暴露】的模块
import {haha1, haha2, haha3} from "./module2";
//import * as module2 from './module2'

//引入【默认暴露】的模块
import module3 from './module3'
//import * as module3 from './module3'

//引入module4，module4即使用了默认暴露，也使用了分别暴露
import module4,{fun,fun2} from './module4'

//引入第三方模块
import $ from 'jquery'


$('body').css('background','skyblue')
demo()
test()
haha1()
haha2()
let p1 = new module3('kobe',19)
p1.speak()






