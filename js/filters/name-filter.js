angular.module('listaTelefonica').filter("name", function () {

    // Converte nomes, escritos totalmente em letra minúsculas ou maiúsculas, deixando apenas a primeira letra maiúscula e as outras minúsculas.
    return function (input) {

        var listaDeNomes = input.split(" ");

        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            if(/(da|de)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();;
        })
        console.log(listaDeNomes);
        console.log(listaDeNomesFormatada);
        return listaDeNomesFormatada.join(" ");



    }

})