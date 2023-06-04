import express, { Request, Response } from "express";
import config from "../config.json";

const PORT = config.PORT;
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/api", (req: Request, res: Response) => {
  res.json(config.ENDPOINTS);
});

app.get("/api/:id", (req: Request, res: Response) => {
  let request;
  try {
    config.ENDPOINTS.forEach((element) => {
      if (req.path == element) {
        request = element;
      }
    });

    if (request) {
      res.send("works");
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
