# Book Sharing App Backend

This is the backend for the Book Sharing App, built using Node.js, Express, PostgreSQL, and MongoDB. This guide will help you set up the project on a Windows machine.

## Prerequisites

Before you can run this project, you need to have the following software installed on your Windows machine:

### 1. Install Node.js

- Download Node.js from the official [Node.js website](https://nodejs.org/).
- Run the installer and follow the setup instructions.
- Verify the installation by running the following command in the Command Prompt (cmd):
  ```bash
  node -v
  npm -v
  ```

### 2. Install Docker Desktop

- Download Docker Desktop from the official [Docker website](https://www.docker.com/products/docker-desktop).
- Run the installer and follow the setup instructions.
- Start Docker Desktop and ensure it’s running by checking the Docker icon in the system tray.
- Verify the installation by running the following command in the Command Prompt (cmd):
  ```bash
  docker --version
  ```

### 3. Install PostgreSQL and pgAdmin 4

- Download PostgreSQL from the official [PostgreSQL website](https://www.postgresql.org/download/).
- Run the installer and follow the setup instructions.
- Install pgAdmin 4 to manage your PostgreSQL database through a GUI.
- Launch pgAdmin 4 after installation and configure it to connect to your local PostgreSQL instance.

### 4. Install MongoDB and MongoDB Compass

- Download MongoDB from the official [MongoDB website](https://www.mongodb.com/try/download/community).
- Run the installer and follow the setup instructions.
- Install MongoDB Compass, a GUI for MongoDB, from [here](https://www.mongodb.com/products/compass).

## Project Setup

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <repository-url>
cd book-sharing-app-backend
```

### 2. Install Project Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Start Docker Containers

Use Docker Compose to start PostgreSQL and MongoDB containers:

```bash
docker-compose up -d
```

This will start the PostgreSQL database on port 5433 and MongoDB on port 27017.

### 4. Configure Environment Variables

The .env file is already present in the root of the project. Ensure it contains the following configuration:

```bash
PORT=3000
PG_HOST=localhost
PG_PORT=5433
PG_USER=postgres
PG_PASSWORD=postgres
PG_DATABASE=booksharing
MONGO_URI=mongodb://localhost:27017/booksharing
```

### 5. Run Database Migrations

Ensure your PostgreSQL database has the necessary tables:

```bash
npm run build
npm run migration:run
```

### 6. Start the Project

Start the Node.js backend server:

```bash
npm start
```

### 7. Access Swagger API Documentation

Once the server is running, you can access the Swagger UI for API documentation by navigating to:

```bash
http://localhost:3000/api
```

## Working with the Database

### 1. Accessing PostgreSQL Database

Open pgAdmin 4 and connect to your local PostgreSQL instance.
You can view the booksharing database and its tables there.

### 2. Accessing MongoDB Database

Open MongoDB Compass and connect to your local MongoDB instance.
The connection string should be:

```bash
mongodb://localhost:27017
```

You can view the booksharing database and its collections there.

## Common Commands

### Start the Project

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Run Database Migrations

```bash
npm run migration:run
```

### Revert Database Migrations

```bash
npm run migration:revert
```

### Stop Docker Containers

```bash
docker-compose down
```

## Troubleshooting

- **Database Connection Issues:** Ensure that your Docker containers are running and that PostgreSQL and MongoDB services are accessible on their respective ports.
- **Port Conflicts:** If the default ports are in use, you can change the port numbers in the .env file and the docker-compose.yml file.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
