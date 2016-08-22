var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: [30,"Username should be less than 30 characters"], 
		minlength: [2, "Username must be at least two characters"], 
		required: [true, "Username is required"]
	},
	_questions: [{type: Schema.Types.ObjectId, ref: "Questions"}],
	},	{timestamps: true});

var QuestionSchema = new mongoose.Schema({
	name:{
		type: String,
		minlength : [8, 'Question too short'],
		required : [true, 'Must enter a question']
	},
	option1:{
		name: {
			type: String,
			minlength: [3, "Option text too short"],
			required: [true, 'All options must contain characters']
		}, 
		value: Number
	}, 
	option2:{
		name: {
			type: String,
			minlength: [3, "Option text too short"],
			required: [true, 'All options must contain characters']
		}, 
		value: Number
	}, 
	option3:{
		name: {
			type: String,
			minlength: [3, "Option text too short"],
			required: [true, 'All options must contain characters']
		}, 
		value: Number
	}, 
	option4:{
		name: {
			type: String,
			minlength: [3, "Option text too short"],
			required: [true, 'All options must contain characters']
		}, 
		value: Number
	}, 
	_user:{type: Schema.Types.ObjectId, ref: 'Users'}
	}, {timestamps: true});


mongoose.model('Users', UserSchema);
var Users = mongoose.model('Users')
mongoose.model('Questions', QuestionSchema); 
var Messages = mongoose.model('Questions')
