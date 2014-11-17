/* use strict */
var app = angular.module('MyApp', []);

app.directive('interactiveBtn', function ()
{
	return {
		restrict: 'A',
		link: function (scope, element, attrs)
		{
			element.bind('mouseenter', function ()
			{
				element[0].innerText = "Rolled Over";
			});

			element.bind('mouseleave', function ()
			{
				element[0].innerText = "Rolled Out";
			});
		}
	}
})

.directive('walterwhite', function () 
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
})