import type { FurbyStructure } from "../types";

export class FurbysRepository {
  public getFurbys(): FurbyStructure[] {
    return furbys;
  }
}

export const furbys = [
  {
    id: 39442,
    name: "Sunny Yellow",
    year: 1999,
    type: "baby",
  },
  {
    id: 39444,
    name: "Spring Time",
    year: 1999,
    type: "baby",
  },
];
