const pool = require('./config/db');
const fs = require('fs');

async function check() {
  try {
    const [rows] = await pool.query('DESCRIBE users');
    fs.writeFileSync('schema_users.json', JSON.stringify(rows, null, 2));
    
    // Also describe resumes if it exists
    const [resumes] = await pool.query('DESCRIBE resumes');
    fs.writeFileSync('schema_resumes.json', JSON.stringify(resumes, null, 2));
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    fs.writeFileSync('schema_error.json', JSON.stringify(err, null, 2));
    process.exit(1);
  }
}

check();
