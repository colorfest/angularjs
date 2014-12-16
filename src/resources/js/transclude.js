.directive("buttonDirective", function ()
{
	return {
		restrict: 'AE',
		transclude: true,
		template: '<button class="btn btn-primary" type="button">' +
		'Accio Code <data-ng-transclude></data-ng-transclude>' +
		'</button>'
	}
})