(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("homepage", [ function ()
	{
		return {
			restrict: 'E',
			controller: 'HomePageCtrl',
			link: function (scope, elm, attrs)
			{
				console.log('i am the directive for the home page');
			}
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));