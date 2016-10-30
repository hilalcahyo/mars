var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongo = require ('mongodb').MongoClient; 

var mongoose = require("mongoose");

var Message = mongoose.model('Message', {
	msg: String
});

app.use(bodyParser.json());

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
	})

app.get('/api/message', GetMessages);


app.post('/api/message', function(req, res){
	console.log("###############################");
	res.status(200).send(JSON.stringify(req.body));

	var message = new Message (req.body);

	message.save();

	console.log("--jsonFromUser "+ (JSON.stringify(req.body)));
	console.log("###############################");
})

function GetMessages(req,res){
	Message.find({}).exec(function(err, result){
		//console.log(result);
		res.send(result);
	})
}
mongoose.connect("mongodb://localhost:27017/test", function(err, db){
	if(!err){
		console.log("we are connected mongo");
		//GetMessages(); 
		
	}
})
var server = app.listen(5000, function(){
	console.log ('listening on port' , server.address().port);
})