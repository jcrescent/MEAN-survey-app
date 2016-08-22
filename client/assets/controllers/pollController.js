app.controller('pollController', ['$scope', 'UsersFactory', '$location', '$cookies', '$routeParams', function($scope, UsersFactory, $location, $cookies, $routeParams){
	$scope.question;
	$scope.oneQuestion = function(){
		UsersFactory.getQuestion($routeParams, function(result){
			console.log(result)
			$scope.question = result
		})
	}
	$scope.oneQuestion()

	$scope.addVote1 = function(){
		UsersFactory.countVote1($routeParams, function(result){
			$scope.oneQuestion();
		})
	}
	$scope.addVote2 = function(){
		UsersFactory.countVote2($routeParams, function(result){
			$scope.oneQuestion();
		})
	}
	$scope.addVote3 = function(){
		UsersFactory.countVote3($routeParams, function(result){
			$scope.oneQuestion();
		})
	}
	$scope.addVote4 = function(){
		UsersFactory.countVote4($routeParams, function(result){
			$scope.oneQuestion();
		})
	}
}])