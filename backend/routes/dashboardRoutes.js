const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// @route   GET /api/dashboard
router.get('/', dashboardController.getDashboardOverview);

module.exports = router;
