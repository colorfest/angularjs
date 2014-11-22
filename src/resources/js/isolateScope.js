/* use strict */
var app = angular.module("isolateApp", []);

app.controller("AppCtrl", function ($scope, $element)
{
	$scope.useMove = function (obj)
	{
		console.log(obj);
	}
})

.directive("character", function ()
{
	return {
		restrict: 'E',
		scope: {
			name: "@",
			image: "@"
		},
		templateUrl: 'partials/shield_isolate.html'
	}
})