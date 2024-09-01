
import { Router } from 'express';
import { getImages, uploadImage } from '../controllers/imageController';

export const imageRoutes = Router();

imageRoutes.get('/', getImages);
imageRoutes.post('/', uploadImage);
