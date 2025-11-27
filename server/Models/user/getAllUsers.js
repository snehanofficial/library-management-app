import db from "../../Config/db.js";

export const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users";
        db.query(sql, _, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}