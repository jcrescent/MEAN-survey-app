app.controller('dashboardController', ['$scope', 'UsersFactory', '$location', '$cookies', function($scope, UsersFactory, $location, $cookies){
	$scope.user = $cookies.getObject('user');
	$scope.questions = [];
	$scope.isUser;
	$scope.allQuestions = function(){
		UsersFactory.getQuestions(function(results){
			$scope.questions = results
			console.log(results)
		})
	}
	$scope.allQuestions()
	$scope.delete = function(question){
		console.log(question)
		UsersFactory.removeQuestion(question, function(results){
			
		})
		$scope.allQuestions()
	}
}]);
