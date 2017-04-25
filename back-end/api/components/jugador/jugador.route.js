var express = require('express');
var	router = express.Router();
var jugadorController = require('./jugador.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/jugador')
  .post(function(req, res){
    jugadorController.save(req,res);
 	});

router.route('/jugador')
  .get(function(req, res){
    jugadorController.findAll(req,res);
  });
router.route('/jugador/:id')
  .delete(function(req, res){
    jugadorController.remove(req,res);
 	});
router.route('/jugador')
  .put(function(req, res){
    jugadorController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
