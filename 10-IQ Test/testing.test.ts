import { expect } from "chai";
import { iqTest } from './iq_test';

describe("iqTest", function(){
    it('should return 3 when input is "2 4 7 8 10"', () => {
        expect(iqTest('2 4 7 8 10')).to.eql(3);
    });

    it('should return 1 when input is "1 2 2"', () => {
        expect(iqTest('1 2 2')).to.eql(1);
    });
});