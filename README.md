# Movie Watchlist REST API

A REST API built with **Node.js** and **Express.js** for managing a personal movie watchlist. It supports CRUD operations, request validation, and custom middleware.

## Features

- Retrieve all movies and individual movies
- Add new movies to the watchlist
- Update movie information
- Toggle a movie's watched status
- Delete movies
- Validate movie data using custom middleware
- Log incoming HTTP requests
- Handle unknown routes with a 404 response
- Store movie data in an in-memory JavaScript array

## Technologies

- Node.js
- Express.js
- dotenv
- Nodemon

## Project Structure

```text
movies-api/
├── index.js
├── router/
│   └── movies.js
├── controllers/
│   └── moviesController.js
├── middlewares/
│   ├── logger.js
│   ├── checkMovie.js
│   └── notFound.js
├── data/
│   └── movies.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Razmik08/movies-api.git
   cd movies-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   PORT=5000
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/movies` | Retrieve all movies |
| GET | `/movies/:id` | Retrieve a movie by ID |
| POST | `/movies` | Add a new movie |
| PUT | `/movies/:id` | Update a movie's title, year, and rating |
| PATCH | `/movies/:id/watched` | Toggle watched status |
| DELETE | `/movies/:id` | Delete a movie |

## Example Movie

```json
{
  "id": 1,
  "title": "Interstellar",
  "year": 2014,
  "rating": 9,
  "watched": true
}
```

## Validation

Movie creation and updates validate the following fields:

- `title` — required and non-empty
- `year` — a number between 1900 and 2026
- `rating` — a number between 1 and 10

Invalid requests return a `400 Bad Request` response.

## Error Handling

- `400 Bad Request` — invalid input
- `404 Not Found` — movie or route not found
- `500 Internal Server Error` — unexpected server errors, if an error handler is implemented

## Data Storage

Movie data is stored in a JavaScript array in memory. Data is reset when the server restarts; no database is used.

## License

Created for educational purposes.
