var name = 111

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

var person1 = new Person("person1")
var person2 = new Person("person2")

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()
person1.foo3.call(person2)

person1.foo4()
person1.foo4.call(person2)