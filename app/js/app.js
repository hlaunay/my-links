(function () {
	'use strict';

	angular.module('myLinks', ['ngRoute', 'ngCookies', 'ngResource', 'ngAnimate'])
		.config(['$routeProvider',
			function ($routeProvider) {
				$routeProvider.
				otherwise({
					templateUrl: 'partials/links-list.html',
					controller: 'MyLinksCtrl as linksCtrl'
				});
			}
		]);
})();