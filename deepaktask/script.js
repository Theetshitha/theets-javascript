"use strict"

// let element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);
// let value1;
// function myFunction() {
// value1=document.getElementById('input1');
//   demo.innerHTML=value1.value;
//   value1.value=''
 
// }


clear.addEventListener("click", clearFunction);
function clearFunction() {
  demo.innerHTML=" ";
  
}

myBtn.addEventListener("click",listinput1)
function listinput1(){
  let display=document.createElement("p");
  let val=input1.value
  input1.value=""
  display.innerText=val
  demo.append(display);
  // let icon=document.createElement("button")
  icon.innerHTML=<i class="fa-solid fa-trash"></i>;
  // test.append(icon);
}