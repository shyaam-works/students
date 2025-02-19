const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Enable CORS
server.use(cors());
server.use(middlewares);

// Main db.json (served at "/")
const mainRouter = jsonServer.router("db.json");
server.use("/", mainRouter);

// Additional JSON files for different routes
const routerA = jsonServer.router("CSE-A.json");
const routerC = jsonServer.router("CSE-C.json");

server.use("/CSE-A", routerA);
server.use("/CSE-C", routerC);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
