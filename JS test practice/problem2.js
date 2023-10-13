"use strict"

// 1. printing fizzbuzz--------------------------------

// let n=Number(prompt("enter a number"));

// for(let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz")
        
//     }
//     else if(i%5==0){
//         console.log("Buzz")
        
//     }
//     else{
//         console.log(i);
//     }

// }

// 2. printing array multiples

// let a=prompt("Enter a number");
// let b=prompt("Enter a length");
// let result=mularr(a,b);
// console.log(result)


// function mularr(num,len){
//     var d=[]
   
//     for(let i=0;i<len;i++){
//        d[i]=num*(i+1);
    //    console.log(num,"*",i,"=",d)
//     }
//     console.log(d)
     
// }



// var str="5 6 2 30 7 8 4";
// console.log("Given string ",str);

// var arr=str.split(" ")
let arr1=[5,6,7,8,9,10,30,90,20,13];
console.log("Given array ",arr1);

for(var i=1;i<arr1.length;i++){
        for(let j=0;j<i;j++)
        {
            if(arr1[i]<arr1[j])
            {
               let temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
        }
    }
    console.log(arr1)

    let s=arr1.join(" ");

    console.log("sortted array ",s);
    console.log("Biggest no : ",s[0],"  ","smallest no : ",s[0]);


