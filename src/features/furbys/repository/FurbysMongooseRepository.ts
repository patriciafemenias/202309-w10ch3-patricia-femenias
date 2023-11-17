import Furby from "../model/Furby.js";
import type { FurbyStructure } from "../types";
import type { FurbysRepository } from "./types";

class FurbysMongooseRepository implements FurbysRepository {
  public async getFurbys(): Promise<FurbyStructure[]> {
    const furbys = await Furby.find();

    return furbys;
  }

  public async getFurbyById(furbyId: string): Promise<FurbyStructure> {
    const furby = await Furby.findById(furbyId);

    if (!furby) {
      throw new Error("Imposible to find a Furby with this ID");
    }

    return furby;
  }
}
export default FurbysMongooseRepository;
