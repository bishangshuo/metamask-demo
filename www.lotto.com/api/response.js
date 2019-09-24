'use strict';

function response(){
	response.prototype.end = function(res, result, code, msg, data){
		var responseObj = {
			'result' : parseInt(result),
			'response' : {
				"code" : parseInt(code),
				"msg"  : msg,
				"data" : data
			}};
		res.writeHead(200, {"Content-Type": "application/json"});
   		res.end(JSON.stringify(responseObj));
	}
}

module.exports = response;