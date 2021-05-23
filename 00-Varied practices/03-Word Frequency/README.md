# Word Frequency

Given a text string and an integer n, return the n most common words in the file (and the number of their occurrences) in decreasing frequency.

Write a function to count the occurrences of each word and return the n most commons words along with the number of their occurences in decreasing frequency.

The function should return a 2D array with each of the elements in the following form: [word, freq]. word should be the lowercase version of the word and freq the number denoting the count.

The function should return an empty array, if no string is provided.

The function should be case insensitive, for example, the strings "Hello" and "hello" should be treated the same.

You can treat words that have special characters such as underscores, dashes, apostrophes, commas, etc., as distinct words.

## Example
For example, given the string "Hello hello goodbye", your function should return [['hello', 2], ['goodbye', 1]].