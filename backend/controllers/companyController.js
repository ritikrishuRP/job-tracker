const { Company } = require('../models');

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create({ ...req.body, userId: req.user.id });
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll({ where: { userId: req.user.id } });
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findOne({ where: { id: req.params.id, userId: req.user.id } });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    await Company.update(req.body, { where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Company updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    await Company.destroy({ where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
