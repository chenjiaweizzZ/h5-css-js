var name = '000'

// 创建一个空的对象
// 将这个空的对象赋值给this
// 执行函数中的代码
// 将新的对象默认返回

function Person(name) {
    this.name = name
    this.foo1 = function () {
        console.log(this.name)
    }
    this.foo2 = () => console.log(this.name)
    this.foo3 = function() {
        return function() {
            console.log(this.name)
        }
    }
    this.foo4 = function() {
        return () => {
            console.log(this.name)
        }
    }
}

var person1 = new Person("111")
var person2 = new Person("222")

person1.foo1()  //person1.name -> 111
person1.foo1.call(person2)   //person1已经是个对象了  隐式绑定 -> person2.name  222  

person1.foo2()  //new Person.name -> 111
person1.foo2.call(person2)  //new Person.name -> 111  都是去上层作用域寻找

person1.foo3()()  //默认绑定 window.name -> 000
person1.foo3.call(person2)()  //默认绑定  window.name -> 000
person1.foo3().call(person2)  //显示绑定 person2.name -> 222

person1.foo4()()  //上层作用域查找  person1
person1.foo4.call(person2)()  //上层作用域查找  person2 显示绑定
person1.foo4().call(person2)  //上层作用域查找  person1 隐式绑定