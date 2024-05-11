var name = "111"

var person1 = {
    name: '222',
    foo1: function() { console.log(this.name) },
    foo2: () => console.log(this.name),
    foo3: function() {
        return function() {
            console.log(this.name)
        }
    },
    foo4: function() {
        return () => {
            console.log(this.name)
        }
    }
}

var person2 = { name: "333" }

person1.foo1()    //隐式绑定 person1.name 222
person1.foo1.call(person2)  //显式绑定优先级高于隐式绑定 person2.name 333

person1.foo2()   //箭头函数获取不到对象的this 上层作用域 window.name
person1.foo2.call(person2)  //上层作用域 window.name

person1.foo3()()  //默认绑定 window.name  111
person1.foo3.call(person2)()  //还是拿到的是这个函数 也是默认绑定
person1.foo3().call(person2)  //显式绑定person1.name 222   注意括号

person1.foo4()   //往上层作用域 隐式绑定 this指向person1 222  
person1.foo4.call(person2)()   //person2.name
person1.foo4().call(person2)   //window