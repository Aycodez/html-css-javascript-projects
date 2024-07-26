// Getting the element
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

// function to update the background color after each click
btn.addEventListener('click', function(){
	let colorcodes = getRandomNumber();
	console.log(colorcodes);
	let colorCode = `rgba(${colorcodes[0]},${colorcodes[1]},${colorcodes[2]})`
	console.log(colorCode);
	document.body.style.backgroundColor = colorCode;
	color.textContent = colorCode;
	// counter++;


})

// generating random rgb colorcodes
function getRandomNumber() {
	let colorcodes = [];
	for (let i = 0; i < 3; i++) {
		let number = '';
		for(let j = 0; j < 3;j++){
			let num = Math.floor(Math.random() * (colors.length-1)).toString();
			number += num;
		}
		colorcodes.push(number);				
	}
	return colorcodes;
}

