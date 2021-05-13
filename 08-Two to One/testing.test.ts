import { longest } from './two_to_one';
import {assert} from "chai";

function testing(actual: string, expected: string) {
    assert.equal(actual, expected)
}

describe("Fixed Tests", function() {
    it("Basic tests longest", function() {
        testing(longest("aretheyhere", "yestheyarehere"), "aehrsty");
        testing(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        testing(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
        testing(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
    });
});