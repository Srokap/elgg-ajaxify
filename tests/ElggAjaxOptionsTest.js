ElggAjaxOptionsTest = TestCase("ElggAjaxOptionsTest");

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsNoArgs = function() {
	assertNotUndefined(elgg.ajax.handleOptions());
	
};

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsUrl = function() {
	var url = 'url',
		result = elgg.ajax.handleOptions(url);
	
	assertEquals(url, result.url);
};

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsDataOnly = function() {
	var options = {},
		result = elgg.ajax.handleOptions(options);
	
	assertEquals(options, result.data);
};

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsOptions = function() {
	var options = {data:{arg:1}},
		result = elgg.ajax.handleOptions(options);
	
	assertEquals(options, result);
};

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsUrlThenDataOnly = function() {
	var url = 'url',
		options = {arg:1},
		result = elgg.ajax.handleOptions(url, options);
	
	assertEquals(url, result.url);
	assertEquals(options, result.data);
};

ElggAjaxOptionsTest.prototype.testHandleOptionsAcceptsUrlThenOptions = function() {
	var url = 'url',
	options = {data:{arg:1}},
	result = elgg.ajax.handleOptions(url, options);
	
	assertEquals(url, result.url);
	assertEquals(options.data, result.data);
};