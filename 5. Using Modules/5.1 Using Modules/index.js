// 1. Install Express by running: npm install express --save
// 2. Import the express module
const express = require('express');
// 3. Create an instance of the express module
const app = express();
// 4. Define a port number
const port = 3000;

// 5. Use the express.static middleware to serve static files from the public directory
app.use(express.static('public'));

// 6. Listen for requests on the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });


// 7. Create a folder called public
// 8. Create a file called index.html inside the public folder
// 9. Go into the index.html file.
// 10. Start the Script by running node index.js and open your browser to http://localhost:3000/