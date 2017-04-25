//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var PropiedadSchema = new mongoose.Schema({
  name:String,
  id_propiedad: String,
  posistion: String,
  price: String,
  rent: String,
  housecost: String,
  group: String,
  ownedby: String,
  ownername: String,
  buildings: String
});

module.exports = mongoose.model('Propiedad', PropiedadSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
