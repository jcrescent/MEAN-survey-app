app.controller("newController", ['$scope', 'UsersFactory', '$location', '$cookies', function($scope, UsersFactory, $location, $cookies){
	$scope.user = $cookies.getObject('user'); 
	$scope.errors;

	$scope.addNewQuestion = function(){
		$scope.newQuestion.option1.value = 0
		$scope.newQuestion.option2.value = 0
		$scope.newQuestion.option3.value = 0
		$scope.newQuestion.option4.value = 0
		$scope.newQuestion._userid = $scope.user._id
		UsersFactory.createQuestion($scope.newQuestion, function(results){
			$location.url('/dashboard')
		})
	}
}])