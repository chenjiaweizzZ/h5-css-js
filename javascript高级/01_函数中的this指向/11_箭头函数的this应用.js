function request(url,callback) {
   var result = [123,213,321] 
   callback(result)
}

var obj = {
    names: [],
    network: function() {
        var _this = this  //早期做法
        // request("/list",function(res) {
        //     // console.log(_this)
        //     _this.names = _this.names.concat(res)  //在普通函数中回调是在request中,this会绑定window
        // })
        request("/names",(res) => {
            this.names = [].concat(res)  //跳出request前往更上层
        })
    }
}

obj.network()
console.log(obj)