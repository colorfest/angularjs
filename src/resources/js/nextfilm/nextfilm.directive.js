(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("nextfilm", [ '$timeout', function ($timeout)
	{
		return {
			restrict: 'E',
			controller: 'upcomingfilmsController',
			link: function (scope, elm, attr)
			{
				console.log(scope);
				$timeout(function ()
				{
					scope.newFilm 		= scope.films[0];
					console.log(scope.films);
				}, 300);
			}
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));