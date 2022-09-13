/*

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)


Problem
- input: string
  - lowercase alphabet only
  - contains at least one letter
- output: string



- don't think I can use regex



Example / Test Cases


Data Structure


Algorithm
- we start iterating at character 2. if character 2's charCode >= charCode of last character in current
substring then we append. Otherwise
  - update maximum
  - restart substring at current character


*/


