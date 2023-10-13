// console.log("------------string methods------------------");
// console.log("string methods--concate()-method--ex-1");

// let str1="Hi " +"welcome";
// let str2="to" +" Home";

// console.log("sring 1 is---"+str1);
// console.log("sring 2 is---"+str2);
// let str=str1.concat(" ",str2)
// console.log("after concat str1 and str2 is---"+str);

// output:
// ------------string methods------------------
// string methods--concate()-method--ex-1
// sring 1 is---Hi welcome
// sring 2 is---to Home
// after concat str1 and str2 is---Hi welcome to Home



// ---------------------------------------------------------------------------------------------------------------------




// console.log("------------string methods------------------------");
// console.log("string methods--concate()-method--------ex-2");

// let str1="Hi ";
// let str2= "welcome"+" to" +" Home";

// console.log("sring 1 is---"+str1);
// console.log("sring 2 is---"+str2);
// let str=str1.concat("theetshi"," ",str2)
// console.log("after concat str1 and str2 is---"+str);

// console.log("string methods--concate()-method");

// output:
// ------------string methods------------------------
// string methods--concate()-method--------ex-2
// sring 1 is---Hi 
// sring 2 is---welcome to Home
// after concat str1 and str2 is---Hi theetshi welcome to Home
// string methods--concate()-method



// ---------------------------------------------------------------------------------------------------------------------



// console.log("------------string operation------------------------");
// console.log("string---object-----ex-3");

// let str1="Hi theetshi";
// let strObj=new String("Hi theetshi");

// console.log(str1==strObj);


// output:
// ------------string operation------------------------
//  string---object-----ex-3
//  true


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--slice()--method--------ex-4");

// let str1="Hi ";
// let str2= "welcome to Home";
// console.log("str2 --"+str2)
// let str=str2.slice(3,10);

// console.log(" After slice()--- str2---- "+str);


// output:
// ------------string methods------------------------
// string methods--slice()--method--------ex-4
// str2 --welcome to Home
// After slice()--- str2---- come to


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--substring()---ex-5");

// let str="Today I'm going to my home";
// console.log("str -->"+str)

// let str1=str.substring(5,15);
// console.log("After using substring() method in str---> "+str1);


// output:
// ------------string methods------------------------
// string methods--substring()---ex-5
// str -->Today I'm going to my home
// After using substring() method in str--->  I'm going


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--substr()---ex-6");

// let str="Today I'm going to my home";
// console.log("str -->"+str)

// let str1=str.substr(5,15);    
// console.log("After using substr() method in str---> "+str1);


// output:
// ------------string methods------------------------
// script1.js:113 string methods--substring()---ex-5
// script1.js:116 str -->Today I'm going to my home
// script1.js:119 After using substr() method in str--->  I'm going to m


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--replace()---ex-7");

// let str="Today I'm going to my office";
// console.log("Given string  -->"+str);

// let str1=str.replace("office","Home");    
// console.log("After using replace() method in str---> "+str1);

// output:
// ------------string methods------------------------
// string methods--replace()---ex-7
// Given string  -->Today I'm going to my office
// After using replace() method in str---> Today I'm going to my Home


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--replace()---ex-8");

// let str="Today I'm going to my office because I have some work in my office";
// console.log("Given string  -->"+str);

// let str1=str.replaceAll("office","Home");    
// console.log("After using replaceAll() method in str---> "+str1);

// output:
// ------------string methods------------------------
// string methods--replace()---ex-8
// Given string  -->Today I'm going to my office because I have some work in my office
// After using replaceAll() method in str---> Today I'm going to my Home because I have some work in my Home


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--toUpperCase()---ex-9");

// let str="Today I'm going to my office because I have some work in my office";
// console.log("Given string  -->"+str);

// let str1=str.toUpperCase();   
// console.log("After using toUpperCase() method in str---> "+str1);

// output:
// ------------string methods------------------------
// string methods--toUpperCase()---ex-9
// Given string  -->Today I'm going to my office because I have some work in my office
// After using toUpperCase() method in str---> TODAY I'M GOING TO MY OFFICE BECAUSE I HAVE SOME WORK IN MY OFFICE

// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--toLowerCase()---ex-10");

// let str="Today I'm going to my office because I have some work in my office";
// console.log("Given string  -->"+str);

// let str1=str.toLowerCase();   
// console.log("After using toLowerCase() method in str---> "+str1);

// output:
// ------------string methods------------------------
// string methods--toLowerCase()---ex-10
// Given string  -->Today I'm going to my office because I have some work in my office
// After using toLowerCase() method in str---> today i'm going to my office because i have some work in my office


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--trim()---ex-11");

// let str="         Today I'm going to my office           ";
// console.log("Given string  -->"+str+"--> string length is -----> "+str.length);

// let str1=str.trim();   
// console.log("After using trim() method in str---> "+str1);
// console.log("After using trim() string length is---> "+str1.length);


// output:
//------------string methods------------------------
// string methods--trim()---ex-11
// Given string  -->         Today I'm going to my office --> string length is -----> 48
// After using trim() method in str---> Today I'm going to my office
// After using trim() string length is---> 28


// ---------------------------------------------------------------------------------------------------------------------




// console.log("------------string methods------------------------");
// console.log("string methods--trimStart()---ex-12");

// let str="         Today I'm going to my office                       ";
// console.log("Given string  -->"+str+"--> string length is -----> "+str.length);

// let str1=str.trimStart();   
// console.log("After using trimStart() method in str---> "+str1);
// console.log("After using trimStart() string length is---> "+str1.length);


// output:
// ------------string methods------------------------
// string methods--trimStart()---ex-12
// Given string  -->         Today I'm going to my office                       
// --> string length is -----> 60
// After using trimStart() method in str---> Today I'm going to my office                       
// After using trimStart() string length is---> 51

// ---------------------------------------------------------------------------------------------------------------------



// console.log("------------string methods------------------------");
// console.log("string methods--trimEnd()---ex-13");

// let str="         Today I'm going to my office                       ";
// console.log("Given string  -->"+str+"--> string length is -----> "+str.length);

// let str1=str.trimEnd();   
// console.log("After using trimEnd() method in str---> "+str1);
// console.log("After using trimEnd() string length is---> "+str1.length);

// output:

// ------------string methods------------------------
// string methods--trimEnd()---ex-13
// Given string  -->         Today I'm going to my office                       --> string length is -----> 60
// After using trimEnd() method in str--->          Today I'm going to my office
// After using trimEnd() string length is---> 37

// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--toString()---ex-14");

// let a=45;
// console.log("typeof a is "+typeof a);

// a=a.toString();
// console.log("typeof a is "+typeof a);

// output:
// ------------string methods------------------------
// string methods--toString()---ex-14
// typeof a is number
// typeof a is string

// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--padStart()---ex-14");

// let a=5;
// let b=a.toString();
// console.log(b.padStart(5,"0"));
// console.log(b.padEnd(5,"0"));
// console.log(b.padEnd(5,"a"));

// output:
// ------------string methods------------------------
// string methods--padStart()---ex-14
// 00005
// 50000
// 5aaaa


// ---------------------------------------------------------------------------------------------------------------------


// console.log("------------string methods------------------------");
// console.log("string methods--charAt()---ex-14");
// let str="welcome to dckap";
// console.log("Given string -->"+str);
// console.log("charAt() string method-->"+str.charAt(5));
// console.log("charAt() string method-->"+str.charAt(0));
// console.log("charAt() string method-->"+str.charCodeAt(0));

// output:
// Given string -->welcome to dckap
// charAt() string method-->m
// charAt() string method-->w
// charAt() string method-->119

// ---------------------------------------------------------------------------------------------------------------------
