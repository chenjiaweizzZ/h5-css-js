function foo() {
    console.log("this:",this)
}
//比较优先级
// 1.显式绑定的优先级高于隐式绑定
// var obj = { foo: foo }
// obj.foo.apply("abc")

//bind也高于隐式绑定
// var bar = foo.bind("aaa")
// var obj = {
//     name: "陈家伟",
//     baz: bar
// }
// obj.baz()


// 2.new绑定的优先级也高于隐式绑定
//new不可以和apply和call一起使用
//new绑定的优先级高于bind
// var obj = {
//     name: "陈家伟",
//     foo: function() {
//         console.log("this:",this)
//     }
// }

// new obj.foo()

//bind优先级高于apply和call
var btnFn = foo.bind("bbb")
btnFn.call("ccc")