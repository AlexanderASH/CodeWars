# ComplementaryDNA
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more [Wikipedia](http://en.wikipedia.org/wiki/DNA)

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here [Exercises-Source](http://rosalind.info/problems/list-view/)

## Example

```typescript
dnaStrand("ATTGC") // return "TAACG"
dnaStrand("GTAT") // return "CATA"
```