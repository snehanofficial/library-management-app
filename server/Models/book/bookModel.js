import db from '../../Config/db.js'

// Add a new book
export const insertBook = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO books SET ?";
        db.query(sql, [data], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Add a new category
export const insertCategory = (data) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO categories SET ?";
        db.query(sql, [data], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Get all Books
export const getAllBooks = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM books b left join categories c on b.category_id = c.id";
        db.query(sql, [], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Get all Books
export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM categories";
        db.query(sql, [], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};