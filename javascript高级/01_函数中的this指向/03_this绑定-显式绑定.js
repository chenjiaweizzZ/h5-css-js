function foo() {
    console.log("this:",this) 
}
var obj = { name: "陈家伟" }
foo.call(obj) //执行foo函数并且this指向obj对象
foo.call(undefined) //undefined和null又会指向window