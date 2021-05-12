import { digPow } from "./playing_with_digits";
import { assert } from "chai";

function dotest(n: number, p: number, expected: number) {
    assert.equal(digPow(n, p), expected);
}

describe("Fixed Tests", function() {
    it("digPow", function() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(114, 3, 9);
    });
});