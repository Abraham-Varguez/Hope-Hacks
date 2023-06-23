# Hope-Hacks

This is the API:****************************\*\*\*\*****************************\*\*\*****************************\*\*\*\*****************************

Here's a breakdown of the code:
Event Listener:
The code attaches an event listener to the search form's submit event. When the form is submitted, the listener function is triggered.
Inside the listener function, it prevents the default form submission behavior and retrieves the search query entered by the user.
fetchAPI Function:
This function is an asynchronous function that performs an API call to the Edamam API.
It constructs the API endpoint URL by incorporating the search query, APP_ID, and APP_key into the URL.
The fetch function is used to send a GET request to the API endpoint, and the response is awaited.
The response is then parsed into JSON format using the json method, and the resulting data is passed to the generateHTML function.
generateHTML Function:
This function takes the results from the API response and generates HTML markup to display the recipe data on the web page.
It iterates over each recipe result using the map method and generates HTML for each result.
The recipe details, such as label, image, calories, weight, cuisine type, diet labels, and recipe URL, are extracted from each result and inserted into the generated HTML markup.
The generated HTML is then assigned to the innerHTML property of the searchResultDiv element, replacing any existing content with the new recipe search results.

This is a explination of the Server.js connecting to the API and the npm packages that needed to be downloaded:******\*\*******\*\*\*\*******\*\*******

This code snippet demonstrates a basic setup for an Express.js server that serves static files and defines routes for different paths. It can be used as a starting point for building web applications with Express.js. Let's break it down and explain it step by step:

### Installation

Before running this code, make sure you have Node.js and Express.js installed. You can install Express.js by running the following command in your project directory:

```shell
npm install express
```

### Usage

1. Import the required modules:

```javascript
const express = require("express");
const app = express();
const path = require("path");
```

The code imports the `express` module, creates an instance of the `express` application, and imports the `path` module for file path manipulation. 2. Set the port number:

```javascript
const port = 5000;
```

This line sets the port number to `5000`. You can change it to any available port you prefer. 3. Define the static file directories:

```javascript
app.use(express.static(path.join(__dirname, "/public")));
app.use("/script", express.static(path.join(__dirname, "/script")));
app.use("/css", express.static(path.join(__dirname, "/css")));
app.use("/img", express.static(path.join(__dirname, "/img")));
```

These lines define the static file directories that will be served by the server. The `express.static` middleware is used to serve static files from the specified directories. Here, we have defined four directories: "public", "script", "css", and "img". Any files inside these directories can be accessed by visiting the corresponding URLs. 4. Define the routes:

```javascript
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "api.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
```

These route definitions handle GET requests to different paths ("/", "/about", "/api", "/contact", "/login"). When a request is made to any of these paths, the server responds by sending the corresponding HTML file using the `res.sendFile` method. Make sure you have HTML files with the specified names in the same directory as this script. 5. Handle 404 errors:

```javascript
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/public/404.html"));
});
```

This code defines a middleware that handles 404 errors. If none of the defined routes match the requested path, this middleware is executed. It responds with a 404 status code and sends the "404.html" file located in the "public" directory. 6. Start the server:

```javascript
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

This code starts the server and listens for incoming requests on the specified port. When the server is running, it logs a message to the console indicating the server's URL.

### Running the Server

To run the server, save the code in a file (e.g., `server.js`), navigate to the directory containing the file in your terminal, and execute the following command:

```shell
node server.js
```

You should see the console message indicating that the server is running on the specified port. You can then visit the URLs corresponding to the defined routes (e.g., http://localhost:5000, http://localhost:5000/about, etc.) in your web browser to access the respective HTML files.
Feel free to modify the code according to your application's needs and extend it with additional routes and functionality.

This is a explination of the Server.js connecting to the Database Using MySQL and the npm packages that needed to be downloaded:**************************************************************\*\***************************************************************

## Database Setup

This code connects the server to a MySQL database and performs registration and login operations. The database is used to store user information such as usernames, emails, and passwords.

To set up the database, follow these steps:

1. Install MySQL on your computer.
2. Create a new database named "login-hopehacks" in your MySQL installation.
3. Create a table named "users" inside the "login-hopehacks" database with the following columns:
   - `username` (VARCHAR) - to store the username of the user.
   - `email` (VARCHAR) - to store the email address of the user.
   - `password` (VARCHAR) - to store the password of the user.

## Running the Server

1. Install the required dependencies by running the following command in the project directory:

   ```
   npm install express mysql2
   ```

2. Start the server by running the following command:

   ```
   node server.js
   ```

   The server will start running on `http://localhost:5000`.

## Registering a User

To register a new user, send a POST request to `http://localhost:5000/register` with the following JSON payload:

```json
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

The server will insert the provided user information into the `users` table in the database.

## Logging In

To log in as a user, send a POST request to `http://localhost:5000/login` with the following JSON payload:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

The server will check if the provided username and password match any records in the `users` table. If a match is found, it will return a "Login successful" message with a status code of 200. Otherwise, it will return an "Invalid username or password" message with a status code of 401.

## Handling Errors

If the server encounters any errors while connecting to the database or executing queries, it will return an appropriate error message with a status code of 500.

## Handling Missing Pages

If a user tries to access a page that doesn't exist on the server, the server will return a 404 page not found error with a status code of 404.

That's it! You now have a basic understanding of how the database is set up and how to interact with the server for user registration and login.

Example:

![Login on Website](/img/readme-img/Screen%20Shot%202023-06-23%20at%201.20.58%20PM.png)
![Database Information Stored](/img/readme-img/Screen%20Shot%202023-06-23%20at%201.21.56%20PM.png)
