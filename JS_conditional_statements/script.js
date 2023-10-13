// // symbol

// let value1= Symbol("theetshi");
// let value2= Symbol("theetshi");
// console.log("symbol task");
// console.log(value1==value2);
// // ---------------------------------

// // popup boxes

// console.log("popup boxes");

// let a =parseInt(prompt("Enter value 1: "));
// let b =parseInt(prompt("Enter value 2: "));

// if(a+b <=100){
//     alert("less than or equal to 100");
// }
// else{
//     alert("greater than 100");
// }
// let confirmValue=confirm("Do you want to redirect ?");
// console.log(confirmValue);

// ----------------------------------------

// console.log("if else if statement-----------biggest of three nos");

// let n1= parseInt(prompt("enter number1: "));
// let n2= parseInt(prompt("enter number2: "));
// let n3= parseInt(prompt("enter number3: "));

// if(n1>n2 && n1>n3){
//     console.log("n1 is Biggest Number"); 
// }

// else if(n2>n1 && n2>n3){
//     console.log("n2 is Biggest Number"); 
// }
// else if(n3>n1 && n3>n2){
//     console.log("n3 is Biggest Number"); 
// }
// else{
//     console.log("enter a valid number");
// }

// -----------------------------------------------

console.log("swith case statement------example using Quotes with keyword");
console.log("----------------------------------------------------");
console.log("young, stories, narrative, change, learning, challenge ")

let words=prompt("Please Enter any one of the words listed above: ")

switch (words) {
    case "young":

        console.log(" Young people have an almost biological destiny to be hopeful.");
        break;
    
    case "stories":

        console.log(" Well-told stories help turn moments of great crises into moments of new beginnings.");
        break;

    case "narrative":
        console.log("Narrative is not talking “about” values; rather narrative embodies and communicates values.");
        break;

    case "change":
        console.log("The fact of the matter is, when resisting change becomes more “costly” than accepting change, change happens.");
        break;

    case "learning":
        console.log("Challenging the status quo takes commitment, courage, imagination, and, above all, dedication to learning.");
        break;

    case "challenge":
        console.log("The challenge of the heart is one of motivation, of urgent need to act, and of hope for success, and the courage to risk it.");
        break; 

    default:
        console.log("Invalid input------please check the spelling")
        break;
}
