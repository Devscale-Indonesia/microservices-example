import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.get("/", (_, res) => res.json({ message: "Hello World from API Gateway" }));

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:8001",
  })
);

app.use(
  "/posts",
  createProxyMiddleware({
    target: "http://localhost:8002",
  })
);

app.use(
  "/comments",
  createProxyMiddleware({
    target: "http://localhost:8003",
  })
);

app.listen(3000, () => console.log("Listening on port 3000"));
