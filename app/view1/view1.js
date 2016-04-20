'use strict';

var didConfigModule = angular.module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .factory("DidConfigService", ['$http', function($http) {
        var service = {};

        service.getAllDidInfos = function() {
        };

        service.getAgentsInfoForDid = function(did) {
        };

        service.assginAgentToDid = function(agent, did, callback) {
        };

        service.removeAgentFromDid = function(agent, did, callback) {
        };

        return service;
    }]);




var didsPanelCtrl = didConfigModule.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.dids = [
        {
            name: "didA",
            local: "localA",
            assigning: false,
            assignedAgents: {
                agent1: { name: 'agent1' },
                agent3: { name: 'agent3' },
            },
            unassignedAgents: {
                agent2: { name: 'agent2' },
            }
        },
        {
            name: 'didB',
            local: 'localB',
            assigning: false,
            assignedAgents: {
                agent1: { name: 'agent1' },
            },
            unassignedAgents: {
                agent2: { name: 'agent2' },
                agent3: { name: 'agent3' },
            }
        }
    ];
}]);

var singleDidConfigCtrl = didConfigModule.controller('SingleDidConfigCtrl', ['$scope', function($scope) {

    // controller init function
    $scope.init = function(didInfo) {
        $scope.didInfo = didInfo;
    }

    $scope.getAgentsWithAssignedState = function(ifAssigned) {
        var result = [];
        for (var key in $scope.didInfo.agents) {
            if ($scope.didInfo.agents[key].assigned == ifAssigned) {
                result.push(key);
            }
        }
        return result;
    }

    // assign agent to did
    $scope.assignAgent = function(agent) {
        $scope.didInfo.assignedAgents[agent.name] = agent;
        delete $scope.didInfo.unassignedAgents[agent.name];
    }

    // remove agent from did
    $scope.removeAgent = function(agent) {
        $scope.didInfo.unassignedAgents[agent.name] = agent;
        delete $scope.didInfo.assignedAgents[agent.name]
    }

}]);