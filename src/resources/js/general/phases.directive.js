(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("phases", [ function ()
	{
		return {
			restrict: 'E',
			templateUrl: MCU.PartialsPath + "/phases.html"
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));