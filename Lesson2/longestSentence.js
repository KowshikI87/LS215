/* eslint-disable max-len */
let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {


  /*

  Solution Log:

  Solution 1:

  I wanted to use the split method. Now, since the sentences always end with one of [.!?],
  I could have just used these character class as a delimiter. This is a easy solution.
  The only downside is we lose the puncuation

  let delimiter = /[.!?]/;
  let sentences = text.split(delimiter);

  Solution 2:

  This way is describing a regex so that we match the invidual sentences. My first regex was this:
  let pattern = /\w[^.!?]+[.!?]/g
  let sentences = text.match(pattern);

  This works with the match method. Note that when I am trying to use the sentence pattern
  as part of the split method, the result is weird. I won't get into this.

  KEY TO REMEMBER: USE MATCH METHOD WHEN THE PATTERN IS DESCRIBING THE STRING ITSELF. USE SPLIT METHOD
  WHEN TRYING TO SPLIT A TEXT USING SOME SORT OF CHARACTER THAT SEPERTAES INDIVIDUAL STRINGS.

  Solution 3:

  Use Launch School's solution

  let sentenceArray = text.match(/\w[^.!?]*?[.!?]/g)

  The solution is very similar to solution 2. They are using "*" quantiifer instead of "+" and using
  the lazy quantifier to make sure that we get multiple matches. Although, based on my solution, we don't need it.

*/
}

console.log(longText);

longestSentence(longText);

/*
// // console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// // Assuming the last sentence is removed:

// longestSentence(longText);

// // console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.
*/