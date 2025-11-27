import express from 'express'
import { getBooks, createBook, getABook, updateABook, deleteABook, getCategories, createCategory, updateACategory, deleteACategory } from "../Controllers/book/bookController.js";
import { protect } from '../Middlewares/auth.js';

const router = express.Router();

router.get('/', protect, getBooks);
router.get('/:id', protect, getABook);
router.post('/add', protect, createBook);
router.put('/update/:id', protect, updateABook);
router.delete('/delete/:id', protect, deleteABook);

router.get('/categories/', protect, getCategories);
router.post('/categories/add', protect, createCategory);
router.put('/categories/update/:id', protect, updateACategory);
router.delete('/categories/delete/:id', protect, deleteACategory);

export default router;