const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use (bodyparser.urlencoded({extended: true}));

app.get ("/bmicalculator", function(req,res){
	res.sendfile(__dirname + "/" + "bmi.html");
});

app.post ("/bmicalculator",function(req,res){
	var heigh = parseFloat(req.body.Height);
	var weigh = parseFloat(req.body.Weight);
	var bmi = weigh / (heigh * heigh);

	res.send("Your BMI is " + bmi);
});

app.listen(7777, function(){
	console.log("port active at 7777");
});
