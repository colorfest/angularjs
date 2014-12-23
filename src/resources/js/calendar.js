.controller("CalendarCtrl", function ($scope, $routeParams)
{
	$scope.model = {
		message: "Date: " + $routeParams.month + " / " 
		+ $routeParams.day + " / "
		+ $routeParams.year
	}
})