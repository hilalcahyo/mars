var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.post('/api/message', function(req, res){
	console.log("###############################");
	//console.log(req.body);
	var jsonFromClient = req.body;
	emailFromClient = jsonFromClient.email;
	passwordFromClient = jsonFromClient.password;
	console.log("Data from client : "+emailFromClient+" | "+passwordFromClient) 

	//var jsonResult = JSON.stringify(req.body);
	//res.status(200).send("Thanks For Submited. Your data is "+jsonResult);
	res.status(200);
	if(passwordFromClient == "kodokkodok"){
		res.send("Anda Berhasil Login");
	}else{
		res.send("Password Anda Salah");
	}
})
var server = app.listen(5000, function(){
	console.log ('listening on port' , server.address().port);
})