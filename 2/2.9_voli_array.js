/**
 * Created by bugzhang on 2016/11/13.
 */
function testValue(element,index,array) {
    var textExp = /^[a-zA-Z]/;
    return textExp.test(element);
}

var elemSet = ['#!$!','asd','131','AAA','43','-','isRs'];
var result = elemSet.every(testValue);
console.log(result);
console.log('--------我是分割线-------');
var elemSet2 = ['asd','qqq','dwa','fvf','fwa'];
var result2 = elemSet2.every(testValue);
console.log(result2);