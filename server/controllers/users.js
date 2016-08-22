var mongoose = require('mongoose');
var Users = mongoose.model('Users');
var Questions = mongoose.model('Questions');

function UsersController(){
	this.add_or_login_user = function(req,res){
		Users.findOne({name: req.body.name}, function(err, user){
			if(user === null){
				var new_user = new Users({name: req.body.name})
    			new_user.save(function(err){
    				if(err){
    					console.log('could not add new user')
    					res.json(err)
    				}else{
    					console.log('added')
    					res.json(new_user)
    				}
    			})
			}else{
				res.json(user)
			}
		})
    }
	this.add_question = function(req, res){
	 	Users.findOne({_id: req.body._userid}, function(err, user){
			var new_question = new Questions({name: req.body.name, option1: req.body.option1, option2: req.body.option2, option3:req.body.option3, option4: req.body.option4, value: req.body.value})
			new_question._user = req.body._userid
			new_question.save(function(err){
				if(err){
					res.json(err)
				}
				user._questions.push(new_question);
				user.save(function(err){
					if(err){
						res.json(err)
					}else{
						res.send()
					}
				})
			})	
		})
	}
	this.get_questions = function(req, res){
		Questions.find({})
		.populate('_user')
		.exec(function(err, questions){
			if(err){
				console.log('get users failed')
			} else{
				res.json(questions)
			}	
		})
	}
	this.get_question = function(req, res){
		console.log(req.body)
		Questions.findOne({_id: req.body.id}, function(err, question){
			if(err){
				console.log('get message failed')
				res.json(err)
			}else{
				res.json(question)
			}
		})
	}
	this.add_vote1 = function(req, res){
		Questions.findOne({_id: req.body.id}, function(err, question){
			question.option1.value += 1
			question.save(function(err){
				if(err){
					res.json(err)
				}else{
					res.send()
				}
			})
		})
	}
	this.add_vote2 = function(req, res){
		Questions.findOne({_id: req.body.id}, function(err, question){
			question.option2.value += 1
			question.save(function(err){
				if(err){
					res.json(err)
				}else{
					res.send()
				}
			})
		})
	}
	this.add_vote3 = function(req, res){
		Questions.findOne({_id: req.body.id}, function(err, question){
			question.option3.value += 1
			question.save(function(err){
				if(err){
					res.json(err)
				}else{
					res.send()
				}
			})
		})
	}
	this.add_vote4 = function(req, res){
		Questions.findOne({_id: req.body.id}, function(err, question){
			question.option4.value += 1
			question.save(function(err){
				if(err){
					res.json(err)
				}else{
					res.send()
				}
			})
		})
	}
	this.remove = function(req, res){
		Questions.remove({_id: req.params.question}, function(err){
			if(err){
				console.log("failed to delete")
			}
		})
	}
}
module.exports = new UsersController();