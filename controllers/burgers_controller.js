// // REFERENCE SEQUELIZE 04 STARWARS ROUTES


// Declarations
var express = require("express");
var burger = require("../models/burger");

// Create the router for the app, and export the 
// router at the end of your file.
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var expressHand = {
            burgers: data
        };
        console.log(expressHand);
        res.render("index", expressHand);
    });
});

router.post("/api/burger", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        // res.redirect("/");
        res.json({id: result.insertId})
    });
});

router.put("/api/:id", function (req, res) {
    var id = req.params.id;

    console.log("the controller id is ", id);

    burger.updateOne(id, function (result) {
        res.json({id: result.insertId})
    });
});

module.exports = router;

