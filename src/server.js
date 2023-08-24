import express from "express";
import { router } from "./routes/routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(router);

app.listen(3000, () =>
  console.log(`lisnting server ${3000}`)
);
