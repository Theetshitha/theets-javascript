
// console.log(" ------------------ 1.string or not -----------------");

// var a = prompt("enter the value");

// let valid = a.trim();

// let inputParse = Number(valid);


// console.log(" value : "+valid.length)

// if(valid.length == 0)
// {
//     alert("INVALID INPUT")
// }
// else{
//     if(inputParse)
//     {
//         alert("is a not a string")
//     }
//     else{
//         alert("Its a string")
//     }
// }



// console.log(" ----------------- 2.blank or not -------------------");


// var a=prompt("Enter a value")

// let blank=a.trim();

// console.log("blank : "+(blank.length==0))
// if(blank.length==0){
//     console.log("true")

// }
// else{
//     console.log("false")
// }


// console.log(" ----------------3. string to array -------------------");

// let str=prompt("enter the value")

// let str2=str.split(" ")
// console.log(str2)


// console.log("----------------- 4.extract string part -----------------");


// let str = prompt("Enter a value")
// let str1 = prompt("Enter a StartRange")
// let str2 = prompt("Enter a EndRange")
// let str4= str.slice(str1,str2)
// console.log(str4);


// console.log(" ------------------5. hide email ---------------------");

// let e=prompt("Enter your email");
// let e1=e.search(/@/);
// let e2=e.slice(4,e1);
// let e3=e.replace(e2,"....");

// console.log(e3);

// let index=prompt("Enter the string");
// let index1=index.substring(0,4);
// let testIndex = index.search("@");
// let index2=index.slice(testIndex)
// console.log(index1+"...."+index2)


// console.log(" ------------------ 6.parameterize a string ---------------------");


// let input=(prompt("Enter a sentence"));
// alert("Given input "+input);

// let output=input.toLowerCase();
// alert("Input in to lowercase : "+output);

// let result=output.replaceAll(" ","-");
// alert(" After parameterize a string : "+result);


// console.log(" ------------------7. capitalise the first letter ---------------------");


// let word=prompt("Enter a value");
// const result=word.replace(/\b\w/g, a => a.toUpperCase())

// console.log("Result : "+result);

// -------------method2-----

// var str = prompt("Enter a sentence :");
// var arr = str.split(" ");


// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt().toUpperCase() + arr[i].slice(1);

// }
// const str2 = arr.join(" ");
// console.log(str2);


// console.log(" ------------------ 8.Human readable string correct suffix---------------------");

// var num=parseInt(prompt("enter a number"))
// var ones=num%10;
// var tens=num%100;
// if(ones==1 && tens!==11){
//     console.log(num+"st");
// }
// else if(ones==2 && tens!==12){
//     console.log(num+"nd");
// }
// else if(ones==3 && tens!==13){
//     console.log(num+"rd");
// }
// else{
//     console.log(num+"th");
// }




// console.log(" ------------------9. truncate a string ---------------------");

// let sentence=prompt(" Enter a sentence ");
// let senArr=sentence.split(" ");
// let truncate_count=prompt("Enter a number to truncate : ");
// let truncate=senArr.slice(senArr,truncate_count);
// let result=truncate.join(" ");
// console.log("After truncate the string :     "+result);


// console.log(" ------------------ 10.remove the first occurance ---------------------");

// let input=prompt("enter a sentence");
// let searchword=prompt("enter a word to remove");
// let result=input.replace(searchword,"");
// console.log("After removing the first occurence : "+result);


// console.log(" ------------------11.case insensitive search ---------------------");

// let a=prompt("enter a sentence");
// a=a.toLowerCase();

// let searchword=prompt("enter a word to search");
// searchword=searchword.toLowerCase();
// let compare=a.includes(searchword);

// if(compare){
//     alert("Matched");
// }
// else{
//     alert("UnMatched")
// }

// console.log(" ------------------ 12.case insensitive search ---------------------");

// let a=prompt("enter a sentence");
// a=a.toLowerCase();

// let searchword=prompt("enter a word to search");
// searchword=searchword.toLowerCase();
// let compare=a.search(searchword);
// console.log(compare);


// console.log(" ------------------13.uppercase to lowercase and lowecase to uppercase ---------------------");

// let sentence = prompt('Enter a string to change')
// let char = ''
// for(i=0;i<sentence.length;i++)
// {
//     if(sentence[i].match(/[a-z]/))
//     {
//         char += sentence[i].toUpperCase();
//     }
//     else 
//     {
//         char += sentence[i].toLowerCase();
//     }

// }
// console.log(char)



let sentence = prompt('Enter a string to change')
let char = ''
for(i=0;i<sentence.length;i++)
{
    if(sentence[i] >= 'a' && sentence[i] <= 'z')
    {
        char += sentence[i].toUpperCase();
    }
    else 
    {
        char += sentence[i].toLowerCase();
    }

}
console.log(char)


































// console.log(" ------------------13.uppercase to lowercase and lowecase to uppercase ---------------------");

// let word = prompt('Enter a string to change ')
// let output = word.split('')
// let str = ""
// for(j in output){
//     if(output[j].match(/[a-z]/)){
//        str += output[j].toUpperCase()
//     }else{
//         str += output[j].toLowerCase()
//     }
// }
//  console.log(str);
