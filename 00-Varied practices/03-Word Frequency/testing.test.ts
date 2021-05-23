// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { wordFrequency } from './word_frequency';

describe("example", function() {
  it("test", function() {
    assert.deepEqual(wordFrequency("Hello hello world", 2), [['hello', 2], ['world', 1]]);
    assert.deepEqual(wordFrequency("The quick brown fox jumped over the lazy dog", 1), [['the', 2]]);
    assert.deepEqual(wordFrequency("Opensource opensource open-source open source", 1), [['opensource', 2]]);
    assert.deepEqual(wordFrequency("Apple App apply aPP aPPlE", 3), [['apple', 2], ['app', 2], ['apply', 1]]);
    assert.deepEqual(wordFrequency("c d a d c a b d d c", 4), [['d', 4], ['c', 3], ['a', 2], ['b', 1]]);
    assert.deepEqual(wordFrequency("", 5), []);
  });
});