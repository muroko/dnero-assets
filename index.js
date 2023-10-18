var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  app = express();

var port = process.env.PORT || 3100;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "public1")));
app.use(express.static(path.resolve(__dirname, "public2")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public1", "/wallet-metadata/v1/data.json"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public2", "/tokens/"));
});

var server = app.listen(port, function() {
  console.log("The server is running on http://localhost:" + port);
});
