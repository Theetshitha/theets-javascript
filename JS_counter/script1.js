let count=0;

function decrease()
{
    count--
    document.getElementById("counter").innerHTML=count;
    if (count<0) {
        document.getElementById("counter").style.color="red";
    }
    else if(count==0){
        document.getElementById("counter").style.color="black";
    }
}

function reset(){
    count=0;
    document.getElementById("counter").innerHTML=count;

        document.getElementById("counter").style.color="black";
}
function increase(){
    count++;
    document.getElementById("counter").innerHTML=count;

    if (count>0) {
        document.getElementById("counter").style.color="rgb(60, 179, 113)";
    }
     else if(count==0){
        document.getElementById("counter").style.color="black";
    }
}