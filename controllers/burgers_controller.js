var express = require('express');
var router = express.Router();
var burgers = require('./../models');

models.burgers.sync();

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	models.burgers.findAll().then(function(result){
		object={burgers:result}
		res.render('partials/allBurgers', object)
	});
});

router.post('/burgers/create', function (req, res) {
	models.burgers.create({
		name: req.body.name
	});
		res.redirect('/burgers');
});

router.put('/burgers/update/:id', function (req, res) {
	models.burgers.update({
		devoured: req.body.devoured
	}, {
		where: {id: req.params.id}
	}).then(function(){
		res.redirect('/burgers');
	});
});

module.exports = router;
