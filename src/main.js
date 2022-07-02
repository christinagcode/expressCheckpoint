// we're bringing in express, body parser, dotenv

const express = require("express");
const bodyParser = require("body-parser");
let dotenv = require("dotenv");
dotenv.config();

// get the app servers port from env, fallback on port 8000 if not configured
// the process object has all the global variables in it. Meaning we don't have to 
// hard code in the db.js and use process
const PORT = process.env.PORT;

let app = express();

app.use(bodyParser.json())

// get the route definitions
const todoRoutes = require("./routes/todoRoutes");

// tell the express app to use the routes
app.use(todoRoutes);

// start the express app and log what port i am on 
app.listen(PORT, function(){
    console.log("Api Server started on port", PORT);
});

