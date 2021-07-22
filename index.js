import express from 'express';
import booksRouter from './routes/booksRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/books', booksRouter);
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
