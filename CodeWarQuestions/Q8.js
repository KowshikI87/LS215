/*

Took: 9 minutes

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

an array [t, k] (in Ruby and JavaScript)


for string

s = "ababab";
the answer is

("ab", 3)
Example #2:

for string

s = "abcde"
the answer is

("abcde", 1)
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

Problem
- input: a word
  - lowercase alphabetic charcters only

- output: number of times you have to repeat the smallest substring
in the word to get the full word


Example/Test Cases
- given

Data Structure



Algorithm
- start iterating through the characters
  - in each iteration, substring = str.slice(0, idx + 1)
    - numRepeat = Math.floor(str.length / subStr.length)
    - if substring.repeat(numREpeat) === str then return numRepeat

Code



just try repeating from smallest substring


*/

function f(s) {
  for (let idx = 0; idx < s.length; idx++) {
    let substr = s.slice(0, idx + 1);
    let substrNumRepeat = Math.floor(s.length / substr.length);

    if (substr.repeat(substrNumRepeat) === s) {
      return [substr, substrNumRepeat];
    }
  }
}

