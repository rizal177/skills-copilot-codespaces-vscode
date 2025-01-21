// Create web server
// 1. Create a new Express web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for the comments form
// 5. Start the web server

// Import the Express module
const express = require('express');
// Create a new Express web server
const app = express();
// Import the comments module
const comments = require('./comments');
// Import the body-parser module
const bodyParser = require('body-parser');
// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Comments Page</h1>');
});

// Create a route for the comments page
app.get('/comments', (req, res) => {
  res.send(comments.getComments());
});

// Create a route for the comments form
app.post('/comments', (req, res) => {
  comments.addComment(req.body.comment);
  res.redirect('/comments');
});

// Start the web server
app.listen(3000, () => {
  console.log('Web server is listening on port 3000');
});