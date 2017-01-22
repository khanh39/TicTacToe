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
   
