const mysql = require('mysql2/promise');
require('dotenv').config();

async function init() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    });

    console.log('Connected to MySQL server.');

    console.log(`Dropping database ${process.env.DB_NAME} to ensure a clean slate...`);
    await connection.query(`DROP DATABASE IF EXISTS \`${process.env.DB_NAME}\`;`);
    
    await connection.query(`CREATE DATABASE \`${process.env.DB_NAME}\`;`);
    console.log(`Database ${process.env.DB_NAME} created.`);

    await connection.query(`USE \`${process.env.DB_NAME}\`;`);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('users table created or already exists.');

    await connection.query(`
      CREATE TABLE IF NOT EXISTS resumes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        content_json JSON NOT NULL,
        template_id VARCHAR(50) DEFAULT 'template1',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
    console.log('resumes table created or already exists.');

    await connection.end();
    console.log('Database initialization complete.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

init();
