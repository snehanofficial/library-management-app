import express from 'express'
import { getBooks, createBook, getABook, updateABook, deleteABook } from "../Controllers/book/bookController.js";

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getABook);
router.post('/add', createBook);
router.put('/update/:id', updateABook);
router.delete('/delete/:id', deleteABook);

export default router;