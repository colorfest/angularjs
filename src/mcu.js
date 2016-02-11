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
			.when('/contact', {
				templateUrl: MCU.PartialsPath + '/contact.html'
			})
			.otherwise({
				redirectTo: '/',
				templateUrl: MCU.PartialsPath + '/home.html'
			})
	}]);

}(MCU.Configs = MCU.Configs || {} ));
(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("maincontent", ['$timeout', '$compile', '$window', 
		function ($timeout, $compile, $window)
	{
		return {
			restrict: 'A',
			link: function (scope, elm, attrs)
			{
				$timeout(function ()
				{
					scope.getFilm = function (filmID)
					{
						scope.newFilm 		= scope.allFilms[filmID];

						var mainContent 	= elm.find('.nextFilmContainer');
						mainContent.html("<div class=\"hero-unit\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-4\">\n\t\t\t\t\t<figure>\n\t\t\t\t\t\t<img src=\"{{newFilm.thumbnail}}\" alt=\"{{newFilm.title}}\" \/>\n\t\t\t\t\t\t<figcaption>{{newFilm.title}}<\/figcaption>\n\t\t\t\t\t<\/figure>\n\t\t\t\t<\/div>\n\n\t\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t\t<h1>{{newFilm.title}}<\/h1>\n\n\t\t\t\t\t<h2>{{newFilm.date | date: 'MMM dd, yyyy'}}<\/h2>\n\n\t\t\t\t\t<p>{{newFilm.synopsis}}<\/p>\n\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><strong>Starring: <\/strong>{{newFilm.cast}}<\/li>\n\t\t\t\t\t\t<li><strong>Director: <\/strong>{{newFilm.director}}<\/li>\n\t\t\t\t\t\t<li><strong>Writers: <\/strong>{{newFilm.writers}}<\/li>\n\t\t\t\t\t<\/ul><div><strong>Rating: <\/strong>{{newFilm.rating}}<\/div><div><strong>Box Office: <\/strong>{{newFilm.boxoffice | currency}}<\/div>\n\t\t\t\t<\/div>\n\t\t\t<\/div>");
						$compile(mainContent.contents())(scope);
						$window.scrollTo(0,0);
					}
				}, 300);
			}
		}

	}])
}(MCU.Directives = MCU.Directives || {} ));
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
				var pastMovies 		= [];
				var allPhasesMovies = [];
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
						//upcoming films
						if(movieDate > todaysDate)
						{
							allMovies.push(data.data.MCU.Phases[i].movies[j]);
						}

						//past films
						if(movieDate < todaysDate)
						{
							pastMovies.push(data.data.MCU.Phases[i].movies[j]);
						}

						//entire list
						allPhasesMovies.push(data.data.MCU.Phases[i].movies[j]);

					}
				}
				$scope.films 				= allMovies;
				$scope.pastFilms 			= pastMovies;
				$scope.$parent.allFilms 	= allPhasesMovies;
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
					console.log(MCU);
				}, 300);
			}
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));
(function (Controllers, undefined)
{
	MCU.Modules.MCU.controller("ContactController", ['$scope', '$http',
		function ($scope, $http)
		{
			$scope.result 			= 'hidden';
			$scope.resultMessage 	= 'message';
			$scope.contactData;
			$scope.submitButtonDisabled 	= false;
			$scope.submitted 				= false;
			$scope.submit = function (contactForm)
			{
				console.log(contactForm);
				$scope.submitted 				= true;
				$scope.submitButtonDisabled 	= true;
				if(contactForm.$valid)
				{
					$http({
						method: 'POST',
						url: '',
						headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
					}).success(function (data)
					{
						if(data.success)
						{
							$scope.submitButtonDisabled 		= true;
							$scope.resultMessage 				= data.message;
							$scope.result 						= 'bg-success';
						}
						else
						{
							$scope.submitButtonDisabled 		= false;
							$scope.resultMessage				= data.message;
							$scope.result 						= 'bg-danger';
						}
					});
				}
				else
				{
					$scope.submitButtonDisabled 			= false;
					$scope.resultMessage 					= "Failed to Submit.";
					$scope.result 							= 'bg-danger';
				}
			}
		}])

}(MCU.Controllers = MCU.Controllers || {} ))