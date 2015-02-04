/* use strict */

var app = angular.module('MyApp', ['ngRoute'])

.controller("MainCtrl", ['$scope', function ($scope)
{
	$scope.message = "I am an annotated message.";
}])