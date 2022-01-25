const express = require("express");
const router = express.Router();
const controller = require("../../controllers/mongo/productsController");

router.get("/products", controller.all);
router.post("/products", controller.insert);

module.exports = router;