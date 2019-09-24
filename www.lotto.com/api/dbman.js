'use strict';

var query = require('./dbconn');

function adman() {

	adman.prototype.addNumber = function(num0, num1, num2, num3, num4, num5, num6, callback) {
        var numstr = num0.toString()+num1.toString()+num2.toString()+num3.toString()+num4.toString()+num5.toString()+num6.toString();
        var sql = "insert into lt_number(num0, num1, num2, num3, num4, num5, num6, numstr) \
					values(?, ?, ?, ?, ?, ?, ?, ?)";
		var params = [num0, num1, num2, num3, num4, num5, num6, numstr];

		query(sql, params, function(err, vals, fields) {
			if (!err) {
				var insertID = vals["insertId"];
				if (insertID > 0) {
					callback(1, insertID);
				} else {
					callback(0, 0);
				}
			} else {
				callback(0, 0);
			}
		});
	};
}

module.exports = adman;