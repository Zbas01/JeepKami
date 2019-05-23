const router = require('express').Router();
const config = require('../config');
const mysql = require('mysql2');

//Conexion mysql
var con = mysql.createConnection(config);

con.connect(function (err) {
	if (err) throw err;
	console.log(`Connected to '${config.user}@${config.host} to the database '${config.database}'`);
});

router.get('/highscore', function (req, res, next) {

	var players = req.query.players || 0;
	console.log(players);

	//Hace el request a la BD
	con.query(`CALL ver(${players});`,
		(err, results, fields) => {
			if (err) {
				console.log(err);
				return res.status(500);
			}
			res.status(200).send(results);
		}
	);
});

router.post('/highscore', function (req, res, next) {

	//Carga los datos del body
	var { players, score, name } = req.body;
	//Verifica si estan todos
	if (score == undefined || name == undefined || players == undefined)
		return res.status(418).send({ data: req.body, msg: "Incomplete data" });

	con.query(`CALL agregar(${score},"${name}", ${players});`,
		(err, results, fields) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
			res.status(200).send(results);
		}
	);
});

module.exports = router;
