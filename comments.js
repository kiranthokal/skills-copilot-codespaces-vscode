// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install ejs
// npm install express-sanitizer
// npm install method-override

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Comment = require("./models/comment"),
    seedDB = require("./seeds"),
    methodOverride = require("method-override");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/comments", { useNewUrlParser: true });

// Set view engine
app.set("view engine", "ejs");

// Set public directory
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Use method-override
app.use(methodOverride("_method"));

// Use seedDB
seedDB();

// Home page
app.get("/", function(req, res) {
    res.redirect("/comments");
});

// Index route
app


