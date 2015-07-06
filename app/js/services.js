'use strict';

/* Services */

var myLinksServices = angular.module('myLinksServices', ['ngResource']);

myLinksServices.factory('Client', ['$resource', 
	function($resource){
		return $resource('links/clients.json', null, {
			query : {method:'GET', isArray:true}
		});
}]);