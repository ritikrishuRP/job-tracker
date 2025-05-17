const { Job } = require('../models');

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, userId: req.user.id });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({ where: { userId: req.user.id } });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!job) return res.status(404).json({ msg: 'Job not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    await Job.update(req.body, { where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Job updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.destroy({ where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logJobApplication = async (req, res) => {
    try {
      const { companyName, jobTitle, applicationDate, status, notes } = req.body;
  
      const resumeFile = req.files?.resume?.[0]?.filename;
      const coverLetterFile = req.files?.coverLetter?.[0]?.filename;
  
      const newJob = await Job.create({
        companyName,
        jobTitle,
        applicationDate,
        status,
        notes,
        resumeUrl: resumeFile,
        coverLetterUrl: coverLetterFile,
        UserId: req.user.id,
      });
  
      res.status(201).json({ job: newJob });
    } catch (err) {
      res.status(500).json({ message: 'Failed to log job application', error: err.message });
    }
  };
