//Requerimos mongoose
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//Esquema de usuarios
var JugadorSchema = new mongoose.Schema({
  codigo:String,
  name: String,
  alias: String,
  money: Number,
  photo: String
});

module.exports = mongoose.model('Jugador', JugadorSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
