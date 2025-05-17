const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// @route   POST /api/notes
router.post('/', noteController.createNote);

// @route   GET /api/notes
router.get('/', noteController.getNotes);

// @route   PUT /api/notes/:id
router.put('/:id', noteController.updateNote);

// @route   DELETE /api/notes/:id
router.delete('/:id', noteController.deleteNote);

module.exports = router;
