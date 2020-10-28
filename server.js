const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// 


const User = require("./models/user");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//------------------------------Passport-----------
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
//-----------------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ezquit", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

});

app.use(
  session({
    name: "session-id",
    secret: "123-456-789",
    saveUninitialized: false,
    resave: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
