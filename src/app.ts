import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/_routes'; // Import the routes
import { setupSwagger } from './config/swagger'; // Import the Swagger setup

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger setup
setupSwagger(app);

// Use Routes
app.use('/', routes);

// Error Handling Middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(err.status || 500).json({
        error: err.message || 'An unexpected error occurred',
    });
});

export default app;
