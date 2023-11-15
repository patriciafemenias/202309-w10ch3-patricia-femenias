import morgan from "morgan";
import chalk from "chalk";
import app, { startServer } from "./app.js";
import PingController from "./features/ping/controller/PingController.js";
import connectToDataBase from "./database/index.js";
import pingRouter from "./features/ping/router/PingRouter.js";

const pingController = new PingController();

app.use(morgan("dev"));

app.use("/", pingRouter);

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("Missing MongoDB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDataBase(mongoUrl);

startServer(+port);
