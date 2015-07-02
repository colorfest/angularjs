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
	MCU.Modules 		= {};
	MCU.Configs 		= {};
	MCU.Filters 		= {};
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
	MCU.Modules.MCU.controller("PhasesCtrl", ['$scope', 'phasesService', 
		function ($scope, phasesService)
	{
		var promise = phasesService.getPhases();
		promise.then(function (data)
		{
			$scope.phases = data.data.MCU.Phases;
			console.log($scope.phases);
		})
	}]);
}(MCU.Controllers = MCU.Controllers || {} ));
(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("phases", [ function ()
	{
		return {
			restrict: 'E',
			controller: 'PhasesCtrl',
			templateUrl: MCU.PartialsPath + "/phases.html"
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));
(function (Service, undefined)
{
	MCU.Modules.MCU.service("phasesService", ['$http', '$q', function ($http, $q)
	{
		var deferred = $q.defer();

		$http.get('resources/json/marvel_movies.json').then(function (data)
		{
			deferred.resolve(data);
		});
		this.getPhases = function ()
		{
			return deferred.promise;
		}
	}]);
}(MCU.Service = MCU.Service || {} ));
(function (Controllers, undefined)
{
	MCU.Modules.MCU.controller("upcomingfilmsController", ['$scope', 'phasesService',
		function ($scope, phasesService)
		{
			var promise = phasesService.getPhases();
			promise.then(function (data)
			{
				var allMovies 		= [];
				var phasesLength 	= data.data.MCU.Phases.length;

				//get todays date
				var todaysDate 		= new Date();

				//merge our arrays
				for(var i = 0; i < phasesLength; i++)
				{
					var phasesMovies = data.data.MCU.Phases[i].movies;
					for(var j = 0; j < phasesMovies.length; j++)
					{
						var movieDate 	= new Date(data.data.MCU.Phases[i].movies[j].date);
						if(movieDate > todaysDate)
						{
							allMovies.push(data.data.MCU.Phases[i].movies[j]);
						}
					}
				}
				$scope.films 		= allMovies;
			})
		}])
}(MCU.Controllers = MCU.Controllers || {} ));
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