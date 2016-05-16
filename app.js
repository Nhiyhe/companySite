/// <reference path="./typings/tsd.d.ts" />

var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+('/node_modules/bootstrap/dist')));
app.use(express.static(__dirname+('/node_modules/jquery/dist')));

app.get('/',function(req,res){
    res.render('home');
});



app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})
