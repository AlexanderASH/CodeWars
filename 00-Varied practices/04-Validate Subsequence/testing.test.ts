import chai from 'chai';
import { isValidSubsequence } from './validate_subsequence';

describe("Subsequence", function() {
    it('Test Case #1', function () {
      const array = [5, 1, 22, 25, 6, -1, 8, 10];
      const sequence = [1, 6, -1, 10];
      chai.expect(isValidSubsequence(array, sequence)).to.deep.equal(true);
    });
});
