let db = require("../model/db");

// function to return a summary of the item on the response
let itemSummary = function(req, res){
    console.log("itemSummary");

    let sql = "select id, task, is_done from todos";

    db.query(sql, function(err, results){
        if(err){
            console.log("could not execute the query", err);
            res.sendStatus(400);
        } else {
            res.json(results);
        }
    });
}

// function to return the detail of a single item on the response
let itemDetails = function(req, res){
    console.log("itemDetails");
    
    let id = req.params.id;

    // when a sl statment uses ?, this is called a aparameterized SQL
    let sql = "select id, task, description, is_done from todos where id = ?";
    let params = []; // this array will hold the params for our sql statement
    params.push(id); // this is the first param in the sql statment 

    // bad way, susptible to sql injection, please do not do this!!!
    // let badSql = "select id, task, description, is_done from todos where id = "+id;

    db.query(sql, params, function(err, results){
        if(err){
            console.log("failed to execute query:", err);
            res.sendStatus(500); // it is not the clients fault the query failed
        } else  {
            if(results.length == 1){
                res.json(results[0])
            } else if (results.length > 1) {
                console.log("Found more that one results for id ", id);
                res.sendStatus(500); // we send 500 because this is a server bug, no clients fault
            } else {
                // if the results length is 0, so we send a 404 (not found)
                res.sendStatus(404);
            }
        }
    })
}

// function to create a new item
let createItem = function(req, res){
    console.log("createItem");
    res.sendStatus(204);
}

// function to update an item
let updateItem = function(req, res){
    console.log("updateItem");
    res.sendStatus(204);
}

// function to delete an item
 let deleteItem = function(req,res){
     console.log("deleteItem");
     res.sendStatus(204);
 }

 module.exports = {
     itemDetails, itemSummary, createItem, updateItem, deleteItem
 }