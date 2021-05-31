import { assert } from "chai";
import { findEvenIndex } from "./equal_sides_of_an_array";

describe("FindEvenIndex", () => {
  it("Tests", () => {
    assert.equal(findEvenIndex([1,2,3,4,3,2,1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
    assert.equal(findEvenIndex([1,100,50,-51,1,1]), 1, "The array was: [1,100,50,-51,1,1] \n");
    assert.equal(findEvenIndex([1,2,3,4,5,6]), -1, "The array was: [1,2,3,4,5,6] \n");
    assert.equal(findEvenIndex([20,10,30,10,10,15,35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
    assert.equal(findEvenIndex([10,-80,10,10,15,35,20]), 6, "The array was: [10,-80,10,10,15,35,20] \n");
  });
});