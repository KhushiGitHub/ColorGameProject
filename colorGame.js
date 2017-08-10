var numSquares = 6
var colors = [];

var pickedColor=pickColor();
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay")
var resetColors = document.getElementById("resetColors")
var h1 = document.querySelector("h1")
// var easyBtn = document.querySelector("#easyBtn")
// var hardBtn = document.querySelector("#hardBtn")
var modeButtons = document.querySelectorAll(".mode");
var clickedColor;

init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}
// easyBtn.addEventListener("click", function()
// {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0;i < squares.length;i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style["background-color"] = colors[i]
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	messageDisplay.textContent="";
// 	h1.style["background-color"] = "steelblue";
// });

// hardBtn.addEventListener("click", function()
// {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++)
// 	{
// 		squares[i].style["background-color"] = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	messageDisplay.textContent="";
// 	h1.style["background-color"] = "steelblue";
// });

function setupSquares()
{
	for(var i=0; i<squares.length; i++)
	{
		//add initial colors to squares
		//squares[i].style["background-color"]=colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function()
		{
			//grab color of clicked squares	
			 clickedColor = this.style["background-color"]
			 //compare color to pickedColor
			 if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor)
				resetColors.textContent = "PLAY AGAIN!"
				h1.style["background-color"] = clickedColor
				// return true;
			}
			else
			{
				this.style["background-color"]="#232323"
				messageDisplay.textContent = "TRY AGAIN!"
			}
		});
	}
}

function reset()
{
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetColors.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style["background-color"] = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style["background-color"] = "steelblue"
	messageDisplay.textContent="";
}

resetColors.addEventListener("click", function()
{
	reset();
});

function changeColors(color)
{
	//loop through all squares
	for(var i = 0; i < squares.length; i++)
	{
		//change each color to match given color
		squares[i].style["background-color"] = color
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}


function generateRandomColor(num)
{
	//make an array
	var arr = []
	//add num random colors to arr
	for(var i = 0; i < num; i++)
	{
		//get a random color and add it into arr
		arr.push(randomColor())
	}
	return arr
}


function randomColor()
{
	//get a random r color
	var r = Math.floor(Math.random() * 256)
	//get a random g color
	var g = Math.floor(Math.random() * 256)
	//get a random b color
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", "  + g + ", "  + b + ")";
	 

}