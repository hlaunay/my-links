'use strict';

/* controllers */

var myLinksControllers = angular.module('myLinksControllers', []);

myLinksControllers.controller('MyLinksCtrl', ['$scope', '$filter', 'Client', 'Environment', function($scope, $filter, Client, Environment) {
	// init
	$scope.clientName = '';
	$scope.envName = '';
	$scope.data = [];

	$scope.setEnvironment = function(client, name) {
		$scope.clientName = client;
		$scope.envName = name;

		$scope.data = Environment.query({envId: angular.lowercase(client).concat("-").concat(angular.lowercase(name))});
		$("#input_search").focus();
	};

	$scope.clients = Client.query(function(){
		$scope.setEnvironment($scope.clients[0].name, $scope.clients[0].envs[0]);
	});
	$("#input_search").focus();
}]);