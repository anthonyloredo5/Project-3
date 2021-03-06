const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

//update route
router.route("/update")
.post(usersController.update);

router.route("/login")
//Added this to redirect to the login 
.post(passport.authenticate('local', { failureRedirect: '/login' }),usersController.login);
//Changed to post route to match the request

router.route("/logout")
      .post(usersController.logout);


// Matches with "/api/users/:id"
router.route("/user")
      .get(usersController.getUser);
/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;