import { dnaStrand } from './complementaryDNA';
import {assert} from "chai";

describe("dnaStrand", function() {
  it("Sample tests", function() {
    assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is");
    assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is");
    assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is");
  });
});