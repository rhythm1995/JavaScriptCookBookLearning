/**
 * Created by bugzhang on 2016/11/11.
 */
var framework = new Array('angular','react','vue');

console.log(framework.toString());

framework.splice(framework.indexOf('react'),1);

console.log(framework.toString());

framework.splice(framework.lastIndexOf('vue'),1,'ember');

console.log(framework.toString());

//利用循环和分割替换和删除
