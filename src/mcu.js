(function (MCU, undefined)
{
	/**
	 * @ngdoc function 
	 * @name MCU
	 * @id MCU
	 * @description
	 * 
	 * Set up our MCU website parameters for AngularJS.
	**/
	MCU.Version 		= "0.0.0";
	MCU.PartialsPath 	= "partials/";
	MCU.Service 		= {};
	MCU.Factory 		= {};
	MCU.Modules 		= {};
	MCU.Configs 		= {};
	MCU.Controllers 	= {};
	MCU.Directives 		= {};

}(window.MCU = window.MCU || {} ));
(function (Modules, undefined)
{
	/**
	 * @ngdoc object
	 * @id MCU
	 * @name MCU
	 * @description
	 *
	 * This Module initializes the MCU Angular module.
	**/
	Modules.MCU = angular.module("mcu", ['ngRoute']);

}(MCU.Modules = MCU.Modules || {} ));
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
			.otherwise({
				redirectTo: '/',
				templateUrl: MCU.PartialsPath + '/home.html'
			})
	}]);

}(MCU.Configs = MCU.Configs || {} ));
(function (Controllers, undefined)
{
	MCU.Modules.MCU.controller("HomePageCtrl", ['$scope', function ($scope)
	{
		console.log('controller for the home page');
	}]);
}(MCU.Controllers = MCU.Controllers || {} ));
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
(function (Controllers, undefined)
{
	MCU.Modules.MCU.controller("PhasesCtrl", ['$scope', 'phasesService', function ($scope, phasesService)
	{
		/*var promise = phasesService.getPhases();
		promise.then(function (data)
		{
			$scope.phases = data;
			console.log($scope.phases);
		})*/
	}]);
}(MCU.Controllers = MCU.Controllers || {} ));
(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("phases", [ function ()
	{
		return {
			restrict: 'E',
			link: function (scope, elm, attrs)
			{
				
			}
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));
(function (Service, undefined)
{
	MCU.Modules.MCU.service("phasesService", [ '$http', '$q', function ($http, $q)
	{
		/*var deferred = $q.defer();

		$http.get('resources/json/marvel_movies.json').then(function (data)
		{
			deferred.resolve(data);
		});

		this.getPhases = function ()
		{
			return deferred.promise;
		}*/
	}]);
}(MCU.Service = MCU.Service || {} ));