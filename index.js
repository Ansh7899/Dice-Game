var p1=prompt("Enter player 1's name");
var p2=prompt("Enter player 2's name");
var max=6;
var min=1;
var x = Math.floor(Math.random() * (max - min + 1) + min);
var y = Math.floor(Math.random() * (max - min + 1) + min);
if(x==1)
  document.getElementById("img1").setAttribute("src","images/dice1.png");
if(x==2)
  document.getElementById("img1").setAttribute("src","images/dice2.png");
if(x==3)
  document.getElementById("img1").setAttribute("src","images/dice3.png");
if(x==4)
  document.getElementById("img1").setAttribute("src","images/dice4.png");
if(x==5)
  document.getElementById("img1").setAttribute("src","images/dice5.png");
if(x==6)
  document.getElementById("img1").setAttribute("src","images/dice6.png");
if(y==1)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
if(y==2)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
if(y==3)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
if(y==4)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
if(y==5)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
if(y==6)
  document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
if(x>y)
  document.getElementById("heading").innerHTML = p1 + " wins";
if(x<y)
  document.getElementById("heading").innerHTML = p2 + " wins";
if(x==y)
  document.getElementById("heading").innerHTML = "Match is draw... Reload";
