const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define the GET endpoint
app.get('/', (req, res) => {
  const response = {
    email: "yakubadekolaojo059@gmail.com", 
    current_datetime: new Date().toISOString(), 
    github_url: "https://github.com/yadekola/HNG-12-API" 
  };

  res.status(200).json(response);
});

// Start the server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
