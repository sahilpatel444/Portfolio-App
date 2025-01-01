const express = require("express");
const { sendEmailController } = require("../controllers/portfolioControllers");

//routes object
const router = express.Router();

//routes
router.post("/sendEmail", sendEmailController);

// export
module.exports = router;
