/* use strict */
.directive("buttonDirective", function ()
{
	return {
		restrict: 'AE',
		transclude: false,
		template: '<button class="btn btn-primary" type="button">' +
		'Accio Code <data-ng-transclude></data-ng-transclude>' +
		'</button>'
	}
})