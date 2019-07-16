/*
* 默认暴露,注意：默认暴露只能暴露一次
* */

export default class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }

  speak(){
    console.log(this.name,this.age)
  }
}

