let count=0;

document.getElementById("decrease").onclick=function(){
    count--
    document.getElementById("counter").innerHTML=count;
    if (count<0) {
        document.getElementById("counter").style.color="red";
    }
    else if(count==0){
        document.getElementById("counter").style.color="black";
    }
}

document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("counter").innerHTML=count;

        document.getElementById("counter").style.color="black";
}
document.getElementById("increase").onclick=function(){
    count++;
    document.getElementById("counter").innerHTML=count;

    if (count>0) {
        document.getElementById("counter").style.color="rgb(60, 179, 113)";
    }
     else if(count==0){
        document.getElementById("counter").style.color="black";
    }
}