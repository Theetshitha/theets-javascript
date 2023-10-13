// console.log("--------------------array creation-------------")
 
// var myself=["Theetshitha", 21, 9629886074]

// console.log("--------------------object creation-------------")
// var myself={
//     name:"Theetshitha",
//     age:21,
//     dob:"25-11-2001"
// }
// console.log("object creation:",myself.name+" "+myself.age)

// console.log("--------------------nested object creation-------------")
// var myself=
//     {
//         name:"Theetshitha",
//         age:21,
//         dob:"25-11-2001",

//             contact:
//             {
//                 phone_no:"9629886074",
//                 email_id:"theetshitha@gmail.com",

//                         address:
//                         {
//                             doorno:"4/499",
//                             streetno:"5th-street, fathimapuram",
//                             area:"kattur",
//                             district:"Trichy",
//                             state:"Tamilnadu",
//                             pincode:620019

//                         }
                

//             }
//     }
// console.log("Nested object:",myself);
// console.log("Nested object:",myself.contact)
// console.log("Nested object:",myself.contact.address)

// consolec.log("----array -- object -----");

// let arrObj_studentInfo=[
//     {
//         name:"Hari",
//         regno:111
//     },

//     {
//         name:"Ram",
//         regno:222
//     },

//     {
//         name:"Chanth",
//         regno:333
//     },

//     {
//         name:"vijayalakshmi",
//         regno:444
//     },

//     {
//         name:"Lakshmanan",
//         regno:555
//     }
// ]

// console.log("array-object ",arrObj_studentInfo);
// console.log("array-object ",arrObj_studentInfo[2]);
// console.log("array-object ",arrObj_studentInfo[3]);


// console.log("---- object -- array -----");

// var ObjectArray = {
//    favourite:["food","dress","color","songs"],
//    food:["noodles","chapati","briyani"],
//    dress:["chudithar","t-shirts","half-saree"],
//    color:["blue","pink","black"],
//    songs:["u1-songs","ARR","aniruth"]
   
// }
// console.log(ObjectArray);
// console.log(ObjectArray.favourite);
// console.log(ObjectArray.food);
// console.log(ObjectArray.food[2]);


// ----------------------- methods ------------------  

var learningJS={
    IntersetedTopic:"string methods",
    MainTopic:"Looping statements",
    TrainerName:"Mukesh",
    JSTraingDays:60,
    stipend:10000,
    display(){
        console.log("After Training in internship stipend with Increment : ")
    },
    Incrementstipend(Increment){
        console.log(learningJS.stipend+Increment);
    }
}
learningJS.display();
learningJS.Incrementstipend(3000);
