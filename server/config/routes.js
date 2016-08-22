var users = require('../controllers/users.js')
module.exports = function(app){
	app.post('/add_user', users.add_or_login_user);
	app.post('/add_question', users.add_question);
	app.post('/get_questions', users.get_questions);
	app.post('/get_question', users.get_question);
	app.post('/add_vote1', users.add_vote1);
	app.post('/add_vote2', users.add_vote2);
	app.post('/add_vote3', users.add_vote3);
	app.post('/add_vote4', users.add_vote4);
	app.post('/remove/:question', users.remove);
}

