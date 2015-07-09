'use strict';

describe('myLinks App', function() {

	beforeEach(function() {
		browser.get('app/index.html');
	});

	it('search input must have the focus', function() {
		var input = element(by.model('query'));
		expect(input.getAttribute('id')).toEqual(browser.driver.switchTo().activeElement().getAttribute('id'));
	});

	it('should display a menu with environments links', function() {
		var clientsList = element.all(by.repeater('client in clients'));
		expect(clientsList.count()).toBeGreaterThan(1);

		var environmentList = element.all(by.css('.environment'));
		expect(environmentList.count()).toBeGreaterThan(1);		
	});
});


