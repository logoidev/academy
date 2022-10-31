import { describe, it, expect } from "vitest";
import { reverseArray } from "./reverseArray.js";

describe("Reverse array", () => {
  it("array", () => {
    const array = [10, 4, 6];
    expect(reverseArray(array)).toEqual([6, 4, 10]);
  });

  it("array", () => {
    const array = [5];
    expect(reverseArray(array)).toEqual([5]);
  });

  it("array", () => {
    const array = [];
    expect(reverseArray(array)).toEqual([]);
  });

  it("array", () => {
    const array = [34, 53, 33];
    expect(reverseArray(reverseArray(array))).toEqual([34, 53, 33]);
  });
});
