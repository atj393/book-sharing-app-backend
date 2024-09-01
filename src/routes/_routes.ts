import express from 'express';
import { userRoutes } from './userRoutes';
import { imageRoutes } from './imageRoutes';
import bookRoutes from './bookRoutes';  // Import the book routes

const router = express.Router();

// Welcome Route
router.get('/', (req, res) => {
    res.send('Welcome to the Book Sharing App API');
});

// Initialize Routes
router.use('/users', userRoutes);
router.use('/images', imageRoutes);
router.use('/books', bookRoutes);  // Use the book routes

export default router;
