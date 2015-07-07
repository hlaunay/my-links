'use strict';

/* app */

var myLinks = angular.module('myLinks', ['ngRoute', 'myLinksControllers', 'myLinksServices']);

myLinks.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
		otherwise({
			templateUrl: 'partials/links-list.html',
			controller: 'MyLinksCtrl'
		});
}]);
