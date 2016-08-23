"use strict";
class Singleton{
  constructor(){
    // this.name = name; //name 属性
    this.instance = null; //instance 实例
    this.appendWin();
    this.attachEvent();
  }
  static getInstance(){
    if (!this.instance) {
      this.instance = new LoginWinSingleton();

    }
    return this.instance;
  }
  appendWin(){
    this.containerElement = document.createElement('div');
    document.body.appendChild(this.containerElement);
    this.containerElement.className = 'layer';
    this.containerElement.innerHTML = "我是登录窗口";
    this.containerElement.style.display = 'none';
  }
  attachEvent(){
    var that = this;
    this.containerElement.addEventListener('click',function(){
      that.hide();
    },false);
  }
  hide(){
    this.containerElement.style.display = 'none';
  }
  show(){
    this.containerElement.style.display = 'block';
  }
}

class LoginWinSingleton extends Singleton{

}
