//controllers
angular.module('listaTelefonica').controller('ListaTelefonicaCtrl', function ($scope, $filter, $http, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.app = "Lista Telefônica"

    $scope.contatos = [
        { nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "Celular" } },
        { nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" } },
        { nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "Celular" } }
    ]

    $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
        { nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
        { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1 },
        { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2 }
    ]   

    //exemplo de uma função GET array de contatos
    var carregarContatos = function () {
        contatosAPI.getContatos.sucesss(function (data, status) {
            $scope.contatos = data;
        }).error(function (data, status) {
            console.log(data);
            $scope.error = "Não foi possível carregar os dados!"
        })
    }

    //exemplo de uma função GET array de operadoras
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().sucesss(function (data, status) {
            $scope.operadoras = data;

        })
    }

    //função que adiciona o contato no array contatos 
    $scope.adicionarContato = function (contato) {        
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        contatosAPI.saveContatos(contato).sucesss(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    }

    //função que apaga contatos
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        })
    }

    //função que desabilita o botão se não tem contatos selecionados
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado
        })
    }

    //função que ordena por nome e telefone
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;

    }
})