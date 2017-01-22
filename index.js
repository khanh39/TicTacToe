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
