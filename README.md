# Login-JWT-

## Overview

This application demonstrates the implementation of JSON Web Token (JWT) authentication. It allows users to obtain a token by providing a username and password, which is then used to access protected data.

## Usage

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Set up environment variables:**

   Create a `.env` file and set the 'JWT_SECRET' variable:

   ```env
   JWT_SECRET=your_secret_key
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

4. **Run the application:**

   ```bash
   node app.js
   ```

5. **Visit the application on [http://localhost:3000](http://localhost:3000) in your web browser.**

### Logging In

6. Provide any username and password to obtain a token.

### Accessing Protected Data

7. Use the token received to access the protected data.

## Technology Stack

- HTML
- CSS
- JavaScript
- Axios
- Node.js
- Express
- express-async-errors
- http-status-codes
- jsonwebtoken
- dotenv

## About

This application serves as a learning tool for understanding JWT authentication.

### Frontend

- Users need to provide a username and password to obtain a token.
- Axios is used to make 'get' and 'post' requests from the frontend to the backend.
- LocalStorage is utilized to store the received token.

### Backend

- Express is employed to set up the server.
- The 'http-status-codes' package ensures proper status code handling.
- 'jsonwebtoken' is used for token generation and verification.
- 'dotenv' is utilized to securely store the JWT secret key.
