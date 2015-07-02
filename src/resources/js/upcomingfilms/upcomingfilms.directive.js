(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("upcomingfilms", [ function ()
	{
		return {
			restrict: 'E',
			controller: 'upcomingfilmsController',
			templateUrl: MCU.PartialsPath + "/upcomingfilms.html"
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));