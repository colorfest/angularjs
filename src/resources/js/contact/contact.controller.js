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