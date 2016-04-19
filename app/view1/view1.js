'use strict';

angular
    .module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.dids = [
        {
            name: "didA",
            local: "localA",
            assigning: false,
            agents: [{name: 'agent1'}, {name: 'agent2'}],
            unassigned: [
                {
                    name: "agent3",
                    selected: false
                }
            ]
        },
        {
            name: 'didB',
            local: 'localB',
            assigning: false,
            agents: [{name: 'agent2'}],
            unassigned: [
                            {
                                name: "agent1",
                                selected: false
                            },
                            {
                                name: "agent3",
                                selected: false
                            }
                        ]
        }
    ];
}]);