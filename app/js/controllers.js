'use strict';

/* controllers */

var myLinksControllers = angular.module('myLinksControllers', ['ngCookies']);

myLinksControllers.controller('MyLinksCtrl', ['$scope', '$filter', '$cookies', 'Client', 'Environment', 
	function($scope, $filter, $cookies, Client, Environment) {

		// init
		$scope.clientName = '';
		$scope.envName = '';
		$scope.data = [];


		$scope.setEnvironment = function(client, name) {
			$scope.clientName = client;
			$scope.envName = name;

			//set cookies
			$cookies.put('clientName', client);
			$cookies.put('envName', name);			

			$scope.data = Environment.query({envId: angular.lowercase(client).concat("-").concat(angular.lowercase(name))});
			$("#input_search").focus();
		};

		$scope.clients = Client.query(function(){
			
			// Try to get cookies
			var cookieClientName = $cookies.get('clientName');
			var cookieEnvName = $cookies.get('envName');

			if(angular.isDefined(cookieClientName) && angular.isDefined(cookieEnvName)) {
				$scope.setEnvironment(cookieClientName, cookieEnvName);
			} else {
				$scope.setEnvironment($scope.clients[0].name, $scope.clients[0].envs[0]);
			}
		});
		$("#input_search").focus();
	}
]);