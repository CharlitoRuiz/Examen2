(function(){
  angular
    .module('myApp')
    .controller('jugadorController', jugadorController);
    function jugadorController(jugadorService,ImageService,Upload, $scope){ //se inyecta el service userService en el 
      //controlador para que se tenga acceso
      //controlador
      var jugadorCtrl = this; //binding del controlador con el html, solo en el controlador
      jugadorCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        jugadorService.getJugador()
          .success(function(data){
            jugadorCtrl.jugadorList = data;
          });
        jugadorService.getPropiedad()
          .success(function(data){
            jugadorCtrl.propiedadList = data;
          });
      }
      init();

      jugadorCtrl.preSave = function(){
        jugadorCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(jugadorCtrl.cloudObj)
          .success(function(data){
            jugadorCtrl.save(data.url);
          });
      }

      jugadorCtrl.save= function(pimage){
        var newJugador ={
          codigo : jugadorCtrl.codigo,
          name : jugadorCtrl.nombre,
          alias : jugadorCtrl.alias,
          money : 1000,
          photo: pimage
        }

        jugadorService.addJugador(newJugador)
        .success(function(data){
          console.log(data);

          jugadorCtrl.codigo = null;
          jugadorCtrl.nombre = null;
          jugadorCtrl.alias = null;
          jugadorCtrl.dinero = null;
          jugadorCtrl.imagen = null;
          init();
        })

      }

      jugadorCtrl.comprarPropiedad = function(){
        var listaJugadores = jugadorCtrl.jugadorList,
            listaPropiedades = jugadorCtrl.propiedadList,
            nombreJugador = jugadorCtrl.jugadorSeleccionado,
            idPropiedadSelect = jugadorCtrl.propiedadSeleccionado._id

        for (var i = 0; i < listaPropiedades.length; i++) {
          var idPropiedad = listaPropiedades[i]._id;
          
          if (idPropiedad == idPropiedadSelect) {
            var NewPropiedad = {
                _id : jugadorCtrl.propiedadList[i]._id,
                name : jugadorCtrl.propiedadList[i].name,
                id_propiedad : jugadorCtrl.propiedadList[i].id,
                posistion : jugadorCtrl.propiedadList[i].posistion,
                price : jugadorCtrl.propiedadList[i].price,
                rent : jugadorCtrl.propiedadList[i].rent,
                housecost : jugadorCtrl.propiedadList[i].housecost,
                group : jugadorCtrl.propiedadList[i].group,
                ownedby : nombreJugador.codigo,
                ownername : nombreJugador.name,
                buildings : jugadorCtrl.propiedadList[i].buildings
            }
                jugadorService.setLocal(NewPropiedad);

            for (var i = 0; i < listaJugadores.length; i++) {
              var jugador = listaJugadores[i].name;
              if (jugador == nombreJugador.name) {
            
              var NewJugador = {
                  _id : jugadorCtrl.jugadorList[i]._id,
                  codigo : jugadorCtrl.jugadorList[i].codigo,
                  name : jugadorCtrl.jugadorList[i].name,
                  alias : jugadorCtrl.jugadorList[i].alias,
                  money : jugadorCtrl.jugadorList[i].money - jugadorCtrl.propiedadList[i].price,
                  photo : jugadorCtrl.jugadorList[i].photo
              }
                jugadorService.setLocalJugador(NewJugador);
                idPropiedad = listaPropiedades[i+1]._id;

            }
          }
        }
      }
              init();
              jugadorCtrl.jugadorSeleccionado = null;
              jugadorCtrl.propiedadSeleccionado = null;
    }
  } //se establece un objeto de angular normal
  
})();
