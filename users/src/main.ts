import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use((req, res, next) => {
  if (req.headers.host === "localhost:3000") {
    next();
  }

  return res.status(403).send("No access");
});

app.get("/", (_, res) => res.json({ message: "Hello World from Users Services" }));

app.listen(8001, () => console.log("Listening on port 8001"));
