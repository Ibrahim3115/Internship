function main(){
   gl();
   gr();
   gl();
   gr();
   gl();
}
function gl(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}
function gr(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnRight();
   move();
   turnRight();
}