const { Job } = require('../models');
const { Op } = require('sequelize');

exports.getDashboardOverview = async (req, res) => {
  try {
    const userId = req.user.id;

    const total = await Job.count({ where: { userId } });

    const statuses = await Job.findAll({
      where: { userId },
      attributes: ['status', [sequelize.fn('COUNT', 'status'), 'count']],
      group: ['status'],
    });

    res.json({ total, statusBreakdown: statuses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
