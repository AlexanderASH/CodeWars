import { add } from './a_chain_adding_function';
import {assert} from "chai";

describe('solution', () => {
  it('should work when called once', () => {
    assert(add(1) == 1);
  });
  it('should work when called twice', () => {
    assert(add(1)(2) == 3);
  });
  it('should work when called 5 times', () => {
    assert(add(1)(2)(3)(4)(5) == 15);
  });
});