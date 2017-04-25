//Requerimos el modelo  de usuarios
var Propiedad = require('./propiedad.model.js');
var config = require('../../config/database');

module.exports.save = function(req,res){ //exporta el controlador
        var newPropiedad = new Propiedad({
          name:req.body.name,
          id:req.body.id,
          posistion:req.body.posistion,
          price:req.body.price,
          rent:req.body.rent,
          housecost:req.body.housecost,
          group:req.body.group,
          ownedby:req.body.ownedby,
          ownername:req.body.ownername,
          buildings:req.body.buildings
        });

        newPropiedad.save(function(err){
          if(err){
            res.json({success:false,msg:'La propiedad ya se encuentra en la BD.'});
          }else {
            res.json({success:true,msg:'la propiedad se ha registrado correctamente.'});
          }
        });
}

module.exports.findAll = function(req,res){
  Propiedad.find().then(function(propiedades){
    res.send(propiedades);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Propiedad.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Propiedad.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
