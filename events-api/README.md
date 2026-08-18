# Event Management API Server

This project is a Node.js Express API server designed for managing events. It includes Swagger UI for testing and interacting with the API endpoints.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:WebDev-WBSCodingSchool/events-api.git
   cd events-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running at [http://localhost:3001](http://localhost:3001)

## Swagger API Documentation

The API endpoints are documented using Swagger. You can access the Swagger UI to view and test the API requests when `NODE_ENV` is different to `production`. Here’s how to access it:

• Swagger UI: Open a web browser and go to [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## Configuration

Environment-specific configurations can be set in `.env` file. take a look at the `example.env` file.

Create a new `.env` file and then copy the contents of `example.env` into it, you may change the `JWT_SECRET` and `PORT` values.

## Database Seeding

To populate the database with initial data, run:

```bash
npm run seed
```

Seeding runs **only once**: if users already exist, it skips and does not overwrite data. To reset and re-seed (drops all tables, then inserts seed data), use `SEED_FORCE=true npm run seed`.

## Docker

### Build and run locally

```bash
docker build -t events-api .
docker run \
  --name events-api \
  -p 3001:3001 \
  -e NODE_ENV=development \
  -e JWT_SECRET=yourSecret \
  -v events-db:/app/data \
  events-api
```

Set `NODE_ENV` and `JWT_SECRET` via `-e` as needed. Use `-v events-db:/app/data` to persist the SQLite database.

### Run image from GitHub Container Registry (GHCR)

After the repo is pushed to GitHub, the **Docker publish to GHCR** workflow builds and pushes the image on every push to `main`. Use your GitHub org/repo name:

```bash
docker pull ghcr.io/WebDev-WBSCodingSchool/events-api:latest
docker run \
  --name events-api \
  -p 3001:3001 \
  -e NODE_ENV=development \
  -e JWT_SECRET=yourSecret \
  -v events-db:/app/data \
   ghcr.io/webdev-wbscodingschool/events-api:latest
```
