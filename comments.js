// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is a page for comments!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});