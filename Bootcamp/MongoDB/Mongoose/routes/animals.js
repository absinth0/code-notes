const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
router.get("/", (req, res) => {
    res.render("animals-page.ejs");
});

router.get("/add",(req, res) => {
    res.render("new-animal.ejs");
});

module.exports = router;