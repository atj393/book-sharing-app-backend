import { DataSource } from 'typeorm';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Book } from '../models/bookModel'; // Adjust the path to your entity

dotenv.config();

// PostgreSQL DataSource with TypeORM
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [
        Book // Reference the Book entity directly
    ],
    synchronize: true, // Enable only in development
});

export const connectPostgres = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Failed to connect to PostgreSQL:', error);
        process.exit(1);
    }
};

// MongoDB connection with Mongoose
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};

export const initializeDatabases = async () => {
    await connectPostgres();
    await connectMongoDB();
};
