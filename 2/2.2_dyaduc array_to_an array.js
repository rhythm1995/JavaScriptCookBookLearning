/**
 * Created by bugzhang on 2016/11/11.
 */
var fruitarray = [];
fruitarray[0] = ['c','c++'];
fruitarray[1] = ['python','php','prel'];
fruitarray[2] = ['java','c#'];
fruitarray[3] = ['javascript','coffeescript','typescript'];

var newArray = fruitarray.concat.apply([],fruitarray);
console.log(newArray);
console.log(newArray[5]);