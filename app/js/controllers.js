(function() {
'use strict';

	angular
		.module('myLinks')
		.controller('MyLinksCtrl', MyLinksCtrl);

	MyLinksCtrl.$inject = ['$scope', '$filter', '$cookies', 'myLinksServices', '$log'];
	function MyLinksCtrl($scope, $filter, $cookies, myLinksServices, $log) {
		var vm = this;

		activate();

		$("#input_search").focus();

		////////////////

		function activate() {
			// init
			vm.clientName = '';
			vm.envName = '';
			vm.cssSuffix = 'default';
			vm.data = [];

			// functions
			vm.setEnvironment = _setEnvironment;
			vm.getNavbarClass = _getNavbarClass;
			vm.getPuceClass = _getPuceClass;
			vm.getAttributesClass= _getAttributesClass;

			vm.clients = myLinksServices.getClients().query(function(){
				// Try to get cookies
				var cookieClientName = $cookies.get('clientName');
				var cookieEnvName = $cookies.get('envName');
				var cookieCssSuffix = $cookies.get('cssSuffix');

				if(angular.isDefined(cookieClientName) && angular.isDefined(cookieEnvName) && angular.isDefined(cookieCssSuffix) ) {
					_setEnvironment(cookieClientName, {name: cookieEnvName, cssSuffix: cookieCssSuffix});
				} else {
					_setEnvironment(vm.clients[0].name, vm.clients[0].envs[0]);
				}
			});
		 }

		 function _setEnvironment(client, env){
			vm.clientName = client;
			vm.envName = env.name;
			vm.cssSuffix = env.cssSuffix;

			//set cookies
			$cookies.put('clientName', client);
			$cookies.put('envName', env.name);
			$cookies.put('cssSuffix', env.cssSuffix);			

			vm.data = myLinksServices.getEnvironment().query({envId: angular.lowercase(client).concat("-").concat(angular.lowercase(env.name))});
			$("#input_search").focus();
		 }

		 function _getNavbarClass(baseName){
			return [baseName, baseName + '-' + vm.cssSuffix];
		 }

		 function _getPuceClass(env){
			 return ['puce', 'navbar-' + env.cssSuffix]; 
		 }

		 function _getAttributesClass(isShown){
			 if(isShown){
				return ['glyphicon', 'glyphicon-minus'];
			 }else{
				 return ['glyphicon', 'glyphicon-plus'];
			 }
		 }
	}
})();