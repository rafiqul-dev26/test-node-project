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

## Endpoints

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

## Create user example

```json
{
  "name": "Alex Smith",
  "email": "alex@example.com",
  "age": 28
}
```

Changes made through POST, PUT, and DELETE are saved to `src/data/users.json`.
