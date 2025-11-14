import { getAllBooks, getAllCategories, insertBook, insertCategory } from '../../Models/book/bookModel.js'

// List Books Controller
export const getBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({msg: 'Server error', error});
    }
};