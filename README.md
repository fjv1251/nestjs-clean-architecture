# NestJS Clean Architecture Boilerplate 🚀

![NestJS Clean Architecture](https://img.shields.io/badge/NestJS-Clean%20Architecture-brightgreen)

Welcome to the **nestjs-clean-architecture** repository! This project serves as a production-ready boilerplate for building scalable applications using NestJS, Clean Architecture, and Domain-Driven Design (DDD). 

You can find the latest releases [here](https://github.com/fjv1251/nestjs-clean-architecture/releases). Download and execute the files to get started.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
4. [Project Structure](#project-structure)
5. [API Documentation](#api-documentation)
6. [Monitoring and Metrics](#monitoring-and-metrics)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **Clean Architecture**: Organize your codebase in a way that separates concerns, making it easier to manage and test.
- **Domain-Driven Design**: Focus on the core business logic, ensuring that your application is aligned with business needs.
- **MongoDB Integration**: Use MongoDB for your database needs, providing flexibility and scalability.
- **Docker Support**: Easily deploy your application in containers for consistent environments.
- **Monitoring with Prometheus**: Collect metrics and monitor your application performance.
- **Visualize with Grafana**: Create dashboards to visualize metrics collected from your application.
- **Swagger API Documentation**: Automatically generate and maintain API documentation.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **MongoDB**: A NoSQL database that stores data in flexible, JSON-like documents.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **Prometheus**: An open-source monitoring and alerting toolkit.
- **Grafana**: An open-source platform for monitoring and observability.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fjv1251/nestjs-clean-architecture.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nestjs-clean-architecture
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables. You can create a `.env` file in the root directory and fill it with the required configuration.

### Running the Application

To run the application, you can use Docker Compose. This will start both the application and the MongoDB database.

```bash
docker-compose up --build
```

Once the application is running, you can access it at `http://localhost:3000`.

## Project Structure

Here’s a brief overview of the project structure:

```
nestjs-clean-architecture/
│
├── src/
│   ├── modules/          # Feature modules
│   ├── shared/           # Shared resources
│   ├── config/           # Configuration files
│   ├── main.ts           # Entry point of the application
│   └── app.module.ts     # Root module
│
├── test/                 # Test files
├── .env                  # Environment variables
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose configuration
└── package.json          # Project metadata and dependencies
```

## API Documentation

This project uses Swagger to generate API documentation. Once the application is running, you can access the documentation at `http://localhost:3000/api`.

## Monitoring and Metrics

To monitor your application, we use Prometheus and Grafana. Here’s how to set them up:

1. **Prometheus**: Configure Prometheus to scrape metrics from your application. You can find the configuration in the `prometheus.yml` file.
2. **Grafana**: After setting up Prometheus, you can create dashboards in Grafana to visualize your application metrics.

## Contributing

We welcome contributions! If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch and create a pull request.

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For more information, visit the [Releases](https://github.com/fjv1251/nestjs-clean-architecture/releases) section to find the latest updates and changes.