var express = require("express");
var mongoose = require("mongoose");
var mongooseDetails = require("./mongooseDetails");
var app = express();




app.use(function(req, res) {
    res.send(mongooseDetails);
});

app.listen(process.env.PORT);

