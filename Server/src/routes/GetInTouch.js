// app/routes/getintouchRoutes.js
const express = require('express');
const router = express.Router();
const GetInTouchController = require('../controllers/getintouchController');

router.post('/submit', GetInTouchController.submitForm);


// GET route to retrieve all GetInTouch entries
router.get('/getintouch', GetInTouchController.getAllGetInTouch);

// GET route to retrieve a specific GetInTouch entry by ID
router.get('/getintouch/:id', GetInTouchController.getGetInTouchById);

module.exports = router;
