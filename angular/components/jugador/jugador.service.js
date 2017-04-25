(function(){
  angular
  .module('myApp')
  .service('jugadorService', jugadorService);

  function jugadorService($http){

    var publicAPI = {
      addJugador : _addJugador,
      getJugador : _getJugador,
      getPropiedad : _getPropiedad,
      setLocal : localStoragePropiedad,
      setLocalJugador : localStorageJugador
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _addJugador(pJugador){
      return $http.post('http://localhost:3000/api/jugador',pJugador);
    }

    function _getJugador(){
      return $http.get('http://localhost:3000/api/jugador');
    }

    function _getPropiedad(){
      return $http.get('http://localhost:3000/api/propiedad');
    }

    function localStorageJugador(pJugador){
      return $http.put('http://localhost:3000/api/jugador',pJugador);
    }

    function localStoragePropiedad(pPropiedad){
      return $http.put('http://localhost:3000/api/propiedad',pPropiedad);
    }
}

})();



/*/////////////////////////////////
    function _setUsers(pUser){
      //users.push(pUser);
      return $http.post('http://localhost:8000/api/users',pUser);

    }

    function _getUsers(){
      return $http.get('http://localhost:8000/api/users');
    }

    function _deleteUsers(id){
      return $http.delete('http://localhost:8000/api/users/' + id);
    }
    function _updateUsers(pUser){
      console.log(pUser);
      return $http.put('http://localhost:8000/api/users',pUser);
    }

    function _getId(){
      var id = Number(localStorage.getItem('id'));
      if(id==null){
        id = 0;
      }else{
        id++;
      }
      return id;
    }
    function _setId(pid){
    localStorage.setItem('id', pid);

    }

  }

})();*/