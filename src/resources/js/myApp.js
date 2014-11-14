/* use strict */
var app = angular.module('MyApp', []);
app.directive('walterwhite', function () 
{
	return {
		restrict: 'E',
		transclude: true,
		template: '<h2>I am Heisenberg</h2>'
	}
});