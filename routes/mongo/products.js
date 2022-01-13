const express = require("express")
const router = express.Router()
const controller = require("../../controllers/mongo/productsController.js")

router.post("/products", controller.insert)

module.exports = router