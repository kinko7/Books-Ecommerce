const { Router } = require('express');
const { getAllEvents } = require('../controllers/events.js')


const router = Router();

router.get('/', getAllEvents);

// router.get('/:id', getEventById);


module.exports = router;
