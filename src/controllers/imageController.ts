
import { Request, Response } from 'express';
import { Image } from '../models/imageModel';

export const getImages = async (req: Request, res: Response) => {
    const images = await Image.find();
    res.json(images);
};

export const uploadImage = async (req: Request, res: Response) => {
    const { title, url, userId } = req.body;
    const newImage = new Image({ title, url, userId });
    await newImage.save();
    res.json(newImage);
};
