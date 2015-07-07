'use strict';

/* servicesSpec */

describe('service', function() {

	// load modules
	beforeEach(module('myLinks'));

	// Test service availability
	it('check the existence of Client factory', inject(function(Client) {
		expect(Client).toBeDefined();
	}));

	it('check the existence of Environment factory', inject(function(Environment) {
		expect(Environment).toBeDefined();
	}));
});