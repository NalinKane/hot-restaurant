var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var clientNames = [{ name: "", email: "" }];

//GET

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/appfront/restapp.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "/appfront/add.html"));
});

//POST
app.post("/reserve", function(req, res) {
  var newClient = req.body;

  //   newClient = newClient.name.replace(/\s+/g, "").toLowerCase();

  console.log(newClient);

  clientNames.push(newClient);

  res.json(newClient);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
