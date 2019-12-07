var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waitingList = [];
var tables = [];

//GET

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/appfront/restapp.html"));
});

app.get("/waitinglist", function(req, res) {
  res.sendFile(path.join(__dirname, "/appfront/waitinglist.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "/appfront/tables.html"));
});

//POST
app.post("/reserve", function(req, res) {
  var newClient = req.body;

  //   newClient = newClient.name.replace(/\s+/g, "").toLowerCase();

  console.log(newClient);

  res.json(newClient);

  if (tables.length <= 5) {
    tables.push(newClient);
  } else {
    waitingList.push(newClient);
  }
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
