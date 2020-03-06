const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const notes = require("./db/db.json");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static(path.join(__dirname, "./public")));
//app.use(express.static(__dirname));
app.use(express.static("public"));

//app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
