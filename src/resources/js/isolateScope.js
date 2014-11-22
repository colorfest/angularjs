/* use strict */
var app = angular.module("isolateApp", []);

app.controller("AppCtrl", function ($scope, $element)
{
	$scope.getMove = function (name, movetype, move)
	{
		console.log('' + name + ' performed a ' + movetype +
			' ' + move );
	}

	$scope.movetypes 	= ['Finisher', 'Offensive Move', 'Defensive Move'];
	$scope.movetype 	= $scope.movetypes[0];
})

.directive("character", function ()
{
	return {
		restrict: 'E',
		scope: {
			name: "@",
			image: "@",
			movetype: "=",
			useMove: '&'
		},
		templateUrl: 'partials/shield_isolate.html',
		controller: 'AppCtrl'
	}
})