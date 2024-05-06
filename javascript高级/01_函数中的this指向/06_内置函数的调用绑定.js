// setTimeout(function() {
//     console.log("this:",this)
// },1000)

var button = document.querySelector("button")
// button.onclick = function() {
//     console.log("this:",this)
// }
// button.addEventListener("click",function() {
//     console.log("this:",this)
// })

var arr = [1,2,3]
arr.forEach(function(i){
    console.log(i,this)  //window
},button)