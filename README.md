# HNG-12-API

# HNG12 Stage 0 API

This is a simple public API developed for the HNG12 Stage 0 task. It returns basic information in JSON format including the registered email, the current datetime in ISO 8601 format, and the GitHub repository URL.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yadekola/HNG-12-yakola-API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd HNG-12-yakola-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the server:
   ```bash
   node index.js
   npm start
   ```

## API Documentation

- **Endpoint:** `GET /`
- **Response Format:**
  ```json
  {
    "email": "adekolaayinde255@gmail.com",
    "current_datetime": "2025-02-02T13:17:45.466Z",
    "github_url": "https://github.com/yadekola/HNG-12-yakola-API"
  }
  ```

## Deployment

This API is deployed at: https://hng-12-yakola-api.vercel.app

## Backlink

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
