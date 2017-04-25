(function(){
  angular
    .module('myApp')
    .config(configuration)

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('jugador',{
          url: '/jugador',
          templateUrl: 'components/jugador/jugador.view.html',
          controller: 'jugadorController',
          controllerAs: 'jugadorCtrl'
        })

        $urlRouterProvider.otherwise('/jugador');
    }


})();
