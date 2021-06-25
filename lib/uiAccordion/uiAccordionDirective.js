angular.module('ui',[]);

angular.module('ui').run(function(templateCache) {
    $templateCache.put('view/accordion.html','<div class="ui-accordion-title" ng-click="open()">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});



angular.module("ui").directive("uiAccordions", function () {

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

angular.module("ui").directive("uiAccordion", function () {

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