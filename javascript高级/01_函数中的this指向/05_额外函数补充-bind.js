function foo(name, age, height) {
    console.log("this:",this) 
    console.log(`我的名字是${name},我的年龄是${age},我的身高是${height}`)
}

var obj = { name: "陈家伟" }

//调用foo时,总是绑定到obj对象上
var bar = foo.bind(obj,"陈家伟",23,1.88)

bar()