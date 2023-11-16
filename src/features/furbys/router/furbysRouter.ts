import { Router } from "express";
import FurbysController from "../controller/FurbysController.js";
import { type FurbysRepository } from "../repository/types";
import FurbysMongooseRepository from "../repository/FurbysMongooseRepository.js";

const furbysRouter = Router();

const furbysRepository: FurbysRepository = new FurbysMongooseRepository();

const furbysController = new FurbysController(furbysRepository);

furbysRouter.get("/furbyland", furbysController.getFurbys);

export default furbysRouter;
