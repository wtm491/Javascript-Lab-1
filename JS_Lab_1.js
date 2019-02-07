let name1 = prompt("Give me name 1: ");
let name2 = prompt("Give me name 2: ");
let name3 = prompt("Give me name 3: ");

let x = name1.length;
let y = name2.length;
let z = name3.length;

if (x > y && x > z) {
  alert(name1 + " has the longest name!")
} else if (y > x && y > z){
  alert(name2 + " has the longest name!")
} else if (z > x && z > y) {
  alert(name3  + " has the longest name!")
}

if(x === y) {
	alert(name1 + " and " + name2 + " are the same length")
}

if(x === z) {
	alert(name1 + " and " + name3 + " are the same length")
}

if (y === z) {
	alert(name2 + " and " + name3 + " are the same length")
}

if(x === y && x === z) {
	alert("All names are the same length!")
}
