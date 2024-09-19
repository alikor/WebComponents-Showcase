// src/server.js
const express = require('express');
const app = express();
const path = require('path');

// CORS Configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/', express.static(path.join(__dirname)));
app.use('/components', express.static(path.join(__dirname, 'components')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Component Library App is running on http://localhost:${PORT}`);
});
