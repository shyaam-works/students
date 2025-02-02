const jsonServer = require("json-server"); // Importing json-server
const cors = require("cors"); // Importing the cors package

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your JSON data
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Set port to either process.env.PORT or 8080

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
