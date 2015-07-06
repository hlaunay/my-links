'use strict';

/* controllers */

var myLinksControllers = angular.module('myLinksControllers', []);

myLinksControllers.controller('MyLinksCtrl', ['$scope', 'Client', function($scope, Client) {
	$scope.clients = Client.query();
	
}]);