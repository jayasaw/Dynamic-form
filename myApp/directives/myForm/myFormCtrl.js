(function(){
    'use strict';
    angular.module('app')
        .controller('myFormCtrl', function(){
        var vm  = this;
    })

angular.module('app')
    .directive('myForm', function(){
        return {
            restrict : 'E',
            templateUrl : 'myApp/directives/myForm/myForm.html',
            controller : 'myFormCtrl',
            controllerAs : 'myForm',
            bindToController : true, 
            scope : {
               configForm : '=',
               model : '='
             
           
            }
        }
})

})();