var escena;
var USE_WIREFRAME = false;
var meshFloor;
var camara;
var camara1;
var render;
var objs=[];
var objects = [];
var tan;
var timer=0;
var clock;
var deltaTime;
var keys = {};
var music;
var score=0;

var raycast, raycast2;
var box2;
var objetosConColision = [];
var objetosConColision1 = [];
var isWorldReady = [ false, false ];


    //Aqui es el tamaño     aqui es la posicion
var xg=2, yg=2,zg=2,        xp=0, yp=5, zp= -20.0;

var xg1=2, yg1=2,zg1=2,     xp1=0,yp1=2, zp1= -20.0 ;

var bala;
var keyboard = {};
var player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
var cuboGeometria = new THREE.BoxGeometry(xg, yg, zg);
var cuboGeometria2 = new THREE.BoxGeometry(xg1, yg1, zg1);
 var loadedObject = null;
var cubo; //Añadir la variable cubo para poder 
			//utilizarlo en cualquier parte de nuestro codigo,antes
			// de la funcion StartEscena()
var hola=0,adios=0;
var cambio=null;
window.requestAnimFrame = (
     function(){
             return  window.requestAnimationFrame       ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame    ||
             function( callback ){
                     window.setTimeout(callback, 1000 / 60);
             };
}
) ();

function he(){

	var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
 localStorage.removeItem("score");
 localStorage.setItem("score", score);
document.cookie= 'Has muerto'+today +localStorage.getItem("name")+' tu puntuacion: '+score;
var z= document.coockie;
	alert(document.cookie);
		window.location.assign("file:///C:/Users/Personal/Desktop/MI/Menu.html")

}
function animarEscena(){
        requestAnimFrame(animarEscena); // para ejecutar ciclicamente
		var tans= escena.getObjectByName("terreno");
		var tans1= escena.getObjectByName("seg");
		var tans2= escena.getObjectByName("segs");
		var tans4= escena.getObjectByName('ter');
		var tans3= escena.getObjectByName("pro");
setTimeout(he, 60000);

//Cosas por hacer
/*
1-Timer.Agregar sound y cambio de vision
2-Terminar game
3-Ganar game
*/
objs.forEach(({mixer})=>{mixer.update(clock.getDetal());});

if (isWorldReady[0] && isWorldReady[1]) {
			//Movimiento del camion "animado"
		tans2.rotation.y+=0.005;
			tans2.rotation.z+=0.005;
			if (tans2.rotation.z>=0.010) {
				for (var i = tans2.rotation.z -0.005; i >= 0; i--) {
									tans2.rotation.z-=0.015;
									tans2.rotation.y-=0.015;
				}
			} 
//Persigue al jugador
		tans1.position.x += Math.sin(camara.rotation.y) * (player.speed+0.5);
		tans1.position.z += -Math.cos(camara.rotation.y) * (player.speed+0.5);
		tans2.position.x += Math.sin(camara.rotation.y) * (player.speed+0.5);
		tans2.position.z += -Math.cos(camara.rotation.y) * (player.speed+0.5);

		tans4.position.x += Math.sin(camara.rotation.y) * (player.speed+0.5);
		tans4.position.z += -Math.cos(camara.rotation.y) * (player.speed+0.5);


		//Colisiones
for (var i = 0; i < camara.misRayos.length; i++) {
var rayo = camara.misRayos[i];
raycast.set( camara.position ,  rayo );
var colisiones =
raycast.intersectObjects(objetosConColision, true);
if (colisiones.length > 0) {
if (colisiones[0].distance < 1) {
		cubo.position.x += Math.sin(camara.rotation.y) * (player.speed);
		cubo.position.z += -Math.cos(camara.rotation.y) * (player.speed);
		score++;
		tans2.position.x-= 10;
		alert(score);
//escena.remove(tans3);				
alert("perdistes" );			
 localStorage.removeItem("score");
 localStorage.setItem("score", score);					
	window.location.assign("file:///C:/Users/Personal/Desktop/MI/Menu.html")
		}
							}
							var colisiones1 =
raycast.intersectObjects(objetosConColision1, true);

if (colisiones1.length > 0) {

if (colisiones1[0].distance < 1) {
///Colision con bala-ozelot

	escena.remove(cubo2);
}
						}
												}
												
										}

//Colision disparo camioneta.
for (var a = 0; a < tans1.misRayos2.length; a++) {
var rayo1 = tans1.misRayos2[a];
raycast2.set( tans1.position ,  rayo1 );
var colisiones1 =
raycast2.intersectObjects(objetosConColision1, true);
if (colisiones1.length > 0) {
if (colisiones1[0].distance < 1) {
score++;
		tans1.position.x =-30;
		tans1.position.z =-30;	
escena.remove(cubo2);

								}

							}
												}
for (var a = 0; a < tans2.misRayos2.length; a++) {
var rayo1 = tans2.misRayos2[a];
raycast2.set( tans2.position ,  rayo1 );
var colisiones1 =
raycast2.intersectObjects(objetosConColision1, true);
if (colisiones1.length > 0) {
if (colisiones1[0].distance < 1) {
score++;
		tans2.position.x =-30;
		tans2.position.z =-30;	
escena.remove(cubo2);

								}

							}
												}

for (var a = 0; a < tans4.misRayos2.length; a++) {
var rayo1 = tans4.misRayos2[a];
raycast2.set( tans4.position ,  rayo1 );
var colisiones1 =
raycast2.intersectObjects(objetosConColision1, true);
if (colisiones1.length > 0) {
if (colisiones1[0].distance < 1) {
score++;
		tans4.position.x =-30;
		tans4.position.z =-30;	

								}

							}
												}
              //Keyboard testeo de cambio de camara
var speed=0;
	// Keyboard movement inputs
	if(keyboard[87]){ // W key
		speed=-0.20;



		tans.position.x -= Math.sin(camara.rotation.y) * (player.speed);
		tans.position.z -= -Math.cos(camara.rotation.y) * (player.speed);

		camara.position.x -= Math.sin(camara.rotation.y) * (player.speed);
		camara.position.z -= -Math.cos(camara.rotation.y) * (player.speed);
		camara1.position.x -= Math.sin(camara.rotation.y) * (player.speed);
		camara1.position.z -= -Math.cos(camara.rotation.y) * (player.speed);

	}


if(keyboard[81]){ // Q key
		
escena.remove(tans3);
		escena.remove(adios);
				var tans3= escena.getObjectByName("pro");

	}

if(keyboard[90]){ // Z key
	//Crea la bala
	loadOBJWithMTL("assets/", "projektil OBJ.obj", "projektil OBJ.mtl", (object) => {
object.name="pro";




objetosConColision1.push(object);


		object.position.x=camara1.position.x;
		object.position.z=camara1.position.z;
		object.position.y=camara.position.y;
escena.add(object);

});
		
		escena.add(adios);

	}


		
	if(keyboard[83]){ // S key
		speed=0.20;

		tans.position.x += Math.sin(camara.rotation.y) * (player.speed);
		tans.position.z += -Math.cos(camara.rotation.y) * (player.speed);

		camara.position.x += Math.sin(camara.rotation.y) * (player.speed);
		camara.position.z += -Math.cos(camara.rotation.y) * (player.speed);
		camara1.position.x += Math.sin(camara.rotation.y) * (player.speed);
		camara1.position.z += -Math.cos(camara.rotation.y) * (player.speed);
		
	}
	if(keyboard[65]){ // A key
		// Redirect motion by 90 degrees

		tans.position.x += Math.sin(camara.rotation.y + Math.PI/2) * player.speed;
		tans.position.z += -Math.cos(camara.rotation.y + Math.PI/2) * player.speed;

		camara.position.x += Math.sin(camara.rotation.y + Math.PI/2) * player.speed;
		camara.position.z += -Math.cos(camara.rotation.y + Math.PI/2) * player.speed;

		camara1.position.x += Math.sin(camara.rotation.y + Math.PI/2) * player.speed;
		camara1.position.z += -Math.cos(camara.rotation.y + Math.PI/2) * player.speed;
	}
	if(keyboard[68]){ // D key


		tans.position.x += Math.sin(camara.rotation.y - Math.PI/2) * player.speed;
		tans.position.z += -Math.cos(camara.rotation.y - Math.PI/2) * player.speed;
		
		camara.position.x += Math.sin(camara.rotation.y - Math.PI/2) * player.speed;
		camara.position.z += -Math.cos(camara.rotation.y - Math.PI/2) * player.speed;
		camara1.position.x += Math.sin(camara.rotation.y - Math.PI/2) * player.speed;
		camara1.position.z += -Math.cos(camara.rotation.y - Math.PI/2) * player.speed;

	}
	
	// Keyboard turn inputs
	if(keyboard[37]){ // left arrow key
		camara.rotation.y -= player.turnSpeed;
		tans.rotation.y += player.turnSpeed;


	}


	if(keyboard[39]){ // right arrow key

		camara.rotation.y += player.turnSpeed;
		tans.rotation.y -= player.turnSpeed;
	}

	// Keyboard turn inputs
	if(keyboard[56]){ // 8 key

		camara1.rotation.y -= player.turnSpeed;


	}

	if(keyboard[48]){ // 0 key


		escena.remove(bala);
		bala.position.x =camara1.position.x;
		bala.position.z =camara1.position.z;
		
	}
	if(keyboard[57]){ // 9 key
		camara1.rotation.y += player.turnSpeed;

		
	}


	// Keyboard turn inputs
	if(keyboard[79]){ // o key Disparos

//Dispara la bala

var tans3= escena.getObjectByName("pro");


tans3.scale.z=5;
tans3.scale.y=5;
tans3.scale.x=5;
		tans3.rotation.set(camara1.rotation.x,camara1.rotation.y,(-camara1.rotation.z));
		tans3.position.x -= Math.sin(camara1.rotation.y) * (player.speed);
		tans3.position.z -= -Math.cos(camara1.rotation.y) * (player.speed);
		tans3.position.y=camara.position.y;


escena.add(tans3);
/*
		//Balas guiadas
		bala.position.x -= Math.sin(camara1.rotation.y) * (player.speed);
		bala.position.z -= -Math.cos(camara1.rotation.y) * (player.speed);
		bala.position.y=2;		

		escena.add(bala);

*/

	}
		renderEscena1();
		renderEscena();

}

function starEscena(){
	//render
	render= new THREE.WebGLRenderer(); //Definir render
	render.setClearColor(0x000000,1); //Color limpieza

	render1= new THREE.WebGLRenderer(); //Definir render
	render1.setClearColor(0x000000,1); //Color limpieza

	var canvaswidth=500;
	var canvasheight=500;
	render.setSize(canvaswidth,canvasheight);
	render1.setSize(canvaswidth,canvasheight);

	document.getElementById("canvas").appendChild(render1.domElement) //INdicamos que el render pinte al escena  en el div canvas
	document.getElementById("canvas").appendChild(render.domElement) //INdicamos que el render pinte al escena  en el div canvas



	//Escena
	escena= new THREE.Scene(); //Definir escena


	//Camara
	camara= new THREE.PerspectiveCamera(45, canvaswidth/canvasheight, 0.2,150);//Definimos camara
	camara1= new THREE.PerspectiveCamera(45, canvaswidth/canvasheight, 0.2,150);//Definimos camara
var ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 1.0);
escena.add(ambientLight);

adio = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 1);
adios.position.set(0, 0, 1);

adios = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 1);
adios.position.set(0, 1, 1);



hola = new THREE.DirectionalLight(new THREE.Color(1, 0, 1), 1);
hola.position.set(1, 0, 0);
escena.add(hola);
escena.add(adios);
escena.add(adio);
var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
grid.position.y = -1;
escena.add(grid);


raycast = new THREE.Raycaster();

camara.misRayos = [
new THREE.Vector3(1, 0, 0),
new THREE.Vector3(-1, 0, 0),
new THREE.Vector3(0, 0, 1),
new THREE.Vector3(0, 0, -1),
];


/*
 loadOBJWithMTL("assets/", "box.obj", "box.mtl", (object) => {
object.position.z = -30;
box2 = object.clone();
box2.position.x = 30;
escena.add(object);
escena.add(box2);
objetosConColision.push(object);
objetosConColision.push(box2);

isWorldReady[0] = true;
}

);
*/

/*loadOBJWithMTL("assets/", "jetski.obj", "jetski.mtl", (object) => {
object.position.z = 10;
object.rotation.x = THREE.Math.degToRad(-90);
objetosConColision1.push(object);

escena.add(object);
isWorldReady[1] = true;
});
*/

var loader = new THREE.FBXLoader();
loader.load("assets/anima.fbx", model => {
	var mixer= new THREE.AnimationMixer(model);

model.scale.z=0.10;
model.position.z=-10;
model.scale.y=0.10;
model.scale.x=0.10;
var action= mixer.clipAction(model.animation[0]);
		escena.add(model);

	action.play();
	action.setLoop(THREE.LoopOnce)
	action.timeScale=500;
	objs.push({model,mixer});
	model.name="anima";
});


loadOBJWithMTL("assets/", "SnowTerrain.obj", "SnowTerrain.mtl", (object) => {
object.position.z=-10;
object.scale.z=15;
object.scale.y=1;
object.scale.x=10;
//objetosConColision1.push(object);

escena.add(object);

isWorldReady[0] = true;
isWorldReady[1] = true;
});

loadOBJWithMTL("assets/", "ozelot.obj", "ozelot.mtl", (object) => {

object.scale.z=0.02;
object.scale.y=0.02;
object.scale.x=0.02;

object.position.set(0, player.height-2, -7);
object.name="terreno";


//objetosConColision1.push(object);


escena.add(object);

});



loadOBJWithMTL("assets/", "Jeep_Renegade_2016.obj", "Jeep_Renegade_2016.mtl", (object) => {

object.scale.z=3;
object.scale.y=3;
object.scale.x=3;
object.position.z=40;
object.position.x = 10;

object.name="segs";

raycast2 = new THREE.Raycaster();

object.misRayos2 = [
new THREE.Vector3(1, 0, 0),
new THREE.Vector3(-1, 0, 0),
new THREE.Vector3(0, 0, 1),
new THREE.Vector3(0, 0, -1),
];

tanque = object.clone();
tanque.position.z=-10;
tanque.position.x = 30;
tanque.scale.z=3;
tanque.scale.y=3;
tanque.scale.x=3;

tanque.misRayos2 = [
new THREE.Vector3(1, 0, 0),
new THREE.Vector3(-1, 0, 0),
new THREE.Vector3(0, 0, 1),
new THREE.Vector3(0, 0, -1),
];
tanque.name="seg";

tanque1 = object.clone();
tanque1.position.z=-10;
tanque1.position.x = -30;
tanque1.scale.z=3;
tanque1.scale.y=3;
tanque1.scale.x=3;

tanque1.misRayos2 = [
new THREE.Vector3(1, 0, 0),
new THREE.Vector3(-1, 0, 0),
new THREE.Vector3(0, 0, 1),
new THREE.Vector3(0, 0, -1),
];
tanque1.name="ter";

objetosConColision.push(tanque1)
objetosConColision.push(tanque)
objetosConColision.push(object)
escena.add(tanque1);
escena.add(tanque);
escena.add(object);

});
loadOBJWithMTL("assets/", "DeadTree.obj", "DeadTree.mtl", (object) => {
object.position.z=-10;
object.position.z=10;
object.scale.z=1;
object.scale.y=1;
object.scale.x=1;

object1=object.clone();
object1.position.z=-30;
object1.position.x=15;
object1.scale.z=1;
object1.scale.y=1;
object1.scale.x=1;
escena.add(object1);

object2=object.clone();
object2.position.z=10;
object2.position.x=30;
object2.scale.z=1;
object2.scale.y=1;
object2.scale.x=1;
escena.add(object2);

object3=object.clone();
object3.position.z=-40;
object3.position.x=-20;
object3.scale.z=1;
object3.scale.y=1;
object3.scale.x=1;
escena.add(object3);

object4=object.clone();
object4.position.z=-40;
object4.position.x=-40;
object4.scale.z=1;
object4.scale.y=1;
object4.scale.x=1;
escena.add(object4);
//objetosConColision1.push(object);

escena.add(object);

});


loadOBJWithMTL("assets/", "projektil OBJ.obj", "projektil OBJ.mtl", (object) => {

object.position.z=20;
object.scale.z=.10;
object.scale.y=.10;
object.scale.x=.10;

objetosConColision1.push(object);

object.name="pro";




escena.add(object);

});
/*
var spriteMap = new THREE.TextureLoader().load( "assets/sprits.png" );
var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xffffff } );
var sprite = new THREE.Sprite( spriteMaterial );
sprite.position.set(camara.position.x,camara.position.y,camara.position.z);
sprite.scale.z=5;
sprite.scale.y=5;
sprite.scale.x=5;

escena.add( sprite );
*/
/*
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath("assets/");
mtlLoader.load("jetski.mtl");
var objLoader = new THREE.OBJLoader();
objLoader.setMaterials("jetski.mtl");
objLoader.setPath("assets/");
objLoader.load("jetski.obj");
onLoadCallback();
*/


/*
//Piso
	floorGeometry = new THREE.PlaneGeometry( 100, 100, 100, 100 );
				// Roate the floor "down"
				floorGeometry.rotateX( - Math.PI / 2 );

    floorMaterial = new THREE.MeshBasicMaterial( { color:0xFF0000 } );
				floorMesh = new THREE.Mesh( floorGeometry, floorMaterial );
				escena.add( floorMesh );
				*/
	//Cubo
var cuboMateriales = [
 new THREE.MeshBasicMaterial({color:0x33FF00}),
 new THREE.MeshBasicMaterial({color:0x00CCFF}),
 new THREE.MeshBasicMaterial({color:0xFF0000}),
 new THREE.MeshBasicMaterial({color:0xFFCC00}),
 new THREE.MeshBasicMaterial({color:0x99FFFF}),
 new THREE.MeshBasicMaterial({color:0xFFFFFF})
];



var cuboMaterial = new THREE.MeshFaceMaterial(cuboMateriales);
var ze=2;

cuboGeometria.name=('Col');

cubo = new THREE.Mesh(cuboGeometria, cuboMaterial);
cubo.position.set(xp, yp, zp);

//escena.add(cubo);

bala = new THREE.Mesh(cuboGeometria, cuboMaterial);



camara.position.set(0, player.height, -5);
camara.lookAt(new THREE.Vector3(0,player.height,0));
escena.add(camara);//Añadimos la camara a la escena
;
camara1.position.set(0, 2.8, -8);
camara1.lookAt(new THREE.Vector3(0,2.8,0));
escena.add(camara1);//Añadimos la camara a la escena

cubo2 = new THREE.Mesh(cuboGeometria2, cuboMaterial);
cubo2.position.set(xp1, yp1, zp1);
escena.add(cubo2);
}	


function keyDown(event){
	keyboard[event.keyCode] = true;

}

function keyUp(event){
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

function renderEscena(){

	render.render(escena,camara); //Dibujar la escena


}

function renderEscena1(){

	render1.render(escena,camara1); //Dibujar la escena


}


function muestraInformacion(elEvento) {
var evento = elEvento || window.event;
var coordenadaX = evento.clientX;
var coordenadaY = evento.clientY;
var coordenadaXx = evento.screenX;
var coordenadaYy = evento.screenY;


/*if (coordenadaX > 500 && coordenadaY >500) {
alert("Has pulsado  derecha abajo");	
}


alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " +
coordenadaY+ ","+ coordenadaXx+ ","+ coordenadaYy);
}
*/
}
function manejador(elEvento) {
var evento = elEvento || window.event;
var caracter = evento.charCode || evento.keyCode;


if (caracter==13) {

$("#Opciones").modal("toggle");
    
}

//alert("El carácter pulsado es: " + String.fromCharCode(caracter));
}
function loadOBJWithMTL(path, objFile, mtlFile, onLoadCallback) {
var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath(path);
mtlLoader.load(mtlFile, (materials) => {
var objLoader = new THREE.OBJLoader();
objLoader.setMaterials(materials);
objLoader.setPath(path);
objLoader.load(objFile, (object) => {
onLoadCallback(object);
});

});
}

var v;
function nombre(){
 var num = document.getElementById("nombre").value;
 localStorage.removeItem("name");
 localStorage.setItem("name", num);
// Accesar data almacenada
alert( "Tanque = " + localStorage.getItem("name"));
	return num;
}


function castelvania(){

v = document.getElementsByTagName("audio")[2];
v.pause();
v.currentTime = 0
v.play();

}
function tetris(){

v = document.getElementsByTagName("audio")[1];
v.pause();
v.currentTime = 0
v.play();

}

function megaman(){

v = document.getElementsByTagName("audio")[0];
v.pause();
v.currentTime = 0
v.play();

}


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";

  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

	function webGLStart(){
		//Funcion llamada cuando se carga la pagina
		//(onload)
		loadOBJWithMTL();
		nombre();
		starEscena();
		animarEscena();
		renderEscena1();
		renderEscena();
		he();
		sound();

		music= new sound("sound/Meg.mp3");
		music.play();
}

document.onkeypress = manejador;
document.onclick = muestraInformacion;

 