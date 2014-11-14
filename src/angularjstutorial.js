/* use strict */
var app = angular.module('MyApp', []);
app.directive('walterwhite', function () 
{
	return {
		restrict: 'E',
		transclude: true,
		link: function (scope, element, attrs)
		{
			console.log(scope);
			console.log(element);
			console.log(attrs);
		}
	}
	/*return {
		restrict: 'E',
		transclude: true,
		template: '<h2>I am Heisenberg</h2>'
	}*/
});