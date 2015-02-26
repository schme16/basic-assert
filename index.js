var valid = require('validator'),

basicAssert = {
	assert: function (obj, checks) {
		if(!obj) return false;
		var tests = {
			'string': function (checks) {var data = obj[checks]; return ((typeof data !== 'undefined' && typeof data !== 'null') || false)},
			'object': function (checks) {
				for (var i in checks) {
					if (obj[i] !== checks[i]) return false;
				}
				return true
			},

			types: {
				'email': function (a) {return valid.isEmail(a, {allow_display_name: false})},
				'string': function (a, b) {return typeof a === 'string'},
				'object': function (a) {return typeof a === 'object'},
				'number': function (a) {return typeof a === 'number'},
				'boolean': function (a) {return typeof a === 'boolean'},
				'date': function (a) {return typeof a === 'date'},
			}
		}
		try {

			if (typeof checks === 'string') return tests.string(checks)

			else if (!checks) {
				return true;
			}

			else if(!!checks.slice) {
				for (var i in checks) {
					if (!tests[typeof checks[i]](checks[i])) return false;
				}
				return true
			}

			else if(!checks.slice) {
				for (var i in checks) {
					if(!tests.types[checks[i]](obj[i])) return false;
				}
				return true
			}
		} catch (e) {return false}
	}
}

module.exports = basicAssert.assert;