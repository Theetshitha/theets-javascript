// console.log("  ");
//     console.log("Find whether the number is present in given range. Get the input using prompt.");
   
    
//     let r1=parseInt(prompt("Enter range1 : "));
//     let r2=parseInt(prompt("Enter range2 : "));
    
//     let n=parseInt(prompt("Enter number1 : "));


//     let valid=(r1>0 && r1<r2);

//    if(valid){
//     if((n>=r1 && n<=r2)||) {
       
//         console.log("n is in between the range of given two number");
//         }
        
//        else 
//        {
//         console.log("n is not in between the range of given two number");
        
//        }
    
//    }
   
//    else{
//     if(n<=r1 && n>=r2) {
       
//         console.log("n is in between the range of given two number");
//         }
        
//        else 
//        {
//         console.log("n is not in between the range of given two number");
        
//        }
//    }
     

console.log("  ");
    console.log("Find whether the number is present in given range. Get the input using prompt.");
   
    
    let r1=parseInt(prompt("Enter range1 : "));
    let r2=parseInt(prompt("Enter range2 : "));
    
    let n=parseInt(prompt("Enter number1 : "));
if((n>=r1 && n<=r2)||(n<=r1 && n>=r2)) {
       
    console.log("n is in between the range of given two number");
    }
    
   else 
   {
    console.log("n is not in between the range of given two number");
    
   }