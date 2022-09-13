/*

//done algorithmcially in 5 minutes

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

the first and last characters remain in original place for each word
characters between the first and last characters must be sorted alphabetically
punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

words are seperated by single spaces
only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
special characters do not take the position of the non special characters, for example: -dcba -> -dbca
for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
ignore capitalisation


words.split(word => {
  let firstChar = word[0]
  let lastChar = word[word.length - 1]

  //how do I make sure that puncuation stays where it is?
  first: remainingChars = word.slice(1, word.length - 1)
  allAlphabetSorted = remainingChars.match(/[a-z]/).sort()

  //now, go through the remainingChars
    //if I encounter a special characters
    //then split allAlphabetsSorted into two parts (part 1, part2)
    //return part1 + puncuation + part2

})

*/

