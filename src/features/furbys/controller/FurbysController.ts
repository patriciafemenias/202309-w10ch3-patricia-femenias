import { type Request, type Response } from "express";
import type { FurbysRepository, FurbyByIdRequest } from "../repository/types";

class FurbysController {
  constructor(private readonly furbysRepository: FurbysRepository) {}

  getFurbys = async (_req: Request, res: Response): Promise<void> => {
    const furbys = await this.furbysRepository.getFurbys();

    res.status(200).json({ furbys });
  };

  public getFurbyById = async (
    req: FurbyByIdRequest,
    res: Response,
  ): Promise<void> => {
    const { furbyId } = req.params;

    try {
      const furby = await this.furbysRepository.getFurbyById(furbyId);

      res.status(200).json({ furby });
    } catch {
      res.status(404).json({ error: "Furby not found" });
    }
  };
}

export default FurbysController;
