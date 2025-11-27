import { deleteBook, getAllBooks, getAllCategories, getBookById, insertBook, insertCategory } from '../../Models/book/bookModel.js'

// List Books Controller
export const getBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        return res.status(200).json(books);
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// List a Book Controller
export const getABook = async (req, res) => {
    try {
        const id = req.params;
        if (!id) {
            return res.status(500).json({msg: 'Book id should not be empty'});
        }

        const books = await getBookById(id);
        return res.status(200).json(books);
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// List Categories Controller
export const getCategories = async (req, res) => {
    try {
        const books = await getAllCategories();
        return res.status(200).json(books);
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Add Book Controller
export const createBook = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return res.status(500).json({msg: 'Book details should not be null'});
        }
        
        const result = await insertBook(data);
        return res.status(201).json({msg: 'Book added successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Add Category Controller
export const createCategory = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return res.status(500).json({msg: 'Category details in body should not be empty'});
        }
        
        const result = await insertCategory(data);
        return res.status(201).json({msg: 'Category added successfully!'});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Update Book Controller
export const updateABook = async (req, res) => {
    try {
        const id = req.params;
        const data = req.body;
        if (!id || !data) {
            return res.status(500).json({msg: 'Book id and details should not be null'});
        } else {
            const result = await updateBook(id, data);
        }
        
        return res.status(200).json({msg: 'Book updated successfully!', result});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Update Category Controller
export const updateACategory = async (req, res) => {
    try {
        const id = req.params;
        const data = req.body;
        if (!id || !data) {
            return res.status(500).json({msg: 'Category id and details should not be null'});
        } else {
            const result = await updateCategory(id, data);
        }
        
        return res.status(200).json({msg: 'Category updated successfully!', result});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Delete Book Controller
export const deleteABook = async (req, res) => {
    try {
        const id = req.params;
        if (!id) {
            return res.status(500).json({msg: 'Book id should not be null'});
        }
        
        const result = await deleteBook(id);
        return res.status(200).json({msg: 'Book deleted successfully!', result});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};

// Delete Category Controller
export const deleteACategory = async (req, res) => {
    try {
        const id = req.params;
        if (!id) {
            return res.status(500).json({msg: 'Category id should not be null'});
        }
        
        const result = await deleteCategory(id);
        return res.status(200).json({msg: 'Category deleted successfully!', result});
    } catch (err) {
        return res.status(500).json({msg: 'Server error', err});
    }
};