var square = [];
var k = 6;
var pickedColor;
for(var i = 1; i <= k; i++) {
	square[i - 1] = document.querySelector("#a" + i);
}
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
	});
}
function rand() {
	return (Math.floor(Math.random() * 256));
}
document.querySelector("#reset").addEventListener("click", function() {
	window.location.href=window.location.href;
});
var colors = [];
function start() {
	for(var i = 0; i < k; i++) {
		colors[i] = {
			r: rand(), 
			g: rand(),
			b: rand() 
		};
	}
	for(var i = 0; i < k; i++) {
		square[i].style.backgroundColor = 'rgb(' + [colors[i].r, colors[i].g, colors[i].b].join(',') + ')';
	}
	var ans = Math.floor(Math.random() * k);
	pickedColor = 'rgb(' + colors[ans].r + ', ' + colors[ans].g + ', ' + colors[ans].b + ')';
	var r = document.querySelector("#r");
	var g = document.querySelector("#g");
	var b = document.querySelector("#b");
	r.textContent = colors[ans].r;
	g.textContent = colors[ans].g;
	b.textContent = colors[ans].b;
}
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
easy.addEventListener("click", function() {
	hard.classList.remove("selected");
	easy.classList.add("selected");
	var s4 = document.querySelector("#a4");
	var s5 = document.querySelector("#a5");
	var s6 = document.querySelector("#a6");
	if(s4 !== null)
		s4.parentNode.removeChild(s4);
	if(s5 !== null)
		s5.parentNode.removeChild(s5);
	if(s6 !== null)
		s6.parentNode.removeChild(s6);
	k = 3;
	start();
});
var parent = document.querySelector("#parent");
function createNewNode() {
	var div = document.createElement("div");
	div.classList.add("square");
	parent.appendChild(div);
	return div;
}
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
});
start();