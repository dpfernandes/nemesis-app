const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
  });
}

// Export the Express app for Vercel
module.exports = app;
