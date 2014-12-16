.controller('MainController', function ($scope)
{
	$scope.labelName = "New Button";
	$scope.newElement = angular.element('<div class="btn btn-default">' +
		$scope.labelName + '</div>');
})

.directive('compileDirective', function ($compile)
{
	return {
		restrict: 'E',
		template: '<div>New compile template</div>',
		controller: 'MainController',
		link: function (scope, elm, attrs)
		{
			var compileIt 			= $compile(scope.newElement);
			var content 			= compileIt(scope);
			elm.append(content);
		}
	}
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
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('pre');
					iElement.html('<div class="panel panel-default">Now a panel</div>');
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('post');
					iElement.append(scope.newElement);
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
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('2 pre');
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('2 post');
					iElement.append(scope.newElement);
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
			return {
				pre: function preLink (scope, iElement, iAttrs)
				{
					console.log('3 pre');
				},
				post: function postLink (scope, iElement, iAttrs)
				{
					console.log('3 post');
				}
			}
		}
	}
})