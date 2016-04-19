'use strict';

var view2module = angular
    .module('myApp.view2', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
}]);



view2module.controller('View2Ctrl', [function() {

}]);