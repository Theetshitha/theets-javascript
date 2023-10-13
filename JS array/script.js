
// console.log("--------1.Return the first element in an array--------");

// let a=[1,2,3,4,5,6]
// console.log("Given array: "+a);
// let returnarr=arr(a)
// console.log(returnarr)
// function arr(x){
// return "Return the first element in an array : "+x[0];
// }

// console.log("------2.check if array contains a given no-----");


// var a=[1,2,3,4,5,6,7]
// console.log("Given array: "+a);
// var b=3;
// console.log("searched word : "+b);
// var returnarr=arr(a,b)
// console.log(returnarr)
// function arr(x,y){
// return "check if array contains a given no : "+x.includes(y);
// }

// console.log("------3.Reverse an array -----");

// let a=[1,2,3,4,5,6,7];
// console.log("Given array: "+a);
// let returnarr=arr(a);
// console.log(returnarr)
// function arr(x){
// return "Reverse an array : "+x.reverse();
// }

// console.log("------4.Return an array -----");

// let returnarr=arr(9,6)
// console.log(returnarr)
// function arr(a,b){
// return [a,b];
// }


console.log(arr(9,6))

function arr(a,b){
  let arr = new Array(a,b);
  return arr;
}

// console.log("------5.Find the index-----");

// var a=["a","b","c","d","e","f","g"];
// console.log("Given array: "+a);
// var b="d";
// console.log("searched word : "+b);
// let returnarr=arr(a);
// console.log(returnarr)
// function arr(x){
// return "Index of searched word : "+x.indexOf(b);
// }

// console.log("--------6.Return the last element in an array--------");

// var a=["a","b","c","d","e","f","g"];
// console.log("Given array: "+a);

// let returnarr=arr(a);
// console.log(returnarr)
// function arr(x){
// return "last element in array : "+x[x.length-1];
// }

// console.log("--------7.Convert array into a string--------");

// var a=["apple","ball","cat","dog","elephant","frog","google"];
// console.log("Given array: "+a);

// let returnarr=arr(a);
// console.log(returnarr)
// function arr(x){
// return "array in to string : "+x.join(" ");
// }


// console.log("--------8.find the length of given string--------");

// let  a=("hello hi world")
// console.log(len(a));

// function len(x)
// {
//  b=x.slice(-1)
//  c=x.lastIndexOf(b)
//  d=c+1
// return d;
// }

// function strLength(s) {
//     var length = 0;
//     while (s[length] !== undefined)
//       length++;
//     return length;
//   }
// let  a=("hello hi world")
  
//   console.log(strLength(a)); 
//   console.log(strLength(""));