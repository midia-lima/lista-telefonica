//módulo
angular.module('listaTelefonica', ["ngMessages", "ngRoute", "serialGenerator"])
.config(function ($routeProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/contato', {
        templateUrl: 'view/contato.html',
        controller: 'ListaTelefonicaCtrl'
       
    });

})