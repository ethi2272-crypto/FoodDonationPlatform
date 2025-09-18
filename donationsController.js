const Donation = require('../models/donation');

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addDonation = async (req, res) => {
  const donation = new Donation(req.body);
  try {
    const savedDonation = await donation.save();
    res.status(201).json(savedDonation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Donation deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllDonations, addDonation, deleteDonation };
