/*

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.


Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words.


Problem
- Input: string
  - contains words and other characters
  - could be multiline
  - word contains alphabets or apostrophes (')
  - all other characters should be treated as whitespace

- output: array 
  - the array contains the top 3 most occurring words
    - ties can be broken arbitrarily
  - matches are to be in lowercased
  - if we don't have at least 3 words, then return top 2 words, top 1 word, or empty array

- other rules
  - don't sort the entire array of unique words
  - avoid creating an array whose memory footprint is roughly as big as the input text


Example / Test Cases

Examples:
  top_3_words("In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.")
  # => ["a", "of", "on"]

    
  top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
  # => ["e", "ddd", "aa"]

  top_3_words("  //wont won't won't")
  # => ["won't", "wont"]



Data Structure


Algorithm
- input: str
- Step 1: str --> str.toLowerCase()
- Step 2: str.match(/[a-z']+/gm) ---> list of words
- Step 3: create a histogram for list of words
- Step 4: sort the words using their values and return top 3 values

Code


Review
- failed one test case; I am okay with this


*/

//failing as it my regex is taking a single "'" as a word

//so we can use an if condition to eliminate those issues. But I don't quite know
//how to write a regex pattern to get around this issue; I don't think I know how to do this
//regex without more knowledge in regex

function topThreeWords(text) {
  let lowercaseText = text.toLowerCase();
  let wordFreq = wordFreqTable(lowercaseText);

  let top3Words = Object.keys(wordFreq).sort((word1, word2) => wordFreq[word2] - wordFreq[word1]).slice(0, 3)

  return top3Words;
}


function wordFreqTable(text) {
  let wordPattern =  /[a-z']+/gm
  let words = text.match(wordPattern);

  if (!words) {
    return {};
  }

  return words.reduce((freqTable, curntWord) => {
    if (freqTable[curntWord]) {
      freqTable[curntWord] += 1;
    } else {
      freqTable[curntWord] = 1;
    }
    return freqTable;
  }, {});
}

