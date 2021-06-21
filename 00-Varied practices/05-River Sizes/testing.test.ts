import chai from 'chai';
import { describe } from 'mocha';
import { riverSizes } from './river_sizes';

describe("River Sizes", function() {
    it('Test Case #1', function () {
      const testInput = [
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0],
      ];
      const expected = [1, 2, 2, 2, 5];
      chai.expect(riverSizes(testInput).sort((a, b) => a - b)).to.deep.equal(expected);
    });
});
