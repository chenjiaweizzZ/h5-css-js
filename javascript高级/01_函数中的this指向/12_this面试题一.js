var name = "陈小伟"

var person = {
    name: "陈家伟",
    sayName: function() {
        console.log(this.name)
    }
}

function sayName() {
    var sss = person.sayName;  //用var来定义对象,这个对象存在与window中
    sss();    //默认绑定 window.name -> 陈小伟
    person.sayName();     //隐式绑定 person.name  -> 陈家伟
    (person.sayName)();   //隐式绑定 person.name  -> 陈家伟
    (b = person.sayName)();   //间接函数引用 window.name -> 陈小伟
}

sayName()