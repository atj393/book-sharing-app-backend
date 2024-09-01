import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book Sharing API',
            version: '1.0.0',
            description: 'API documentation for the Book Sharing application',
            contact: {
                name: 'Your Name',
                email: 'your-email@example.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/routes/*.ts', './src/models/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
    app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
