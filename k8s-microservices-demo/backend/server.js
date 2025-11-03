const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// Read DB details from environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to database successfully!");
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running and connected to DB!');
});

app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});
