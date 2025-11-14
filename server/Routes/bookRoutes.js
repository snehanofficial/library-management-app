import express from 'express'
import { getBooks } from "../Controllers/book/bookController.js";

const router = express.Router();

router.get('/', getBooks);
router.post('/add', getBooks);
router.put('/update/:id', getBooks);
router.delete('/delete/:id', getBooks);

export default router;