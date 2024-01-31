// server/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

dotenv.config(); // Load environment variables from config.env

app.use(cors());
app.use(express.json());

// Include API routes
app.use("/api", require("./routes/record"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

/*
 * 
onst express = require("express");

const app = express();

const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});


 */

/*
myProject/
|-- server/
|   |-- db/
|   |   |-- conn.js
|   |-- routes/
|   |   |-- record.js
|   |-- server.js
|-- client/
      |--node_modules
      |--public/
      |--src/
        |--app.css
        |--app.js
        |--index.js
        |--index.css
        |--App.test.js
|-- config.env
|-- package.json

*/