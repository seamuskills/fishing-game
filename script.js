click = false //clicking?

window.onmousedown = function(){ //if clicking set the variable
	click = true
}
window.onmouseup = function(){ //if not clicking reset the variable
	click = false
}

function setup(){ //on setup
	noStroke() //stop drawing lines
	resizeCanvas(innerWidth,innerHeight) //resizecanvas
	fisher = new Fisher(width/2,height/2+16) //the player
	textAlign(CENTER,CENTER) //text alignment
}

function draw(){ //loop
	switch (loop){
		case "menu":
			menuLoop()
		break
		case "game":
			gameLoop()
		break
	}
}