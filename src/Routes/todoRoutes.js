const express = require("express");
let router = new express.Router()
let controller = require("../controllers/todoCtrl");

// get summary of items
router.get("/todos", controller.itemSummary);

// get detail of a single item
router.get("/toods/:id", controller.itemDetails);

// create a new item
router.get("/todos", controller.createItem);

// update an item, given its id
router.get("todos/:id", controller.updateItem);

// delete an item, given its id
router.get("/todos/:id", controller.deleteItem);


module.exports = router;