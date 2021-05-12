import { getSum } from './sum_of_numbers';
import { assert } from "chai";

describe("getSum", function(){
  it("Sample Tests", function() {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
    assert.strictEqual(getSum(-14, 3), -99);
    assert.strictEqual(getSum(-50, 0), -1275);
    assert.strictEqual(getSum(5, -1), 14);
  });
});