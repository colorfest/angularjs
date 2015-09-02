(function (Configs, undefined)
{
	MCU.Modules.MCU.config(['$routeProvider', function ($routeProvider)
	{
		$routeProvider
			.when('/', {
				templateUrl: MCU.PartialsPath + '/home.html'
			})
			.when('/films', {
				templateUrl: MCU.PartialsPath + '/films.html'
			})
			.when('/characters', {
				templateUrl: MCU.PartialsPath + '/characters.html'
			})
			.when('/phase1', {
				templateUrl: MCU.PartialsPath + '/phase1.html'
			})
			.when('/phase2', {
				templateUrl: MCU.PartialsPath + '/phase2.html'
			})
			.when('/phase3', {
				templateUrl: MCU.PartialsPath + '/phase3.html'
			})
			.when('/contact', {
				templateUrl: MCU.PartialsPath + '/contact.html'
			})
			.otherwise({
				redirectTo: '/',
				templateUrl: MCU.PartialsPath + '/home.html'
			})
	}]);

}(MCU.Configs = MCU.Configs || {} ));