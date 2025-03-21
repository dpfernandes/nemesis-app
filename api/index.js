const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Export the Express app for Vercel
module.exports = app;
