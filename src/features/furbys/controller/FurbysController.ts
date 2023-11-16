import { type Request, type Response } from "express";
import { type FurbysRepository } from "../repository/types";

class FurbysController {
  constructor(public furbys: FurbysRepository) {}

  getFurbys = async (_req: Request, res: Response): Promise<void> => {
    const furbys = await this.furbys.getFurbys();

    res.status(200).json({ furbys });
  };
}

export default FurbysController;
