const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

// @route   POST /api/companies
router.post('/', companyController.createCompany);

// @route   GET /api/companies
router.get('/', companyController.getCompanies);

// @route   GET /api/companies/:id
router.get('/:id', companyController.getCompanyById);

// @route   PUT /api/companies/:id
router.put('/:id', companyController.updateCompany);

// @route   DELETE /api/companies/:id
router.delete('/:id', companyController.deleteCompany);

module.exports = router;
