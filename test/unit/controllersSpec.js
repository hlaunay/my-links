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

			$httpBackend.expectGET('links/clientx-bidon.json').
			respond([{category: 'CatA', links: [{title: 'bidon', href: '#', port: '80', decription: 'blabla'}]}]);

			scope = $rootScope.$new();
			ctrl = $controller('MyLinksCtrl', {$scope: scope});
		}));

		it('should create "clients" model with 2 clients fetched from xhr', function() {
			expect(scope.clients).toEqualData([]);
			expect(scope.clientName).toBe('');
			expect(scope.envName).toBe('');
			expect(scope.data).toEqualData([]);

			$httpBackend.flush();

			expect(scope.clients).toEqualData(
				[{name: 'ClientX', envs: ['bidon']}, {name: 'Dede', env: ['bref', 'test']}]);

			expect(scope.clientName).toBe('ClientX');
			expect(scope.envName).toBe('bidon');
			expect(scope.data).toEqualData([{category: 'CatA', links: [{title: 'bidon', href: '#', port: '80', decription: 'blabla'}]}]);
		});
	});
});