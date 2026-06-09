const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/index');
const {eventController} = require('../controllers/index')

router.post('/register',eventController.registerMember);

module.exports = router