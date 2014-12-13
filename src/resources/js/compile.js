/* use strict */
var app = angular.module('MyApp', [])
app.controller('MainController', function ($scope)
{
	$scope.labelName = "New Button";
	$scope.newElement = angular.element('<div class="btn btn-default">' +
		$scope.labelName + '</div>');
})

.directive('pageDirective', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a new button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('pre');
					iElement.html('<div class="panel panel-default">Now a panel</div>');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('post');
					iElement.append(scope.newElement);
					debugger;
				}
			}
		}
	}
})

.directive('pageDirectiveTwo', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a second button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('2 compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('2 pre');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('2 post');
					iElement.append(scope.newElement);
					debugger;
				}
			}
		}
	}
})

.directive('pageDirectiveThree', function ()
{
	return {
		restrict: 'E',
		template: '<div>Here is a third button</div>',
		controller: 'MainController',
		scope: '=',
		compile: function (tElem, tAttrs)
		{
			console.log('3 compile it. This is the original compiled DOM.');
			debugger;
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('3 pre');
					debugger;
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('3 post');
					debugger;
				}
			}
		}
	}
})