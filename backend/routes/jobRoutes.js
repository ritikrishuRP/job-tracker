const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const {
  logJobApplication,
  getJobs, // <-- this is the correct function name
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');

// Log a job application with resume and cover letter
router.post(
  '/',
  authenticate,
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 },
  ]),
  logJobApplication
);

// REST endpoints
router.get('/', authenticate, getJobs);
router.post('/basic', authenticate, createJob);
router.get('/:id', authenticate, getJobById);
router.put('/:id', authenticate, updateJob);
router.delete('/:id', authenticate, deleteJob);

module.exports = router;
