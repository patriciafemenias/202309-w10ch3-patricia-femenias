import { Router } from "express";
import PingController from "../controller/PingController.js";

const pingController = new PingController();

const pingRouter = Router();

pingRouter.get("/");
