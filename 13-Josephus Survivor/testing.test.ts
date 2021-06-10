import { assert } from "chai";
import { josephusSurvivor } from "./josephus_survivor";

describe("Basic tests", function() {
  it("josephusSurvivor(7, 3)", () => assert.strictEqual(josephusSurvivor(7, 3), 4));
  it("josephusSurvivor(11, 19)", () => assert.strictEqual(josephusSurvivor(11, 19), 10));
  it("josephusSurvivor(40, 3)", () => assert.strictEqual(josephusSurvivor(40, 3), 28));
  it("josephusSurvivor(14, 2)", () => assert.strictEqual(josephusSurvivor(14, 2), 13));
  it("josephusSurvivor(100, 1)", () => assert.strictEqual(josephusSurvivor(100, 1), 100));
  it("josephusSurvivor(1, 300)", () => assert.strictEqual(josephusSurvivor(1, 300), 1));
  it("josephusSurvivor(2, 300)", () => assert.strictEqual(josephusSurvivor(2, 300), 1));
  it("josephusSurvivor(5, 300)", () => assert.strictEqual(josephusSurvivor(5, 300), 1));
  it("josephusSurvivor(7, 300)", () => assert.strictEqual(josephusSurvivor(7, 300), 7));
  it("josephusSurvivor(300, 300)", () => assert.strictEqual(josephusSurvivor(300, 300), 265));
});