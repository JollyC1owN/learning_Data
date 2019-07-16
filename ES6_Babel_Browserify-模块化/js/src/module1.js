/*
* 分别暴露
* */

export function demo() {
  console.log(`module1------demo()----${obj.m},${obj.n}`)
}

export function test() {
  console.log(`module1------test()-----${str}`)
}

let obj = {
  m:1,
  n:2
}

let str = 'atguigu'