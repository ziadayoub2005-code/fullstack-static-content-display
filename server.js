const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets (HTML, CSS, JS, Images) from the "public" directory
const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath, {
  maxAge: '1d', // Cache static assets for fast reloading
  etag: true
}));

// Route for health/status check
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    message: 'Static Content Display Server is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// Fallback for all other routes to serve index.html (Single Page style)
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Static Content Display Server is live!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📁 Serving directory: ${publicDirectoryPath}`);
  console.log(`====================================================`);
});
