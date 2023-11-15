import morgan from "morgan";
import app from "./app.js";
import PingController from "./features/ping/controller/PingController.js";

const pingController = new PingController();

app.use(morgan("dev"));

app.use("/", pingController.getPong);
