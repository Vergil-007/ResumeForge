const pool = require('../config/db');

exports.getResumes = async (req, res) => {
  try {
    const [resumes] = await pool.query(
      'SELECT id, user_id, title, template_id, created_at, updated_at FROM resumes WHERE user_id = ? ORDER BY updated_at DESC',
      [req.user.id]
    );
    res.json(resumes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getResumeById = async (req, res) => {
  try {
    const [resumes] = await pool.query('SELECT * FROM resumes WHERE id = ? AND user_id = ?', [
      req.params.id,
      req.user.id
    ]);

    if (resumes.length === 0) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.json(resumes[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createResume = async (req, res) => {
  const { title, template_id, content_json } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO resumes (user_id, title, content_json, template_id) VALUES (?, ?, ?, ?)',
      [req.user.id, title, JSON.stringify(content_json), template_id]
    );

    const [newResume] = await pool.query('SELECT * FROM resumes WHERE id = ?', [result.insertId]);
    res.json(newResume[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateResume = async (req, res) => {
  const { title, template_id, content_json } = req.body;

  try {
    // Ensure resume exists and belongs to user
    const [resumes] = await pool.query('SELECT * FROM resumes WHERE id = ? AND user_id = ?', [
      req.params.id,
      req.user.id
    ]);

    if (resumes.length === 0) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    await pool.query(
      'UPDATE resumes SET title = ?, template_id = ?, content_json = ? WHERE id = ? AND user_id = ?',
      [title, template_id, JSON.stringify(content_json), req.params.id, req.user.id]
    );

    const [updatedResume] = await pool.query('SELECT * FROM resumes WHERE id = ?', [req.params.id]);
    res.json(updatedResume[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteResume = async (req, res) => {
  try {
    const [resumes] = await pool.query('SELECT * FROM resumes WHERE id = ? AND user_id = ?', [
      req.params.id,
      req.user.id
    ]);

    if (resumes.length === 0) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    await pool.query('DELETE FROM resumes WHERE id = ? AND user_id = ?', [
      req.params.id,
      req.user.id
    ]);

    res.json({ message: 'Resume removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
