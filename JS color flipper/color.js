let createbtn=document.createElement("button");
createbtn.setAttribute('id', 'btn1');
createbtn.innerText="Change Color";
document.body.appendChild(createbtn);

let createbtn1=document.createElement("button");
createbtn1.setAttribute('id','btn2');
createbtn1.innerText="Hex Color Code";
document.body.appendChild(createbtn1);

let colorCode=["#4D4C7D","#D0BFFF","#FF8080","#176B87","#362FD9","#B931FC","#FDE5D4","#D2E0FB","#B0578D","#E9B824","#B0D9B1","#5B0888","#662549","#EFB495","#952323","#FFBB5C","#A73121","#FFC436","#FFDBC3","#EA1179","#FFEECC","#91C8E4","#DFA878","#7C96AB"];
let colorCount=0;

function colorChange(){
    document.body.style.backgroundColor=colorCode[colorCount];
    btn2.innerText=colorCode[colorCount];
       colorCount++;
       if(colorCount==colorCode.length-1)
       {
        colorCount=0;
       }
}
btn1.addEventListener("click",colorChange);










//     colorCount=colorCount>colorCode.length-2 ? 0: colorCount+1;
