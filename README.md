# Node JSON API

A basic Node.js + Express CRUD REST API that stores users in `src/data/users.json`.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

or:

```bash
npm start
```

Server: `http://localhost:3000`

## API Documentation (Swagger)

Interactive Swagger UI is available at:
`http://localhost:3000/api-docs`

Raw OpenAPI spec is available at:
`http://localhost:3000/api-docs.json`

## Endpoints

- `GET /` - Root status
- `GET /test` - Test endpoint with persistent visitor count
- `GET /api` - API base status
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user by ID
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Create user example

```json
{
  "name": "Alex Smith",
  "email": "alex@example.com",
  "age": 28
}
```

Changes made through POST, PUT, and DELETE are saved to `src/data/users.json`.
