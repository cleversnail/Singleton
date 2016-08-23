"use strict";
class Singleton{
  constructor(name){
    this.name = name; //name 属性
    this.instance = null; //instance 实例
  }
  static getInstance(name){
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
  getName(){
    console.log(this.name);
  }
}
  var a = Singleton.getInstance('sven1');
  var b = Singleton.getInstance('sven2');
  a.getName();
  b.getName();
