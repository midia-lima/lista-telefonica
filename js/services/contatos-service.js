angular.module('listaTelefonica').factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    }
    var _saveContatos = function (contato) {
        return $http.post(a + "/contatos", contato);
    }
    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos
    }
})

// var pedro = {
//     nome: "Pedro",
//     idade: 16
// };
// console.log(pedro);

// Exemplo de Função Factory
// var criarPessoa = function (nome, idade) {
//     return {
//         nome: nome,
//         idade: idade
//     }
// }
// var maria = criarPessoa("Maria", 20)
// console.log(maria);


