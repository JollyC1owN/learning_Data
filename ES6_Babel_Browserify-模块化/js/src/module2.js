/*
* 统一暴露
* */

function foo1() {
  console.log('module2-----foo1')
}

function foo2() {
  console.log('module2-----foo1')
}

let arr = [1,3,5,7,9]

let person = {name:'kobe',age:18}

//简写方式
//export {foo1,foo2,arr,person}

//完整写法
export {
  foo1 as haha1,
  foo2 as haha2,
  arr as haha3,
  person as haha4
}

