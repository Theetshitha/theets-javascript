// arr=[1,2,"13","4","645"];
// sum=0;
// for(i=0;i<=arr.length-1;i++){
//     if(typeof(arr[i])=="string")
//     continue;

//     sum +=arr[i];
// }
// console.log(sum);





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




// let sum=0;
// function arrsum(x){
  
//     for(i=0;i<=x.length;i++){
//         if (typeof x[i] === "number" && x[i] === x[i]) {
//                 sum += x[i];
//     }
// }
//     console.log(sum);
//     console.log(arrsum(a))
//     }
//     let a=[1, 2, NaN, 3, 4, 5, "13", "4", "645"];
   



// let arr = [1, 2, NaN, 3, 4, 5, "13", "4", "645"];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number" && arr[i] === arr[i]) {
//     sum += arr[i];
//   } else if (typeof arr[i] === "string" && !isNaN(Number(arr[i]))) {
//     sum += Number(arr[i]);
//   }
// }

// console.log(sum);




// let a=[1, 2, 3, 4, 5, "13", "4", "645",NaN]
// let b=arrsum(a)
// function arrsum()
//    {
//         let sum=0;
//         for(i=0;i<a.length;i++)
//             {
                
//                 if (typeof a[i] === "number" && a[i] === a[i]) 
//                 sum += a[i];


//             }
//             console.log(sum);
//     }

// let arr=([10,400,300,20,500,100,80])
// let large=arr[0];
// let secondlarge=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondlarge=large;
//         large=arr[i];
//     }
//     else if(arr[i]>secondlarge){
//         secondlarge=arr[i];
//     }

// }
// console.log(secondlarge)


// let arr=([-10,-4000,-999,-10000,-300,-20,-5000,-100,-80,-110])
// let large=arr[0];
// let secondlarge=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondlarge=large;
//         large=arr[i];
//     }
//     else if(arr[i]>secondlarge && arr[i]!==secondlarge){
//         secondlarge=arr[i];
//     }
    
// }
// console.log(secondlarge)

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//       return 'Array should have at least two elements.';
//     }
  
//     let largest = arr[0];
//     let secondLargest = -Infinity;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//       }
//     }
  
//     if (secondLargest === -Infinity) {
//       return 'No second largest element found.';
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [-10, -4000, -999, -10000, -300, -20, -5000, -100, -80, -110];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  
// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//       return 'Array should have at least two elements.';
//     }
  
//     let largest = arr[0];
//     let secondLargest = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (secondLargest === null || (arr[i] > secondLargest && arr[i] !== largest)) {
//         secondLargest = arr[i];
//       }
//     }
  
//     if (secondLargest === null) {
//       return 'No second largest element found.';
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [60,99,55,44,68,30,80,62,10];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  

  
  
// function findSecondLargest(arr) {
  
//     let largest = arr[0];
//     let secondLargest = null;
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//       } else if (secondLargest === null || (arr[i] > secondLargest && arr[i] !== largest)) {
//         secondLargest = arr[i];
//       }
//     }
  
//     return secondLargest;
//   }
  
//   const arr = [60,99,55,44,68,30,80,62,10];
//   const secondLargest = findSecondLargest(arr);
  
//   console.log('Second largest element:', secondLargest);
  

// function objectToArray(obj) {
//     const result = [];
  
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         result.push([key, obj[key]]);
//       }
//     }
  
//     return result;
//   }
  
//   const obj = { a: 1, b: 2, c: 3 };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]


// function objectToArray(obj) {
//     const keys = ['key1', 'key2', 'key3']; 
//     const result = Array(keys.length * 2); 
//     for (let i = 0; i < keys.length; i++) {
//       const key = keys[i];
//       const value = obj[key];
//       result[i * 2] = key;
//       result[i * 2 + 1] = value;
//     }
  
//     return result;
//   }
  
//   const obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: ['key1', 'value1', 'key2', 'value2', 'key3', 'value3']
  

// function objectToArray(obj) {
//     const keys = ['D', 'B', 'C']; // Known keys
//     const result = Array(keys.length);
  
//     for (let i = 0; i < keys.length; i++) {
//       const key = keys[i];
//       result[i] = [key, obj[key]];
//     }
  
//     return result;
//   }
  
//   const obj = { D: 1, B: 2, C: 3 };
//   const arr = objectToArray(obj);
//   console.log(arr); // Output: [["D", 1], ["B", 2], ["C", 3]]
  

// function objectToArray(obj) {
//     const keys = ['D', 'B', 'C']; // Known keys
//     const result = [
//       [keys[0], obj[keys[0]]],
//       [keys[1], obj[keys[1]]],
//       [keys[2], obj[keys[2]]]
//     ];
  
//     return result;
//   }
  
//   const obj = { D: 1, B: 2, C: 3 };
//   const arr = objectToArray(obj);
//   console.log('Output:', arr); // Output: [["D", 1], ["B", 2], ["C", 3]]
  
