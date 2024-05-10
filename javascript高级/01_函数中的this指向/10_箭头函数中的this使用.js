function foo() {
    console.log("this:",this) // window
}

var bar = () => {
    console.log("this:",this)
}
// foo()
// bar()
var obj= {
    name: "陈家伟",
    // foo: function() {
        foo: () => {
        var bar = () => {
            console.log("this:",this)
        }
        return bar
    }
}

var fn = obj.foo()
fn()
// fn.apply("bbb")