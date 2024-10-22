const express = require('express');
const { getAllSeats, bookSeats, resetSeats } = require('../controllers/seatController');
const router = express.Router();

router.route('/').get(getAllSeats).post(bookSeats);
router.route('/reset').post(resetSeats); // Add reset route

module.exports = router;
