import express from "express";
import config from "./config";
import router from "./routes";
import { errorHandler } from "./middlewares/ErrorHandling";

const app = express();
const port = config.port;

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
