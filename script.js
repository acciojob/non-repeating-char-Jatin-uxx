function firstNonRepeatedChar(a) {
 // Write your code here
	let n = new Set();
let map = new Map();
	for (let i = 0; i < a.length; i++) {
  n.add(a.charAt(i)); 
  if (map.has(a.charAt(i))) {
    map.set(a.charAt(i), map.get(a.charAt(i)) + 1);
  } else {
    map.set(a.charAt(i), 1); 
  }
}

// Find and print unique characters
for (let [char, count] of map) {
  if (count === 1) {
    console.log(char);
  } 
  else
  {
      console.log("null")
  }
} 
	
}
const input = prompt("Enter a string");
 alert(firstNonRepeatedChar(input)); 
