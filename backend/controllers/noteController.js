const { Note } = require('../models');

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, userId: req.user.id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { userId: req.user.id } });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    await Note.update(req.body, { where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Note updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await Note.destroy({ where: { id: req.params.id, userId: req.user.id } });
    res.json({ msg: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
