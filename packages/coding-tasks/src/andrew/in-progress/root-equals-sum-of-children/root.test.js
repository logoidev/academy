import { describe, it, expect } from "vitest";
import { checkTree } from "./root.js";

/* https://leetcode.com/problems/root-equals-sum-of-children/ */

describe("Root Equals Sum of Children", () => {
  it("Root", () => {
    const root = [10, 4, 6];
    expect(checkTree(root)).toEqual(true);
  });

  it("Root", () => {
    const root = [5, 3, 1];
    expect(checkTree(root)).toEqual(false);
  });

  it("Root", () => {
    const root = [
      534, 3, 1, 5, 45, 45, 34, 6, 42, 64, 35, 53, 23, 5, 53, 34, 53, 33,
    ];
    expect(checkTree(root)).toEqual(true);
  });
});
