const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql2");

// Set the port number
const port = 5000;

// Define the static file directories
app.use(express.static(path.join(__dirname, "/public")));
app.use("/script", express.static(path.join(__dirname, "/script")));
app.use("/css", express.static(path.join(__dirname, "/css")));
app.use("/img", express.static(path.join(__dirname, "/img")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Define the routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "api.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.get("login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
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
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  MySQLconnection.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error logging in");
    } else {
      if (result.length > 0) {
        // Login successful
        req.session.loggedInUser = username; // Store username in session
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
