// Import Express
const express = require('express');
const app = express();

// Set the port
const port = 8080;
// Set the Public folder
app.use(express.static('public'));
// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}
);