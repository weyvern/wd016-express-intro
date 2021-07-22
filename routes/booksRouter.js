import express from 'express';
import { getAll, getSingle, createOne, updateOne, deleteOne } from '../controllers/books.js';

const booksRouter = express.Router();

booksRouter.get('/', getAll);
booksRouter.get('/:id', getSingle);
booksRouter.post('/', createOne);
booksRouter.put('/:id', updateOne);
booksRouter.delete('/:id', deleteOne);

export default booksRouter;
