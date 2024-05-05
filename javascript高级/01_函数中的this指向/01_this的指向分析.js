function foo() {
    console.log("this:",this)  //独立的函数没有被绑定到任何一个对象上
    //严格模式下，独立函数this指向的是undefined
    
}
foo()
var obj = { name: "陈家伟" }
obj.fuu = foo
obj.fuu()