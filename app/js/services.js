'use strict';

/* Services */

var myLinksServices = angular.module('myLinksServices', ['ngResource']);

myLinksServices.factory('Client', ['$resource', 
	function($resource){
		return $resource('links/clients.json', null, {
			query : {method:'GET', isArray:true}
		});
}]);

myLinksServices.factory('Environment', ['$resource', function($resource) {
	return $resource('links/:envId.json', {}, {
		query : {
			methods: 'GET', 
			params: {envId: 'env'}, 
			isArray: true}
	});
}]);