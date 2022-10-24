import { describe, it, expect } from "vitest";
import { findMaxAverage } from "./MaximumAverageSubarray.js";

describe("Maximum Average Subarray I", () => {
  it("maximum", () => {
    const nums = [1, 12, -5, -6, 50, 3],
      k = 4;
    expect(findMaxAverage(nums, k)).toEqual(12.75);
  });
  it("maximum", () => {
    const nums = [5],
      k = 1;
    expect(findMaxAverage(nums, k)).toEqual(5.0);
  });
  it("maximum", () => {
    const nums = [0],
      k = 1;
    expect(findMaxAverage(nums, k)).toEqual(0.0);
  });
  it("maximum", () => {
    const nums = [3, 3, 4, 3, 0],
      k = 3;
    expect(findMaxAverage(nums, k)).toEqual(10/3);
  });
  it("maximum", () => {
    const nums = [1,0,1,4,2],
      k = 4;
    expect(findMaxAverage(nums, k)).toEqual(1.75);
  });
});
