const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/customersController");

router.get("/customers", controller.all);
router.post("/customers", controller.insert);

module.exports = router;