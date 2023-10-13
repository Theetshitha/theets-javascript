console.log("Game inputs: stone, paper, sissor");

let player1=prompt("Enter game input for player1 :");
let player2=prompt("Enter game input for player2 :");

player1=player1.toLocaleLowerCase();
player2=player2.toLocaleLowerCase();

if(player1==player2){
    alert("Draw match");
}
else if((player1=="stone" && player2=="sissor")||(player1=="sissor" && player2=="paper")||(player1=="paper" && player2=="stone"))
{
    alert("player1 is winner");
}
else{
alert("player2 is winner")
}