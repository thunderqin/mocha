var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试',function(){
	it('1+1等于2',function(){
		expect(add(1,1)).to.be.equal(2);
	});
	it('1+1为true',function(){
		expect(add(1,1)).to.be.ok;
	});
	it('1+1相加不等于250',function(){
		expect(add(1,1)).to.be.not.equal(250);
	});
	it('[1,3,4]数组中含有3',function(){
		expect([1,3,4]).to.include(10);
	});
});
