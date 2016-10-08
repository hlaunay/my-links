(function() {
'use strict';

	angular
		.module('myLinks')
		.factory('myLinksServices', myLinksServices);

	myLinksServices.$inject = ['$resource'];
	function myLinksServices($resource) {
		var service = {
			getClients: _getClients,
			getEnvironment: _getEnvironment
		};
		
		return service;

		////////////////
		function _getClients() { 
			return $resource('links/clients.json', null, {
				query : {method:'GET', isArray:true}
			});
		}

		function _getEnvironment(){
			return $resource('links/:envId.json', {}, {
				query : {
						methods: 'GET', 
						params: {envId: 'env'}, 
						isArray: true
				}
			});
		}
	}
})();