const router = require("express").Router();
const User = require("../models/user");
const passport = require("passport");

router.post("/signup", (req, res, next) => {
 console.log("Sign Up");
  User.register(
    new User({
      username: req.body.username,
    }),
    req.body.password,
    (err, user) => {
      console.log(err);
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({
          err: err,
        });
      } else {
        passport.authenticate("local")(req, res, () => {
          User.findOne(
            {
              username: req.body.username,
            },
            (err, person) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json({
                success: true,
                status: "Registration Successful!",
              });
            }
          );
        });
      }
    }
  );
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  User.findOne(
    {
      username: req.body.username,
    },
    (err, person) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: "You are successfully logged in!",
      });
    }
  );
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie("session-id");
        res.json({
          message: "You are successfully logged out!",
        });
      }
    });
  } else {
    var err = new Error("You are not logged in!");
    err.status = 403;
    next(err);
  }
});

module.exports = router;