'use strict'
function foo() {
    console.log("this:",this)
}
foo()
foo.apply("abc")
foo.apply(null)
foo.apply(undefined)