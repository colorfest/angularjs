/* use strict */

var app = angular.module('MyApp', ['ngRoute'])

.controller("MainCtrl", function ($scope)
{
	$scope.message = "I am an annotated message.";
})