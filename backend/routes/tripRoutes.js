const express = require('express');
const { createTrip, getAllTrips } = require('../controllers/tripController');

const router = express.Router();

router.route('/trip/new').post(createTrip);
router.route('/trips').get(getAllTrips);

module.exports = router;
