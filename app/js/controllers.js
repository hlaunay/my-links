'use strict';

/* controllers */

var myLinksControllers = angular.module('myLinksControllers', []);

myLinksControllers.controller('MyLinksCtrl', function($scope){
	$scope.data = [ 
		{'name' : 'ClientA',
		'envs' : [
			{'type': 'production',
			'categories' : [
				{'name' : 'cat1',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]},
				{'name' : 'cat2',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]}
			]},
			{'type': 'pre-production',
			'categories' : [
				{'name' : 'cat1',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]},
				{'name' : 'cat2',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]}
			]}
		]},
		{'name' : 'ClientA',
		'envs' : [
			{'type': 'production',
			'categories' : [
				{'name' : 'cat1',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]},
				{'name' : 'cat2',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]}
			]},
			{'type': 'pre-production',
			'categories' : [
				{'name' : 'cat1',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]},
				{'name' : 'cat2',
				'links' : [
					{'title' : 'link1',
					'href' : '#'},
					{'title' : 'link2',
					'href' : '#'}
				]}
			]}
		]}];

		$scope.currentClient = $scope.data[0].name
		$scope.currentEnv = $scope.data[0].envs[0];

});