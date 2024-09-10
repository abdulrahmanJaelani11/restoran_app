const express = require('express');
const router = express.Router()
const Reservation = require('../controllers/ReservationController')

router.post('/', Reservation.create);
router.put('/:reservation_id', Reservation.update);
router.get('/', Reservation.getAll);
router.get('/:reservation_id', Reservation.getById);

module.exports = router