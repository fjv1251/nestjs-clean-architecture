# NestJs Clean Architecture
Mutation test - sticker 
This is an example boilerplate project of using DDD and Clean Architecture with NestJS.
If you want more documentation of it, click here [Nest](https://github.com/nestjs/nest) 

[A quick introduction to clean architecture](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/)

![alt text](https://cdn-media-1.freecodecamp.org/images/oVVbTLR5gXHgP8Ehlz1qzRm5LLjX9kv2Zri6)

## Getting Started

```
git clone git@github.com:CollatzConjecture/nestjs-clean-architecture.git
```

### Structure
```
.
├── doc
│   ├── *.http
├── src
│   ├── application
│   │   ├── __test__
│   │   │   └── *.controller.spec.ts
│   │   ├── controllers
│   │   │   └── *.controller.ts
│   │   ├── dto
│   │   │   └── *.dto.ts
│   │   ├── interceptors
│   │   │   └── *.interceptor.ts
│   │   └── middleware
│   │       └── *.middleware.ts
│   ├── domain
│   │   ├── __test__
│   │   │   └── *.service.spec.ts
│   │   ├── entities
│   │   │   └── *.entity.ts
│   │   └── services
│   │       └── *.service.ts
│   ├── infrastructure
│   │   ├── database
│   │   │   └── *.providers.ts
│   │   ├── health
│   │   │   └── *.check.ts
│   │   ├── models
│   │   │   └── *.model.ts
│   │   └── repository
│   │       └── *.repository.ts
│   ├── main.ts
│   ├── app.module.ts
│   ├── constants.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── prometheus
│   └── prometheus.yml
├── docker-compose.yml
├── Dockerfile
├── jest.config.json
├── nest-cli.json
├── nodemon-debug.json
├── nodemon.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json
```

### Prerequisites

  * Node.js 18+
  * Docker and Docker Compose
  * MongoDB (included in Docker Compose)

### Running with Docker Compose

The project includes a Docker Compose setup with:
- MongoDB for data storage
- Prometheus for metrics collection
- Grafana for metrics visualization

To start all services:

```bash
# Start all services
$ docker-compose up -d

# View logs
$ docker-compose logs -f

# Stop all services
$ docker-compose down
```

Access the services:
- MongoDB: localhost:27017
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000 (default credentials: admin/admin)

### Installing

```bash
$ npm install
```

### Running the application

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Built With

* [NestJS](https://github.com/nestjs/nest) - A progressive Node.js framework
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
* [@nestjs/terminus](https://docs.nestjs.com/recipes/terminus) - Health checks
* [@nestjs/axios](https://docs.nestjs.com/techniques/http-module) - HTTP client
* [Jest](https://jestjs.io/) - Testing framework
* [Prometheus](https://prometheus.io/) - Metrics collection
* [Grafana](https://grafana.com/) - Metrics visualization

## Features

* Clean Architecture / DDD implementation
* Health checks with Terminus
* MongoDB integration
* Unit and E2E testing
* Logging middleware
* Request validation
* Metrics monitoring with Prometheus
* Metrics visualization with Grafana

## Authors

* **Jerry Lucas** - *Current Maintainer* - [github](https://github.com/CollatzConjecture)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* **Edwin Caminero** - inspiration for this project
* Clean Architecture principles
* Domain-Driven Design concepts
* NestJS framework
