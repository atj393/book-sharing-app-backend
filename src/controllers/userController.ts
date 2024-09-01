
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/userModel';

export const getUsers = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const user = userRepository.create(req.body);
    const result = await userRepository.save(user);
    res.json(result);
};
