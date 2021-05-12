import { number } from "./number_of_people_in_the_bus"
import { assert } from "chai"

describe('number', () => {
  it('basic tests', () => {
    assert.equal(number([[10,0], [3,5], [5,8]]), 5)
    assert.equal(number([[3,0], [9,1], [4,10], [12,2], [6,1], [7,10]]), 17)
    assert.equal(number([[3,0], [9,1], [4,8], [12,2], [6,1], [7,8]]), 21)
    assert.equal(number([[0,0]]), 0)
  });
});