const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
const passport = require("passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(require("cookie-parser")());
app.use(
  require("express-session")({
    secret: "password",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
require("./routes/authentication")(app);
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://user:password123@ds245387.mlab.com:45387/heroku_t6dz0wlh",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    app.listen(PORT, function() {
      console.log(`==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(err => console.log(err));

// Start the API server
