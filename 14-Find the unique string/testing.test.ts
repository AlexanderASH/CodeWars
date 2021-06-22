import { assert } from "chai";
import { findUniq } from './find_the_unique_string';

describe('findUniq', () => {
  it('should handle sample cases', () => {
    // assert.strictEqual(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']), 'BbBb');
    assert.strictEqual(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']), 'foo');
    // assert.strictEqual(findUniq(['silvia', 'vasili', 'victor']), 'victor');
    // assert.strictEqual(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']), 'Harry Potter');
    // assert.strictEqual(findUniq(['    ', 'a', ' ']), 'a');
  });
});