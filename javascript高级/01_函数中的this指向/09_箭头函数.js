//以前的写法
function foo1() { console.log("foo1") }
var foo2 = function() { console.log("foo2") }
// foo1()
// foo2()

//箭头函数
//箭头函数不会绑定this,arguments
//箭头函数不能作为构造函数(不能和构造函数一起使用)
var foo3 = () => { console.log("foo3") }
foo3()

var arr = ["aaa","bbb","ccc"]
var num2 = [1,2,3,4]
// arr.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })
//如果只有一行的执行代码 大括号亦可以省略
arr.forEach(i => console.log(i))

//只有一行代码时,这行代码的表达式结果会作为函数的返回值默认返回
// var newNums = num2.filter(i => {
//     return i % 2  === 0
// })

var newNums = num2.filter(i => i % 2  === 0)
console.log(newNums)