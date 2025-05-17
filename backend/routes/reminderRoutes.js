const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// @route   POST /api/reminders
router.post('/', reminderController.createReminder);

// @route   GET /api/reminders
router.get('/', reminderController.getReminders);

// @route   PUT /api/reminders/:id
router.put('/:id', reminderController.updateReminder);

// @route   DELETE /api/reminders/:id
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;
