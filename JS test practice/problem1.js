"use strict"
// console.log("-1.--------------------------------JS logical problem one");

// arr=[1,2,"13","4","645"];
// arr=[true,false,"13","4","645"];
// let arr=[1,2,NaN,3,4,5,"13","4","645"];


// let sum=0;
// for(i=0;i<=arr.length-1;i++){
//     if(isNaN(arr[i]))
//     continue;

//     if(typeof(arr[i])=="number")
//     sum +=arr[i];

// }
// console.log(sum);

// let a=arrsum([1, 2, NaN, 3, 4, 5, "13", "4", "645"]);


// console.log("--2.--------------------------------JS logical problem two");
  
// function sLarge(arr) {
  
//     let largest = arr[0];
//     let secbig = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secbig = largest;
//         largest = arr[i];
//       } else if (secbig === null || (arr[i] > secbig && arr[i] !== largest)) {
//         secbig = arr[i];
//       }
//     }
  
//     return secbig;
//   }
  
//  let arr = [60,99,55,44,68,30,80,62,10];
//  secbig = sLarge(arr);
  
//   console.log('Second largest element:', secbig);


// console.log("----------------------------------JS logical problem three");

// let obj = { A: 1, B: 2, C: 3 };
// let keys = ['A', 'B', 'C']; 
// let arr = objectToArray(obj);

// function objectToArray(obj) {
    
//     let result = [
//       [keys[0], obj[keys[0]]],
//       [keys[1], obj[keys[1]]],
//       [keys[2], obj[keys[2]]]
//     ];
  
//     return result;
//   }
  
//   let output = '[';
//   for (let i = 0; i < arr.length; i++) {
//     output += '[' + arr[i][0] + ', ' + arr[i][1] + ']';
//     if (i < arr.length - 1) {
//       output += ', ';
//     }
//   }
//   output += ']';
  
//   console.log(output);
  
// problem -4

// var arr=[5,6,2,30,7,8,4];
// var temp;
// var a;
// var b;


// var result=prompt("enter a function asen or desen or none");
// result=result.toLocaleLowerCase();

// if(result=="asen"){
//      a=asen();
// }
// else if(result=="desen"){
//      b=desen();
// }
// else if(result=="none"){
//     console.log(arr);
// }
// else{
//     console.log("Invalid Input");
// }


// function asen(){
//     for(i=1;i<arr.length;i++)
//     {
//         for(j=0;j<i;j++)
//         {
//             if(arr[i]<arr[j])
//             {
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// function desen(){
//     for(i=1;i<arr.length;i++)
//     {
//         for(j=0;j<i;j++)
//         {
//             if(arr[i]>arr[j])
//             {
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(arr);
// }

// var a=asen();
// var d=desen();


// var obj={}

// function objectToArray(obj) {
//     const arr = [];
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         arr.push([key, obj[key]]);
//       }
//     }
  
//     return arr;
//   }
  
//   const obj = { a: 1, b: 2, c: 3 };
//   const arr = objectToArray(obj);
  
//   console.log(arr); // Output: [["a", 1], ["b", 2], ["c", 3]]
  




// -----------5 problem--------------------------------------



// const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

// function removeDuplicate(arr) {
//     const result = [];
//     let idx = 0;
//     const tmp = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!tmp[arr[i]]) {
//             tmp[arr[i]] = 1;
//             console.log(arr[i])
//             result[idx] = arr[i];
//             idx++;
//         } 
//     }
//     return result;
// }

// console.log(removeDuplicate(input));

// ------3 trying-------------------------------------------

// object to array-------------------------------------
// let a=[2,5,6,7,9,22,6,2,5,"a","b","a"];
// let i;
// let b=[]
// for(i=0;i<a.length;i++){
//      b[i]=a[i]
// }
// console.log(b);

// let obj={a:1,b:3,c:4,d:2};
// key=Object.keys(obj)
// console.log(key);
// values=Object.values(obj)
// console.log(values);

// let c=[];
// let d=[];
// let i;
// let j;

// for(i=0;i<key.length;i++)
//     c=i
// {   for(j=0;j<=i;j++){
//     console.log(key[i]);
//     console.log(values[j]);
//     }
// }


// reverse Array and store it to new array----------------------


// let arr = [23,8,9,33,"theetshi","a",true]
// let b=[];

// let i;
// for( i=arr.length-1;i>=0;i--){
//     b[arr.length-1-i]=arr[i];

// }

// console.log(b);



