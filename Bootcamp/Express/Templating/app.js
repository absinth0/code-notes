var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/journeytothegalaxy/:galaxy", function (req, res) {
    var gal = req.params.galaxy;
    res.send("You are entering " + gal);
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});