// @vitest-environment jsdom
import { describe, it, vi, expect, beforeAll } from "vitest";

import { mockCanvasGetter } from "./__mocks__/canvas";

import { initCanvas, drawFrame } from "../script.js";

describe("Snake", () => {
  beforeAll(() => mockCanvasGetter());

  it("draws first frame", () => {
    const { canvas } = initCanvas();
    drawFrame("right");
    expect(canvas).toMatchImageSnapshot();
  });

  it("draws frames until horizontal intersection", () => {
    const { canvas } = initCanvas();
    new Array(37).fill(1).forEach(() => drawFrame("right"));
    expect(canvas).toMatchImageSnapshot();
  });

  it("draws frames until vertical intersection", () => {
    const { canvas } = initCanvas();
    new Array(21).fill(1).forEach(() => drawFrame("down"));
    expect(canvas).toMatchImageSnapshot();
  });

  describe("keyboard input", () => {
    it.todo("gives new direction");
  });
});
