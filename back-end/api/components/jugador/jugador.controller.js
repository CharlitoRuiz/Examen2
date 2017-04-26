//Requerimos el modelo  de usuarios
var Jugador = require('./jugador.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador

        var newJugador = new Jugador({
          codigo:req.body.codigo,
          name:req.body.name,
          alias:req.body.alias,
          money:req.body.money,
          photo:req.body.photo,
          bio:req.body.bio
        });

        newJugador.save(function(err){
          if(err){
            res.json({success:false,msg:'El jugador ya existe en la BD.'});
          }else {
            res.json({success:true,msg:'El jugador se ha registrado correctamente.'});
          }
        });
}

module.exports.findAll = function(req,res){
  Jugador.find().then(function(jugadores){
    res.send(jugadores);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Jugador.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Jugador.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
