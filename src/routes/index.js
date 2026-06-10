const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth');
const {eventController,agendaControlller} = require('../controllers/index')

router.post('/register',eventController.registerMember);

router.get('/agenda',agendaControlller.agendaDetails);

router.get('/', (req, res) => {
   res.json({ message: 'success' });
});

module.exports = router