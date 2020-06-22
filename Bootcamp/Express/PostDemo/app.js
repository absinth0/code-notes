var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));

// use body-parser for post req.body object
app.use(bodyParser.urlencoded({ extended: true }));

var comments = [
    {
        author: "Bob",
        comment: "I think this is great, whatever that is."
    },
    {
        author: "Julie",
        comment: "What a great surprise, Wow!"
    },
    {
        author: "Alicia",
        comment: "Now I know why I am here. You just showed me what I could not see!"
    },

]


app.get("/", function (req, res) {
    res.render("home");
});

app.get("/comments", function (req, res) {
    res.render("comments", { comments: comments });
});

app.post("/addcomment", function (req, res) {
    comments.push(req.body);
    console.log(comments);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server running on port 3000");
})