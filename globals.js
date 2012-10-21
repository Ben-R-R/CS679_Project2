// Globals

var WIDTH = 800;
var HEIGHT = 600;

// some of these numbers are voodoo numbers
var VIEW_ANGLE = 60;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;

var scene = null; 

// Grab our container div(from cube example code)
var container = null; //document.getElementById("container");

var reqFrame = null;

var playerMesh = null;
var terrainMesh = null;


var mainCamera = null;
var camXrot = 0;
var camYrot = 0;

// input variables 
var dragging = false;
var dragPixX = 0;
var dragPixY = 0;

var frameDragPixX = 0;
var frameDragPixY = 0;

var keysDown = {}; //holds all keys currently pressed

// function called per loop to update the input
var updateInput = null;

var STATE = {
	DEAD: 0,
	ALIVE: 1
	
};

// These numbers are not meant to be meaning full, Tests should be done
// if(type === ELEMENT.PLAYER_BULLET)
var ELEMENT = {
	PLAYER_BULLET: 0,
	ENEMY_SHIP: 1,
	SCENERY: 2,
	ENEMY_BULLET: 3,
	PLAYER: 4,
	PARTICLE: 5
}

function UserException(message) {
   this.message = message;
   this.name = "UserException";
}


function distanceSqrd(v1, v2){
	var sqrd = function(x){
		return Math.pow(x, 2);	
	};
	
	return sqrd(v1.x - v2.x) + sqrd(v1.y - v2.y) + sqrd(v1.z - v2.z)

}
//Float modulo division
function fm(val,div){
	if(div <= 0){
		throw UserException("fm: div must be greater than 0");
	}
	while(val > div){
		val -= div;
	}
	return val;
}

var light = null;
