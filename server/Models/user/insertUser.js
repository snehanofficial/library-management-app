import db from '../../Config/db.js'

export const insertUser = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO users SET ?";
        db.query(sql, [data], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    })
}