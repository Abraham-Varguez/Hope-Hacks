const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const port = 5550;



app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//MYSQL
const MySQLconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "login-hopehacks",
});

MySQLconnection.connect((err) => {
  if (err) throw console.log(`Database is not connected`);
  console.log("Databse Connection Succesful!");
});

// REGISTRATION
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // INSERT A NEW USER TO DATABASE
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  MySQLconnection.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error registering user");
    } else {
      res.status(200).send("User registered successfully");
    }
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a user in the database
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  MySQLconnection.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error logging in");
    } else if (result.length === 0) {
      res.status(401).send("Invalid username or password");
    } else {
      res.status(200).send("Login successful");
    }
  });
});
