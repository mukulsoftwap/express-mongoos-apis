var express = require('express');

var bodyParser = require('body-parser');

var User = require('./models/User');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.post('/save', function(req, res){
    let user = new User();
    user.name = req.body.name;
    user.number =  req.body.number;
    user.email =  req.body.email;
    user.password =  req.body.password;
    user.save(user, function(err, user){
        if(err) res.send(err);
        res.send({message : "saved...."});
    });
});

app.put('/update', function(req, res){
    
})

app.get('/', function(req, res){
    User.find({}, function(err, users){
        if(err) res.send(err);
        res.send(users);
    });
});

app.listen(4000, function(){
    console.log("app listen on 4000");
})