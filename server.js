const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// Set the port number
const port = 5000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Define the static file directories
app.use(express.static(path.join(__dirname, "/public")));
app.use("/script", express.static(path.join(__dirname, "/script")));
app.use("/css", express.static(path.join(__dirname, "/css")));
app.use("/img", express.static(path.join(__dirname, "/img")));
// Define the routes
app.get("/public/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/public/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/public/api.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/api.html"));
});
app.get("/public/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});
app.get("/public/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});

app.get("/public/survey.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

// Start the servers
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//MYSQL----------------------------------------------------------------------------

//Refrences the database
const MySQLconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "login-hopehacks",
});

//Tells us if the database is connected or not
MySQLconnection.connect((err) => {
  if (err) throw console.log(`Database is not connected`);
  console.log("Databse Connection Succesful!");
});

// REGISTRATION
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
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
app.post("/login", (req, result) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  MySQLconnection.query(query, [username, password], (err, res) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error logging in");
    } else {
      if (result.length > 0) {
        // Login successful
        // Store username in session
        req.session.loggedInUser = username;
        res.status(200).send("Login successful");
      } else {
        // Login failed
        res.status(401).send("Invalid username or password");
      }
    }
  });
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/public/404.html"));
});
