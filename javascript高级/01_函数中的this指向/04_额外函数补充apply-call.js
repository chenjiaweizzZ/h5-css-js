function foo(name, age, height) {
    console.log(`我的名字是${name},我的年龄是${age},我的身高是${height}`)
    console.log(this)
}
var obj = {
    name: "陈家伟"
}
//第一个参数 绑定的this
//第二个参数 传入额外的实参，以数组的形式
foo.apply(obj,["陈家伟",23,1.88])
//第一个参数 绑定的this
//后续的参数以多参数的形式传递，会作为实参
foo.call(obj,"陈家伟",23,1.88)
