import mysql from 'mysql2'

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'library_management_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting database:', err.message);
    }
    else {
        console.log('Database connected successfully!')
    }
});

export default db;