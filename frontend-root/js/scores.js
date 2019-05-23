var nameItem = $('#score-items > * .col-6');
var scoreItem = $('#score-items > * .col-4');

var scores = [];

/* 
console.log(nameItem[0]);

for (let index = 0; index < scores.length; index++) {
	nameItem[index].innerText = (scores[index].name);
	scoreItem[index].innerText = (scores[index].score);
} */

var obtenerScore = (dificultad) => {
	console.log("SCORES DE DIFICULTAD", dificultad);
	$.ajax({
		type: "GET",
		url: "/highscore",
		data: { players: dificultad },
		success: (res) => {
			console.log(res);
			fillScores(res[0]);
		},
		dataType: 'json'
	})
}

var defaultData = { nombre: "-", puntuacion: "-" };

var fillScores = (data) => {
	for (let index = 0; index < 10; index++) {
		var val = data[index] || defaultData;

		nameItem[index].innerText = (val.nombre);
		scoreItem[index].innerText = (val.puntuacion);
	}
}

//Vacias todo
fillScores([]);
obtenerScore();