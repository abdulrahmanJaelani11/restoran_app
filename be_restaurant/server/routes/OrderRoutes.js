const express = require("express");
const router = express.Router()
const Order = require('../controllers/OrderController')

router.post('/', Order.create)
router.put('/:order_id', Order.update)
router.get('/', Order.getAll)
router.get('/:order_id', Order.getById)

module.exports = router;