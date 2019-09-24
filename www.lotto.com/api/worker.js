'use strict';

var Response = require('./response');
var DBMan = require('./dbman');

var __gWorkerInstance = null;

function worker() {

	function worker(){	
	}

	this.getInstance = function () {
		if (__gWorkerInstance == null) {
			__gWorkerInstance = new worker();
		}
		return __gWorkerInstance;
	}


	//请求处理入口，使用基类的validate方法验证接口的合法性和验证用户身份
	worker.prototype.process = function (func, req, res) {

		var me = this;
		var response = new Response();;

        if (func == 'add-number') {
            me.addNumber(req.body.num0, req.body.num1, req.body.num2, req.body.num3, req.body.num4, req.body.num5, req.body.num6,
                function (code, msg, data) {
                    response.end(res, 1, code, msg, data);
                });
        }           
	};

	worker.prototype.addNumber = function(num0, num1, num2, num3, num4, num5, num6, callback){
		(new DBMan()).addNumber(num0, num1, num2, num3, num4, num5, num6, function(res, insertId){
			if(res == 1){
                console.log("入库成功:"+insertId);
				callback(1, '入库成功', insertId);
			}else{
                console.log("入库失败!!!!!");
				callback(0, '入库失败', 0);
			}
		})
	}
}


module.exports = worker;