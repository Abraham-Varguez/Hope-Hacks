const express = require('express');
const app = express();
const path = require('path');

// Set the port number
const port = 5000;

// Define the static file directories
app.use(express.static(path.join(__dirname, '/public')));
app.use('/script', express.static(path.join(__dirname, '/script')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/img', express.static(path.join(__dirname, '/img')));
// Define the routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/api.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/login.html'));
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
