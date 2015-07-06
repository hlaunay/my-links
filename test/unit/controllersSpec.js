'use strict';

/* controllersSpec */

describe('myLinks controllers', function() {

	/* matcher */
	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

	beforeEach(module('myLinks'));
	beforeEach(module('myLinksServices'));

	describe('MyLinksCtrl', function() {
		var scope, ctrl, $httpBackend;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('links/clients.json').
			respond([{name: 'ClientX', envs: ['bidon']}, {name: 'Dede', env: ['bref', 'test']}]);

			scope = $rootScope.$new();
			ctrl = $controller('MyLinksCtrl', {$scope: scope});
		}));

		it('should create "clients" model with 2 clients fetched from xhr', function() {
			expect(scope.clients).toEqualData([]);
			$httpBackend.flush();

			expect(scope.clients).toEqualData(
				[{name: 'ClientX', envs: ['bidon']}, {name: 'Dede', env: ['bref', 'test']}]);
		});
	});
});