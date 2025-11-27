import db from "../../Config/db.js";

export const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE email = ?";
        db.query(sql, [email], (err, results) => {
            if (err) reject(err);
            else resolve(results);
    })
    }

)
}