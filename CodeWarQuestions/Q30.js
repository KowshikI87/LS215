/* eslint-disable max-len */
/*

Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.


Problem
- input: two words in array
  - the words are always in lowercase
- output: integer
  - how many characters do we need to remove in total
    from both words so they are anagram of each other

Example / Test Cases

Data Structure


Algorithm

  Algorithm 1 --> Does not Work

    - how do we know where to remove characters from?

    - worst case, we can remove all the characters


    - sort both words alphabetically

    - start going through both words using idx
    - 

    codewars ---> a c d e o r s w

    hackerrank ---> a a c e h k k n r r

    a c d e o r s w

    a c e h k k n r r

    at this point, if I choose to remove e from lower words

    I will only end up shorter words that I need to

    --> removing characters does not seem to work as we can 
    remove more characters than needed


  Algorithm 2
    - trying to remove charactes one by one to look for a match
    does not work (try it with the test case in problem; you
      end up with different solution depending on how and from
      where you remove characters from)

    create character frequency for both words

    then use filter on one of the word's character histogram
    - only keep the character that also exist in second word

    so, now I have a list of characters that I want to keep

    how many of them do we want to keep?
     - the minimum number of occurence in either word

    total char to remove = w1.length + w2.length - 2 * (total number of occurence of common characters)

Review
- took 35 minutes
*/

function anagramDifference(w1,w2) {
  let word1FreqTable = getFreqTable(w1);
  let word2FreqTable = getFreqTable(w2);

  let commonChars = Object.keys(word1FreqTable).filter(char => {
    return word2FreqTable[char];
  });

  let commonCharsFreq = commonChars.map(char => {
    let charFreqInWord1 = word1FreqTable[char];
    let charFreqInWord2 = word2FreqTable[char];
    return Math.min(charFreqInWord1, charFreqInWord2);
  });

  return (w1.length + w2.length) - 2 * arrSum(commonCharsFreq);
}

function getFreqTable(word) {
  return word.split('').reduce((freqTable, curntChar) => {
    if (freqTable[curntChar]) {
      freqTable[curntChar] += 1;
    } else {
      freqTable[curntChar] = 1;
    }
    return freqTable;
  }, {});
}

function arrSum(arr) {
  return arr.reduce((sum, curntNum) => {
    return sum + curntNum;
  }, 0);
}

// console.log(anagramDifference('codewars', 'hackerrank'));

