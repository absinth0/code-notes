var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome To my Assignment! Now get Outta Here.</h1>");
});

app.get("/speak/:animal", function(req, res){
    console.log(req.params);
    if(req.params.animal === "pig") {
        res.send("The " + req.params.animal + " says " + "'Oink'");
    }
    else if(req.params.animal === "cow") {
        res.send("The " + req.params.animal + " says " + "'Moo'");
    }
    else if(req.params.animal === "dog") {
        res.send("The " + req.params.animal + " says " + "'Woof'");
    }
    else {
        res.send("This animal does not exist!");
    }
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});