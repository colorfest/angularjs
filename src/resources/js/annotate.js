/**
 * @ngdoc controller
 * @name MyApp.controller:MainCtrl
 * @description
 *
 * This is the main controller. It creates a variable
 * "message" on the scope and defines it with a string.
 * <pre>

 		<div data-ng-controller="MainCtrl"></div>
 		
 * </pre>
**/
.controller("MainCtrl", function ($scope)
{
	$scope.message = "I am an annotated message.";
})

/**
 * @ngdoc directive
 * @name MyApp.directive:maindirective
 * @restrict A
 * @priority 1000
 * @description
 *
 * This is the main directive of the application. It
 * is restricted to attributes and uses the 
 * Main Controller.
**/
.directive("maindirective", function ()
{
	return {
		restrict: 'A',
		transclude: false,
		controller: 'MainCtrl'
	}
})