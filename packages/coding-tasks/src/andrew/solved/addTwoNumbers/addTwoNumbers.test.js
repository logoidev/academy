import { describe, it, expect } from "vitest";
import { addTwoNumbers } from "./addTwoNumbers.js";

/* https://leetcode.com/problems/add-two-numbers/ */

describe("Add Two Numbers", () => {
  it("Sum", () => {
    const l1 = [2, 4, 3],
      l2 = [5, 6, 4];
    expect(addTwoNumbers(l1, l2)).toEqual([7, 0, 8]);
  });
  it("Sum", () => {
    const l1 = [9, 9, 9, 9, 9, 9, 9],
      l2 = [9, 9, 9, 9];
    expect(addTwoNumbers(l1, l2)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
  it("Sum", () => {
    const l1 = [0], l2 = [0];
    expect(addTwoNumbers(l1, l2)).toEqual([0]);
  });
});
