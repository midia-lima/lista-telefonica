angular.module('listaTelefonica').service("operadorasAPI", function ($http, config) {

    this.getOperadoras = function () {
        return $http.get(config.baseUrl + "/operadoras")
    }
})

// Exemplo Função Constructor
// var Pessoa = function (idade, nome) {
//     this.nome = nome;
//     this.idade = idade;
// }
// var carlos = new Pessoa("Carlos, 25")
// console.log(carlos);