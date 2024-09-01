import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

const bookService = new BookService();

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await bookService.getAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await bookService.getById(Number(id));
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch book' });
    }
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const book = await bookService.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedBook = await bookService.update(Number(id), req.body);
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update book' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const isDeleted = await bookService.delete(Number(id));
        if (!isDeleted) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete book' });
    }
};
