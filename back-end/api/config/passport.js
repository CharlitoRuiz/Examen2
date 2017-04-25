var JwtStrategy = require('passport-jwt').Strategy;
var Jugador = require('../models/jugador.model');
var Propiedad = require('../models/propiedad.model');
var config = require('../config/database');

module.exports = function(passport){
  var opts = {};
  opts.secretOrKey = 'ksk';
  passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    
    Jugador.find({id:jwt_payload.sub},function(err,jugador){
      if(err){
        return done(err,false);
      }
      if(jugador){
        done(null,jugador);
      }else{
        done(null,false);
      }
    });

    Propiedad.find({id:jwt_payload.sub},function(err,propiedad){
      if(err){
        return done(err,false);
      }
      if(propiedad){
        done(null,propiedad);
      }else{
        done(null,false);
      }
    });

  }));
};
