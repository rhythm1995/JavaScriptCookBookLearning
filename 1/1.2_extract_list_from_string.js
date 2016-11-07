/**
 * Created by bugzhang on 2016/11/5.
 */
//待提取字符串
var s = "this is to do list:coding,eating,playing,sleeping.";
//找到冒号
var left = s.indexOf(':');
//找到句号
var right = s.indexOf('.',left+1);
//提取后字符串
var listStr = s.substring(left+1,right);
//字符串转数组
var list = listStr.split(',');
//输出数组
console.log(list);
