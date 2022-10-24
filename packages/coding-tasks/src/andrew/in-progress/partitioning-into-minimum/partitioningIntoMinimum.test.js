import { describe, it, expect } from "vitest";
import { minPartitions } from "./partitioningIntoMinimum.js";

describe("Partitioning Into Minimum Number Of Deci-Binary Numbers", () => {
  it("Minimum Number", () => {
    const n = 32;
    expect(minPartitions(n)).toEqual(3);
  });
});
