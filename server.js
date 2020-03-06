const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API routes
app.get("/api/notes", function(req, res) {});
app.post("/api/notes", function(req, res) {});
app.delete("/api/notes", function(req, res) {});
//listener
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
