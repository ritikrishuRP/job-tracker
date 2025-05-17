const { Reminder } = require('../models');

exports.createReminder = async (req, res) => {
  try {
    const reminder = await Reminder.create({ ...req.body, userId: req.user.id });
    res.status(201).json(reminder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.findAll({ where: { userId: req.user.id } });
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReminder = async (req, res) => {
  try {
    await Reminder.update(req.body, { where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Reminder updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReminder = async (req, res) => {
  try {
    await Reminder.destroy({ where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
