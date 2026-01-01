import express from "express";
import bodyParser from "body-parser";

const server = express();
server.use(bodyParser.json());

server.listen(8000, "0.0.0.0", () => {
  console.log("Server started.");
});
