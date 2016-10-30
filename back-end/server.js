var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongo = require ('mongodb').MongoClient; 

var database;

app.use(bodyParser.json());

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
	})


app.post('/api/message', function(req, res){
	console.log("###############################");
	//console.log(req.body);
	var jsonFromClient = req.body;
	//emailFromClient = jsonFromClient.email;
	//passwordFromClient = jsonFromClient.password;
	//console.log("Data from client : "+emailFromClient+" | "+passwordFromClient) 

	//var jsonResult = JSON.stringify(req.body);
	//res.status(200).send("Thanks For Submited. Your data is "+jsonResult);
	res.status(200).send(JSON.stringify(req.body));
	database.collection('messages').insertOne(req.body);
	console.log("--jsonFromUser "+ (JSON.stringify(req.body)));
	console.log("###############################");
	// if(passwordFromClient == "kodokkodok"){
	// 	res.send("Anda Berhasil Login");
	// }else{
	// 	res.send("Password Anda Salah");
	// }
})

mongo.connect("mongodb://localhost:27017/test", function(err, db){
	if(!err){
		console.log("we are connected mongo"); 
		database = db;
		//db.collection('messages').insertOne({'msg':"test"});
	}
})
var server = app.listen(5000, function(){
	console.log ('listening on port' , server.address().port);
})