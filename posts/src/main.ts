import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "localhost:3000" }));

app.get("/", (_, res) => res.json({ message: "Hello World from Posts Services" }));

app.listen(8002, () => console.log("Listening on port 8002"));
