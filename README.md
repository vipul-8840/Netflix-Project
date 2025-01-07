# Netflix Clone

This is a Netflix clone project built with Node.js, Express, and MongoDB. It includes user authentication, movie and TV show browsing, and search functionality.

## Features

- User authentication (signup, login, logout)
- Protected routes
- Browse trending movies and TV shows
- Search for movies, TV shows, and people
- View movie and TV show details
- View trailers
- Search history

## Technologies Used

- Node.js
- Express
- MongoDB
- JWT for authentication
- bcrypt for password hashing
- TMDB API for movie and TV show data

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/netflix-clone.git
    cd netflix-clone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    MONGO_URI=your_mongodb_uri
    PORT=your_port
    JWT_SECRET=your_jwt_secret
    TMDB_API_KEY=your_tmdb_api_key
    NODE_ENV=development
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` (or the port you specified).

## API Endpoints

### Auth Routes
- `POST /api/v1/auth/signup` - Signup a new user
- `POST /api/v1/auth/login` - Login a user
- `POST /api/v1/auth/logout` - Logout a user
- `GET /api/v1/auth/authCheck` - Check if a user is authenticated

### Movie Routes
- `GET /api/v1/movie/trending` - Get trending movies
- `GET /api/v1/movie/:id/trailers` - Get movie trailers
- `GET /api/v1/movie/:id` - Get movie details
- `GET /api/v1/movie/:id/similar` - Get similar movies
- `GET /api/v1/movie/category/:category` - Get movies by category

### TV Routes
- `GET /api/v1/tv/trending` - Get trending TV shows
- `GET /api/v1/tv/:id/trailers` - Get TV show trailers
- `GET /api/v1/tv/:id` - Get TV show details
- `GET /api/v1/tv/:id/similar` - Get similar TV shows
- `GET /api/v1/tv/category/:category` - Get TV shows by category

### Search Routes
- `GET /api/v1/search/person/:query` - Search for people
- `GET /api/v1/search/movie/:query` - Search for movies
- `GET /api/v1/search/tv` - Search for TV shows
- `GET /api/v1/search/history` - Get search history
- `DELETE /api/v1/search/history/:id` - Remove item from search history

## License

This project is licensed under the MIT License.
