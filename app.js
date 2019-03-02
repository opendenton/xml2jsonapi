const port = process.env.PORT || 3000;
const express = require("express");
const convert = require("xml-js");
const fetch = require("node-fetch");

var app = express();
app.use(express.json());

app.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready On Server http://localhost:${port}`);
});

app.get("/", function(req, res, next) {
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
