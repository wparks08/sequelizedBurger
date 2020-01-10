const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.burger.findAll({}).then(burgers => {
        res.render("index", {
            devoured: burgers.filter(burger => burger.devoured),
            notDevoured: burgers.filter(burger => !burger.devoured)
        });
    });
});

router.post("/api/burger", (req, res) => {
    db.burger.create({
        burger_name: req.body.burger_name
    }).then(burger => {
        res.redirect("/");
    });
});

router.put("/api/burger/:id", (req, res) => {
    db.burger.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(burger => {
        res.json(burger);
    });
});

module.exports = router;
