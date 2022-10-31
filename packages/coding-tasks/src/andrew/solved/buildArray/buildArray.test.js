import { describe, it, expect } from "vitest";
import { buildArray } from "./buildArray.js";

/* https://leetcode.com/problems/build-array-from-permutation/ */

describe("Build Array from Permutation", () => {
  it("Array", () => {
    const nums = [0, 2, 1, 5, 3, 4];
    expect(buildArray(nums)).toEqual([0, 1, 2, 4, 5, 3]);
  });
});
