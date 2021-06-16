angular.module("listaTelefonica").directive("uiAlert", function(){
      
    return {
        // exemplo de diretiva template 
        // template: "<div>uiAlert</div>" 

        // exemplo de diretiva templateUrl
        templateUrl: "view/alert.html" ,
        replace: true,
        restrict: "AE",
        scope: {
            title: "@",
        },
        transclude: true
        // A - Diretiva restrita ao atributo do elemento
        // E - Diretiva restrita ao elemento
    };   
});