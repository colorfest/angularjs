/* use strict */
var app = angular.module('isolateApp', []);

app.controller("AppCtrl", function ($scope, $element)
{
	$scope.useFinisher = function (name, movetype, finisher)
	{
		$element.find('#result').html('' + name + ' used the ' + movetype + ': ' + finisher);
	}
})

.directive("character", function ()
{
	return {
		restrict: 'E',
		scope: {
			name: "@",
			image: "@",
			movetype: "=",
			finishHim: "&"
		},
		templateUrl: 'partials/shield_isolate.html',
		link: function (scope, element, attrs)
		{
			scope.movetypes 	= ["Finisher", "Offensive Move", "Defensive Move"];
			scope.movetype 		= scope.movetypes[0]
		},
		controller: "AppCtrl"
	}
})
