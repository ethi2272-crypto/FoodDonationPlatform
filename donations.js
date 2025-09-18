const express = require('express');
const router = express.Router();
const { getAllDonations, addDonation, deleteDonation } = require('../controllers/donationsController');

router.get('/', getAllDonations);
router.post('/', addDonation);
router.delete('/:id', deleteDonation);

module.exports = router;
