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
console.log('----------我是分割线----------')
var language = new Array('c','c++','c#','java','c','c++','c++');

while(language.indexOf('c++') != -1){
    language.splice(language.indexOf('c++'),1,'python');
}
console.log(language);

while (language.indexOf('python') != -1){
    language.splice(language.indexOf('python'),1);
}
console.log(language);