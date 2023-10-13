// console.log("while loop")
// let i=10;
// while(i>0){
//     console.log(i)
//     i--;
// }
// console.log("outside loop",i);



// console.log(" 1.Write a JS code to print Even numbers in given array")
// arr = [13,23,12,45,22,48,66,100]
  
// function printEven(arr) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
//         console.log(arr[i]); //print even number
//       }  
//     }
//   }
//   var arr = [13,23,12,45,22,48,66,100]
  
  // printEven(arr) 


// ------------method-2--for loop----

// let arr = [13,23,12,45,22,48,66,100];
 

// let even = [];
// for(let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 == 0)
//        even.push(arr[i]);
// }

// console.log("Even numbers in an array are:  ",even);



// console.log("while loop---->  1.Write a JS code to print Even numbers in given array")

// let arr = [13,23,12,45,22,48,66,100];
 

// let even = [];
// let i = 0;
// while(i < arr.length) {
//        if (arr[i] % 2 == 0)
//        even.push(arr[i]);
//        i++;
// }

// console.log("Even numbers in an array are:",even)



// console.log("do while loop---->  1.Write a JS code to print Even numbers in given array")
  
// let arr = [13,23,12,45,22,48,66,100];
 

// let even = [];
// let i = 0;
// do{
//  if (arr[i] % 2 == 0)
//   even.push(arr[i]);
//   i++;
// }while(i < arr.length) 

// console.log("Even numbers in an array are:",even)




// console.log("2. for loop----> Write a JS code to delete all occurrence of element in given array");

// function deleteElement(arr, ele) {
//   for (var i=0;i<arr.length;i++){
//     if(arr[i]==ele){
//       arr.splice(i,1); 
//     }
//   }
//   return arr;
// }
// var arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)

// console.log(arr); 

// another method using arr[i]%8==0 continue  or arr[i]==56 continue or arr[i]!=56

// console.log(" while loop----> 2. Write a JS code to delete all occurrence of 56 in given array");

// function deleteElement(arr, ele) {
//   var i=0;
//  while (i<arr.length){
//     if(arr[i]==ele)
//       arr.splice(i,1);

//          i++ ;
    
//   }
//   return arr;
// }
// var arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)

// console.log(arr); 


// another method using arr[i]%8==0 continue  or arr[i]==56 continue or arr[i]!=56

// console.log("do while loop----> 2. Write a JS code to delete all occurrence of 56 in given array");

// function deleteElement(arr, ele) {
//   var i=0;
//   do{
    
//       if(arr[i]==ele)
//         arr.splice(i,1);
  
//            i++ ;
      
//     }while (i<arr.length)
//     return arr;
//   }
  
 
// var arr = [23,56,4,78,5,63,45,210,56];
// arr = deleteElement(arr, 56)

// console.log(arr); 


// another method using arr[i]%8==0 continue  or arr[i]==56 continue or arr[i]!=56






// console.log("for loop----> 3. Write a JS code to find the power of a number");

// n=prompt("enter a number");
// p=prompt("enter the number for power value");

// function Power(num,pow) {
//   var temp=1; //return 1 for pow=0
//   for(var i=0;i<pow;i++){
//      temp=temp*num;
//   }
//   return temp;
// }
// console.log(Power(n,p));



// console.log("while loop----> 3. Write a JS code to find the power of a number");

// n=prompt("enter a number");
// p=prompt("enter the number for power value");

// function Power(num,pow) {
//   var temp=1; //return 1 for pow=0
  
//   var i=0;
//   while(i<pow){
//      temp=temp*num;

//      i++;
//   }
//   return temp;
// }
// console.log(Power(n,p));



// console.log("do while loop----> 3. Write a JS code to find the power of a number");

// n=prompt("enter a number");
// p=prompt("enter the number for power value");

// function Power(num,pow) {
//   var temp=1; //return 1 for pow=0
  
//   var i=0;
//   do{
 
//      temp=temp*num;

//      i++;
//   } while(i<pow)
//   return temp;
// }
// console.log(Power(n,p));




// console.log(" for loop----> 4. Write a JS code to print a pattern.");

// let n=8;

// for(var i=1;i<=n;i++){
//   var str=""
//   for(var j=1;j<=i;j++){
//     str+=j+" ";

//   }
// console.log(str);
// }



// console.log("while loop----> 4. Write a JS code to print a pattern.");

// let n=8;
// var i=0;
// while(i<n){
//   i++;
//   var str=""

 
//   for(var j=1;j<=i;j++){
//         str+=j+" ";
    
//       }
//     console.log(str);
//     }

// console.log("do while loop----> 4. Write a JS code to print a pattern.");


// let n=8;
// var i=0;
// do{

//   var str=""
//   i++;

 
//   for(var j=1;j<=i;j++){
//         str+=j+" ";
//       }

//     console.log(str);
//     }while(i<n)

// console.log("for loop----> 5. Write a JS code to find the no of digits in a number");

// let n=prompt("enter a number");
// let count=0;

// for(let i=0;i<n;i++)
// {
//   n=n/10;
//   count=count+1;
// }

// console.log(count)





















// function counting(number) {
//   let count = 0;
//   for (let n = number; n > 0; n = Math.floor(n / 10)) {
//       count++;
//   }
//   return count;
// }

// let num = Number(prompt("Enter a number"));
// let result = counting(num);
// console.log("Number of digits in",num," count is ",result);


// digit=prompt("Enter a numbers");
// function Count(num) {
//   var c=0; //return 1 for pow=0
//   while(num!=0){
//     num=Math.floor(num/10);
//     c++;
//   }
//   return count;
// }
// console.log(Count(digit)); //4



// console.log("do while loop----> 5. Write a JS code to find the no of digits in a number");
// console.log("do while loop----> 5. Write a JS code to find the no of digits in a number");































// digit=prompt("Enter a numbers");
// function Count(num) {
//   var c=0; //return 1 for pow=0
//   while(num!=0){
//     num=Math.floor(num/10);
//     c++;
//   }
//   return count;
// }
// console.log(Count(digit)); //4
