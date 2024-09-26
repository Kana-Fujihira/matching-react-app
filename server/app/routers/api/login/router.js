const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { login } = require("../../../controllers/LoginActions");

// Route to verify connection
router.post("/", login);

/* ************************************************************************* */

module.exports = router;