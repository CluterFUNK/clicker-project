let points = 0;
let clickValue = 1;
let autoClickValue = 0.1;
let autoClickerLevel = 0;
let autoClickerCost = 50;

function addPoint() {
	points += clickValue;
	document.getElementById("points").innerHTML = points.toFixed(1);
}

function upgradeClick() {
	if (points >= clickValue * 10) {
		points -= clickValue * 10;
		clickValue += 0.5;
		document.getElementById("points").innerHTML = points.toFixed(1);
		document.getElementById("upgrade-click-cost").innerHTML = (clickValue * 10).toFixed(1);
	}
}

function buyAutoClick() {
	if (points >= autoClickerCost) {
		points -= autoClickerCost;
		autoClickerLevel += 1;
		autoClickerCost *= 2;
		document.getElementById("points").innerHTML = points.toFixed(1);
		// document.getElementById("auto-click-cost").innerHTML = autoClickerCost.toFixed(1);
        document.getElementById("auto-click-cost").innerHTML = "Upgrade Auto Click (Cost: " + autoClickerCost.toFixed(1) + " points)";
		setInterval(function() {
			points += autoClickValue * autoClickerLevel;
			document.getElementById("points").innerHTML = points.toFixed(1);
		}, 1000);
	}
}
console.log("K-DYNAMICS 2023")
