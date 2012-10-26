function playControl() {
	if ( 80 in keysDown && keysDown[80]){
		if (gState == GAMESTATE.PLAYING){
			gState = GAMESTATE.PAUSED;
			ctx.fillStyle = "black";
			ctx.globalAlpha = 0.8;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "red";
			ctx.font = "bold 50px Verdana";	
			ctx.fillText("Game Paused", (canvas.width/2) - 210, canvas.height/2);
			ctx.fillStyle = "yellow";
			ctx.font = "bold 30px Verdana";	
			ctx.fillText("Press P to continue", (canvas.width/2) - 180, canvas.height/2 + 50);
			Player.flySpeed = 0;
			clock.stop(); 
			bgElement.pause();
		}
		else if (gState == GAMESTATE.PAUSED){
			gState = GAMESTATE.PLAYING;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			Player.flySpeed = 40;
			clock.start();
			bgElement.play();
		}
	}
	
	if ( 13 in keysDown && keysDown[13]){
		if (gState == GAMESTATE.MENU){
			gState = GAMESTATE.PLAYING;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			Player.flySpeed = 40;
			bgElement.play();
		}
	}
	
	if ( 67 in keysDown && keysDown[67]){
		if (!Player.isWalking){
			if ( cMode == 1) 
				cMode = 0;
			else if (cMode == 0)
				cMode = 1;
		}
	}

}