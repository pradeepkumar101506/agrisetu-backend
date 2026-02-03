import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middlewares/error.middleware";
import routes from "./routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

// Error handler (last middleware)
app.use(errorHandler);

export default app;
