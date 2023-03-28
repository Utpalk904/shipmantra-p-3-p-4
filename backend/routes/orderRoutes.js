const express = require('express');
const { getAllOrders, createOrder, getSingleOrder, updateTripStatus } = require('../controllers/orderController');

const router = express.Router();

router.route('/orders').get(getAllOrders);
router.route('/order/new').post(createOrder);
router.route('/order/:id').get(getSingleOrder).put(updateTripStatus);

module.exports = router;