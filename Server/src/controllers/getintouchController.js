// app/controllers/getintouchController.js
const GetInTouch = require('../models/GetInTouch.model');

exports.submitForm = async (req, res) => {
  try {
    const getInTouchData = new GetInTouch({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
    });

    const savedGetInTouch = await getInTouchData.save();

    res.status(201).json({
      message: 'Your message has been submitted successfully!',
      data: savedGetInTouch
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error submitting message' });
  }
};
// app/controllers/getintouchController.js
// ... existing submitForm method

exports.getAllGetInTouch = async (req, res) => {
  try {
    const getInTouchData = await GetInTouch.find();
    res.json(getInTouchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving GetInTouch data' });
  }
};

exports.getGetInTouchById = async (req, res) => {
  try {
    const getInTouchId = req.params.id;
    const getInTouchData = await GetInTouch.findById(getInTouchId);

    if (!getInTouchData) {
      return res.status(404).json({ message: 'GetInTouch not found' });
    }

    res.json(getInTouchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving GetInTouch data' });
  }
};
