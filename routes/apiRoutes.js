const express = require("express");
const fs = require("fs");
const app = express();

module.exports = function(app) {
  //   app.get("/api/notes", function(req, res) {});
  //   app.post("/api/notes", function(req, res) {});
  //   app.delete("/api/notes", function(req, res) {});

  app.post("/api/note", function(req, res) {
    var newNote = req.body;

    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();
    console.log("work");
    notes.push(newNote);
    fs.writeFile(outputPath, JSON.stringify(notes), function(err) {
      if (err) {
        throw err;
      }
    });

    res.json(newNote);
  });
};
