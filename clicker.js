let points = 0;
let clickValue = 1;
let clickUpgradeCost = 20;
let autoClickValue = 0.1;
let autoClickerLevel = 0;
let autoClickerCost = 50;
let rate = 0.5;

function addPoint() {
  points += clickValue;
  document.getElementById("points").innerHTML = points.toFixed(1);
}

function upgradeClick() {
  if (points >= clickUpgradeCost) {
    points -= clickUpgradeCost;
    clickValue += 0.5;
	rate +=10;
    clickUpgradeCost = (clickValue * 10) + rate;
    document.getElementById("points").innerHTML = points.toFixed(1);
    document.getElementById("upgrade-click-cost").innerHTML = clickUpgradeCost.toFixed(1);
  }
}

function buyAutoClick() {
  if (points >= autoClickerCost) {
    points -= autoClickerCost;
    autoClickerLevel += 1;
    autoClickerCost *= 2;
    document.getElementById("points").innerHTML = points.toFixed(1);
    document.getElementById("auto-click-cost").innerHTML = "Upgrade Auto Click (Cost: " + autoClickerCost.toFixed(1) + " points)";
    setInterval(function() {
      points += autoClickValue * autoClickerLevel;
      document.getElementById("points").innerHTML = points.toFixed(1);
    }, 1000);
  }
}
function matrixed(){
  let a = document.getElementById("cheatcodes").value
if(a == "phoneguy"){//dude you cracked the matrix
  points += 100;
  document.getElementById("points").innerHTML = points.toFixed(1);
  document.getElementById("cheatcodes").value = "";
}else{
  console.log("fail");
  document.getElementById("cheatcodes").value = "";
}
}
console.log("K-DYNAMICS 2023");
