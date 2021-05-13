// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { dirReduc } from "./reducelo";

describe("example", function() {
  it("test", function() {
    assert.deepEqual(dirReduc(["NORTH", "SOUTH","SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
    assert.deepEqual(dirReduc(["NORTH", "SOUTH", "WEST", "EAST"]), []);
    assert.deepEqual(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST"]), ["EAST"]);
  });
});