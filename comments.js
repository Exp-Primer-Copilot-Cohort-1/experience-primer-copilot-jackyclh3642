// Create web server
// 1. Create an express application
// 2. Create a route handler for GET requests to '/'
// 3. Listen on port 3000

// 1. Create an express application
// express returns a function
// require returns the function
const express = require('express');

// express() returns an object
// app is an object
// app is the application that will listen to http requests
const app = express();

// 2. Create a route handler for GET requests to '/'
// app.get() is a route handler
// route handler takes two arguments
// 1. route: string that describes the route
// 2. callback: function that is called when the route is matched
app.get('/', (req, res) => {
  res.send('Hi there!');
});

// 3. Listen on port 3000
// app.listen() is a function
// app.listen() returns an object
// app.listen() is a function that takes two arguments
// 1. port: number that specifies the port to listen to
// 2. callback: function that is called when the app starts listening
app.listen(3000, () => {
  console.log('Listening...');
});