//externals on top (vendors or 3rd parties)
const express = require("express");
const morgan = require("morgan")("combined");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//bottom - internals
const routes = require("./routes");

//app definition
const app = express();

// Connect mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurauntDB",
  function(err) {
    if (err) {
      console.log("Could not connect to mongodb on localhost");
    }
  }
);

const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(morgan);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
