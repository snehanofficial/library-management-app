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

// Get all Categories
export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM categories";
        db.query(sql, [], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Get a Book by ID
export const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM books where id = ?";
        db.query(sql, [id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Update a Book by ID
export const updateBook = (id, data) => {
    return new Promise((resolve, reject) => {
        const sql = "update books set ? where id =?"
        db.query(sql, [data, id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Update a Category by ID
export const updateCategory = (id, data) => {
    return new Promise((resolve, reject) => {
        const sql = "update category set ? where id =?"
        db.query(sql, [data, id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Delete a Book by ID
export const deleteBook = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "delete books where id = ?"
        db.query(sql, [id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

// Delete a Category by ID
export const deleteCategory= (id) => {
    return new Promise((resolve, reject) => {
        const sql = "delete categories where id = ?"
        db.query(sql, [id], (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};