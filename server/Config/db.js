import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'library_management_db'
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