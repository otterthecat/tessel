var checkIt = function(str){
	return str === str.split("").reverse().join("");
}

console.log(checkIt("will fail"));
console.log(checkIt("racecar"));