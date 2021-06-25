angular.module("listaTelefonica").directive("uiAccordions", function () {

    return {
        controller = function ($scope, $element, $attr) {
            var accordions = []
            this.registerAccordion = function(accordion){
                accordions.push(accordion);
            }
            this.closeAll = function(){
                accordions.forEach(function(){
                    accordion.isOpened = false;
                });
            }

        }
    }

});

angular.module("listaTelefonica").directive("uiAccordion", function () {

    var ddo = {}
    ddo.templateUrl = 'view/accordion.html'
    ddo.transclude = 'true'
    ddo.scope = {
        title: "@"
    },
    ddo.require = "^uiAccordions"
    ddo.link = function (scope, element, attr, ctrl) {
        ctrl.registerAccordion(scope)
        scope.open = function () {
            ctrl.closeAll();
            scope.isOpened=!isOpened;
        };
    }
    return ddo;


});