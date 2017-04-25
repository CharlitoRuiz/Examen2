var express = require('express');
var	router = express.Router();
var propiedadController = require('./propiedad.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/propiedad')
  .post(function(req, res){
    propiedadController.save(req,res);
 	});

router.route('/propiedad')
  .get(function(req, res){
    propiedadController.findAll(req,res);
  });
router.route('/propiedad/:id')
  .delete(function(req, res){
    propiedadController.remove(req,res);
 	});
router.route('/propiedad')
  .put(function(req, res){
    propiedadController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
