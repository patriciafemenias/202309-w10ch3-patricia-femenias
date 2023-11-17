import { type Request } from "express";
import type { FurbyStructure } from "../types";

export interface FurbysRepository {
  getFurbys: () => Promise<FurbyStructure[]>;
  getFurbyById: (furbyId: string) => Promise<FurbyStructure>;
}

export type FurbyByIdRequest = Request<{ furbyId: string }>;
