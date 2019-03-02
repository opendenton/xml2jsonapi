const express = require("express");
const router = express.Router();
const convert = require("xml-js");
const fetch = require("node-fetch");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req);
  if (req.query && req.query.q) {
    let compact = req.query.compact ? true : false;
    fetch(req.query.q)
      .then(resp => resp.text())
      .then(function(data) {
        res.setHeader("Content-Type", "application/json");
        res.send(data);
      })
      .catch(err => console.log(err));
  } else {
    res.render("index", { title: "Express" });
  }
});

module.exports = router;
