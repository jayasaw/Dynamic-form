(function () {
    'use strict';
    angular.module('app')
        .controller('myGridCtrl', function () {
            var vm = this;
        })

    angular.module('app')
        .directive('myGrid', function () {
            return {
                restrict: 'E',
                templateUrl: 'myApp/directives/myGrid/myGrid.html',
                controller: 'myGridCtrl',
                controllerAs: 'myGrid',
                bindToController: true,
                scope: {
                    gridSetting: '=',
                    rowData : '=',
                    remove : '&'
                }
            }
        });

})();