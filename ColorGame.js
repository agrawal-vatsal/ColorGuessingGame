var square = []; // Objects made for all the square divs
var k = 6; // It is the number of squares presently on the board, 6 for hard mode 3 for easy
var pickedColor; // It will contain the color of the div that needs to be clicked for winning
for(var i = 1; i <= k; i++) {
	square[i - 1] = document.querySelector("#a" + i);
}  // All square divs are given an object in javascript
for(var i = 0; i < k; i++)
{
	square[i].addEventListener("click", function() {
		if(this.style.backgroundColor != pickedColor) {
			document.querySelector("#message").textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
		else {
			document.querySelector("#message").textContent = "Correct!";
			document.querySelector(".blue-background").style.backgroundColor = this.style.backgroundColor;
			for(var j = 0; j < k; j++) {
				square[j].style.backgroundColor = this.style.backgroundColor;
			}
			document.querySelector("#reset").textContent = "Play Again?";
		}
	}); /* An event listener is the added to all the squares
	First it checks whether the clicked div color is same as that of the rgb color asked for
	If the color is different then it makes the color of the div to the background color
	If it mathes then all the other squares are given that color and also the title bar changes its color to the color of the selected div 
	Also the text of the New colors button changes to Play again*/
}
function rand() {
	return (Math.floor(Math.random() * 256));
} // It generates some random number between 0 & 255
document.querySelector("#reset").addEventListener("click", function() {
	window.location.href=window.location.href;
});
//It adds an event listener to the new colors button, On being clicked it refreshes the window
var colors = [];
function start() {
	for(var i = 0; i < k; i++) {
		colors[i] = {
			r: rand(), 
			g: rand(),
			b: rand() 
		};
	} // It generates random numbers for making different colors for all the squares
	for(var i = 0; i < k; i++) {
		square[i].style.backgroundColor = 'rgb(' + [colors[i].r, colors[i].g, colors[i].b].join(',') + ')';
	}
	// It sets the color to all the squares
	var ans = Math.floor(Math.random() * k);
	// It randomly selects the number of the color to be selected from the values 0 to k - 1
	pickedColor = 'rgb(' + colors[ans].r + ', ' + colors[ans].g + ', ' + colors[ans].b + ')';
	// It sets the value of the picked color to the value of the color of the present at ans position
	var r = document.querySelector("#r");
	var g = document.querySelector("#g");
	var b = document.querySelector("#b");
	r.textContent = colors[ans].r;
	g.textContent = colors[ans].g;
	b.textContent = colors[ans].b;
}
// It sets the numbers present at the title bar using the color code of the answer color
var easy = document.querySelector("#easy");
// It is the object for the easy button
var hard = document.querySelector("#hard");
// It is the object for the hard button
easy.addEventListener("click", function() {
	hard.classList.remove("selected");
	easy.classList.add("selected");
	var s4 = document.querySelector("#a4");
	var s5 = document.querySelector("#a5");
	var s6 = document.querySelector("#a6");
	if(s4 !== null) {
		s4.parentNode.removeChild(s4);
		s5.parentNode.removeChild(s5);
		s6.parentNode.removeChild(s6);
	}
	k = 3;
	start();
});
/*
	It is an event listener to the easy button
	It first removes the class "selected" from the hard object
	Then it adds the class "selected" to easy object
	The class selected makes the background of the easy button bluish which gives the button a look that it is selected
	Then the last three divs are provided with an object variable
	they are checked if they are present in the html by comparing for their object with null
	If the object is null that means that the div is not present in the html
	If it is not null that means the div is present in the html
	if it is present then they are deleted
	Then it sets the value of k to be 3
	and the start function is called so that the colors to all the divs can be given again
*/
var parent = document.querySelector("#parent");
// It is the object of the parent div to all the squares with colors
function createNewNode() {
	var div = document.createElement("div");
	div.classList.add("square");
	parent.appendChild(div);
	return div;
}
// It creates a new div node, add required looks to it by adding the class square to it, adds it to the parent object and returns the div object
hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	var s4 = document.querySelector("#a4");
	var s5 = document.querySelector("#a5");
	var s6 = document.querySelector("#a6");
	if(s4 === null) {
		s4 = createNewNode();
		s4.setAttribute("id", "a4");
	}
	if(s5 === null) {
		s5 = createNewNode();
		s5.setAttribute("id", "a5");
	}
	if(s6 === null) {
		s6 = createNewNode();
		s6.setAttribute("id", "a6");
	}
	k = 6;
	for(var i = 4; i <= k; i++) {
		square[i - 1] = document.querySelector("#a" + i);
	}
	for(var i = 3; i < k; i++) {
		square[i].addEventListener("click", function() {
			if(this.style.backgroundColor != pickedColor) {
				document.querySelector("#message").textContent = "Try Again";
				this.style.backgroundColor = "#232323";
			}
			else {
				document.querySelector("#message").textContent = "Correct!";
				document.querySelector(".blue-background").style.backgroundColor = this.style.backgroundColor;
				for(var j = 0; j < k; j++) {
					square[j].style.backgroundColor = this.style.backgroundColor;
				}
				document.querySelector("#reset").textContent = "Play Again?";
			}
		});
	}
	start();
})
/*
	It adds selected class to the hard object and deletes it from the easy object
	It makes object for the three squares that are to be added;
	Then it checks if each of the object is null or not
	If the object is null that means the square is not present in the html and needs to be added
	if the object is not null that means that the square are already present there and there is no need for anyhting to add
	if the squares are null then each of div is created and is given the required id
	then the value of k is set to 6
	all the new squares created are added to the square array
	all the newly created square array elements are given an eventlistener the same that was given to them earlier
	the start function called so that the program can start again
*/
start();