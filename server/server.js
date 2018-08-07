// This will serve all the assets from the directory (publicPath)

const path = require('path');
const express = require('express');
const app = express(); // create express application
const publicPath = path.join(__dirname, '..', 'public'); // goes up one fulder and then into the public folder
const port = process.env.PORT || 3000; // uses the port from heroku (if it exists);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
}); // runs when there's a get request to our server and gives back index.html if the file is not there

app.listen(port, () => {
  console.log('Server is Up!');
});
