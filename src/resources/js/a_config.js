app.config(function ($routeProvider)
{
	$routeProvider
		.when('/',
		{
			templateUrl: "partials/sample.html",
			controller: "MainPageCtrl"
		})
		.when('/pageTwo',
		{
			template: '<div>This is page <strong>two</strong>!</div>'
		})
		.when('/calendar/:month/:day/:year',
		{
			templateUrl: "partials/calendar.html",
			controller: "CalendarCtrl"
		})
		.otherwise(
		{
			template: '<div><strong>THERE IS NO PAGE HERE!</strong></div>'
		})
})