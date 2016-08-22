app.factory('UsersFactory', ['$http', function($http) {

function UsersFactory(){
	this.validation = function(user, callback){
		$http.post('/add_user', user).then(function(results){
			callback(results.data)
		})
	}
	this.createQuestion = function(question, callback){
		$http.post('/add_question', question).then(function(results){
			callback(results.data)
		})
	}
	this.getQuestions = function(callback){
		$http.post('/get_questions').then(function(results){
			callback(results.data)
		})
	}
	this.getQuestion = function(id, callback){
		console.log(id)
		$http.post('/get_question', id).then(function(results){
			callback(results.data)
		})
	}
	this.countVote1 = function(message_id, callback){
		$http.post('/add_vote1', message_id).then(function(results){
			callback(results.data)
		})
	}
	this.countVote2 = function(message_id, callback){
		$http.post('/add_vote2', message_id).then(function(results){
			callback(results.data)
		})
	}
	this.countVote3 = function(message_id, callback){
		$http.post('/add_vote3', message_id).then(function(results){
			callback(results.data)
		})
	}
	this.countVote4 = function(message_id, callback){
		$http.post('/add_vote4', message_id).then(function(results){
			callback(results.data)
		})
	}
	this.removeQuestion =function(question, callback){
		$http.post(`/remove/${question}`).then(function(results){
			callback(results.data)
		})
	}
}
  return new UsersFactory();	
}]);
