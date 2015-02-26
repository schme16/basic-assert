assert = require('./index.js')
colors = require('colors');



var testObj1 = {
	a: 1337, //is a number
	b: "leet", //is NOT a number


	c: true, //boolean
	d: 'true', //not a boolean


	e: 'test@email.com', //email
	f: 'the best email@not-an-email.net', //not an email
};




var passing = new require('basic-passing')();

passing().start(true);

/*Object set checks*/
	passing(1, assert(testObj1)) //Exists
	passing(2, !assert(null)) //Does not exist.

/*Is set check*/
	passing(3, assert(testObj1, ['a', 'b', 'c'])) //a, b and c are not null

/*Exact match checks*/
	passing(4, assert(testObj1, [{'a': 1337, 'b': 'leet'}])) //a === 1337 and b === 'leet'

/*Number checks*/
	passing(5, assert(testObj1, {'a': 'number'})) //a is a number
	passing(6, !assert(testObj1, {'b': 'number'})) //b is not a number


/*String checks*/
	passing(7, assert(testObj1, {'b': 'string'})) //b is a string
	passing(8, !assert(testObj1, {'a': 'string'})) //a is not a string


/*Email checks*/
	passing(9, assert(testObj1, {'e': 'email'})) //is email
	passing(10, !assert(testObj1, {'f': 'email'})) //is not email


passing().finish();
