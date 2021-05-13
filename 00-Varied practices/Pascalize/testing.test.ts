// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";
import { toPascalCase } from './pascalize';

describe("example", function() {
  it("test", function() {
    assert.equal(toPascalCase("hey jude"), "HeyJude");
    assert.equal(toPascalCase("i-like-javaSCRIPT"),  "ILikeJavascript");
    assert.equal(toPascalCase("software DEVeloPment IS my pasSion"), "SoftwareDevelopmentIsMyPassion");
  });
});