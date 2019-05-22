

function resalta(elEvento) {
var evento = elEvento || window.event;
switch(evento.type) {
case 'mouseover':
this.style.borderColor = 'black';
break;
case 'mouseout':
this.style.borderColor = 'silver';
break;
}

}

function muestraInformacion(elEvento) {
var evento = elEvento || window.event;
var coordenadaX = evento.clientX;
var coordenadaY = evento.clientY;
var coordenadaXx = evento.screenX;
var coordenadaYy = evento.screenY;

if (coordenadaX > 500 && coordenadaY >500) {
alert("Has pulsado  derecha abajo");	
}


alert("Has pulsado el ratón en la posición: " + coordenadaX + ", " +
coordenadaY+ ","+ coordenadaXx+ ","+ coordenadaYy);
}



function manejador(elEvento) {
var evento = elEvento || window.event;
var caracter = evento.charCode || evento.keyCode;

alert("El carácter pulsado es: " + String.fromCharCode(caracter));
}
window.onload = function() {
document.getElementById("seccion").onmouseover = resalta;
document.getElementById("seccion").onmouseout = resalta;
document.onkeypress = manejador;
document.onclick = muestraInformacion;

}






