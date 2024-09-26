const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const loginRouter = require("./login/router");

router.use("/login", loginRouter);

/* ************************************************************************* */

module.exports = router;
