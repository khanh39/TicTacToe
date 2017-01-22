var playerSwitch = 1;
var main = function(btn){

if(playerSwitch === 1){
    document.getElementById(btn).value = "X";
    document.getElementById(btn).disabled = "disabled";
    playerSwitch += 1;
    winner();

}else if(playerSwitch === 2){
   document.getElementById(btn).value = "O";
   document.getElementById(btn).disabled = "disabled";
   playerSwitch -= 1;
   winner();
}

function winner(){
if(
document.getElementById("btn1").value == "X" && document.getElementById("btn2").value == "X" &&
document.getElementById("btn3").value == "X" || document.getElementById("btn4").value == "X" && document.getElementById("btn5").value == "X" &&
document.getElementById("btn6").value == "X" || document.getElementById("btn7").value == "X" && document.getElementById("btn8").value == "X" &&
document.getElementById("btn9").value == "X" || document.getElementById("btn1").value == "X" && document.getElementById("btn5").value == "X" &&
document.getElementById("btn9").value == "X" || document.getElementById("btn3").value == "X" && document.getElementById("btn5").value == "X" &&
document.getElementById("btn7").value == "X" || document.getElementById("btn1").value == "X" && document.getElementById("btn4").value == "X" &&
document.getElementById("btn7").value == "X" || document.getElementById("btn2").value == "X" && document.getElementById("btn5").value == "X" &&
document.getElementById("btn8").value == "X" || document.getElementById("btn3").value == "X" && document.getElementById("btn6").value == "X" &&
document.getElementById("btn9").value == "X"){

   var output = document.getElementById("outtput");
   output.innerHTML = "<b><i>X</i></b> is the winner!"
   playerSwitch = 1;
   resetGame();
    }else if(
document.getElementById("btn1").value == "O" && document.getElementById("btn2").value == "O" &&
document.getElementById("btn3").value == "O" || document.getElementById("btn4").value == "O" && document.getElementById("btn5").value == "O" &&
document.getElementById("btn6").value == "O" || document.getElementById("btn7").value == "O" && document.getElementById("btn8").value == "O" &&
document.getElementById("btn9").value == "O" || document.getElementById("btn1").value == "O" && document.getElementById("btn5").value == "O" &&
document.getElementById("btn9").value == "O" || document.getElementById("btn3").value == "O" && document.getElementById("btn5").value == "O" &&
document.getElementById("btn7").value == "O" || document.getElementById("btn1").value == "O" && document.getElementById("btn4").value == "O" &&
document.getElementById("btn7").value == "O" || document.getElementById("btn2").value == "O" && document.getElementById("btn5").value == "O" &&
document.getElementById("btn8").value == "O" || document.getElementById("btn3").value == "O" && document.getElementById("btn6").value == "O" &&
document.getElementById("btn9").value == "O"){

   var output = document.getElementById("outtput");
   output.innerHTML = "<b><i>O</i></b> is the winner!"

   playerSwitch = 1;
   resetGame();
}//End else if..................

}//End function.................

function resetGame(){
document.getElementById("btn1").value = "";
document.getElementById("btn2").value = "";
document.getElementById("btn3").value = "";
document.getElementById("btn4").value = "";
document.getElementById("btn5").value = "";
document.getElementById("btn6").value = "";
document.getElementById("btn7").value = "";
document.getElementById("btn8").value = "";
document.getElementById("btn9").value = "";

document.getElementById("btn1").disabled = ""; document.getElementById("btn2").disabled = "";
document.getElementById("btn3").disabled = ""; document.getElementById("btn4").disabled = ""; document.getElementById("btn5").disabled = "";
document.getElementById("btn6").disabled = ""; document.getElementById("btn7").disabled = ""; document.getElementById("btn8").disabled = "";
document.getElementById("btn9").disabled = "";
}//End of resetGame function....

};//End of main function............

var resetGame = function(){
document.getElementById("btn1").value = ""; document.getElementById("btn2").value = "";
document.getElementById("btn3").value = ""; document.getElementById("btn4").value = ""; document.getElementById("btn5").value = "";
document.getElementById("btn6").value = ""; document.getElementById("btn7").value = ""; document.getElementById("btn8").value = "";
document.getElementById("btn9").value = "";

document.getElementById("btn1").disabled = ""; document.getElementById("btn2").disabled = "";
document.getElementById("btn3").disabled = ""; document.getElementById("btn4").disabled = ""; document.getElementById("btn5").disabled = "";
document.getElementById("btn6").disabled = ""; document.getElementById("btn7").disabled = ""; document.getElementById("btn8").disabled = "";
document.getElementById("btn9").disabled = "";

var output = document.getElementById("outtput");
   output.innerHTML = "";
}//End of resetGame button function...
