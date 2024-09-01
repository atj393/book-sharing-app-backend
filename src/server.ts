import app from './app';
import { initializeDatabases } from './config/database';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3000;

// Function to start the server
const startServer = async () => {
    try {
        // Initialize Database Connections (Simulated)
        await initializeDatabases();

        // Start Express Server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1); // Exit the process with an error code
    }
};

startServer();
