const express = require("express");
const app = express();
const needle = require("needle");

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/insultme", function(req, res){
    let insult = 5;
    needle.get("https://evilinsult.com/generate_insult.php?lang=en&type=json",
    function(error, response){
        if(!error && response.statusCode == 200){
            insult = JSON.parse(response.body);
            console.log(insult);
            res.send(insult.insult);
        }
    });

});

app.listen(3000, () => {
    console.log("Server started on port 3000");
}
);