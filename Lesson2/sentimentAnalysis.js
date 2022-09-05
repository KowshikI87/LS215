/*

PEDAC

Problem
- input: text
  - given: two array of words; one for positive words and one for negative
- output:
  - how many positive words; what these words are
  - how many negative words; what these words are
  - sentimnet of text (positive / negative / neutral)
    - positive: number of positive word count > number of negative word count
    - negative, neutral: see defn. of positive to interpolate

- other requirements:
  - have to count the exact word. for example: count dream but not "dreams"

- assumption
  - words are seperated by a single space. even if they are seperted
    - by multiple space then it is fine because those spaces won't get
      - counted anyways
  - sdfd

Example/Test Cases
- given

Data Structure
- array

Algorithm
- positiveWords = [...], negativeWords = [...]
- curntTextPosWords = [], curntTextNegWords = []
- numPosWords = 0; numNegativeWords = 0
- split on " " to get list of words
  - for positive words
    - if the word is in positiveWords then numPosWords += 1
    - if the word is not curntTextPosWords then curntTextPosWords.push(word)
  - for negative words
    - similar logic as above
  - final output is easy to give


Code


Correction from LS solution
- [OKAY] we can include duplicate words multiple times in positiveWord or
  - negativeWord
- [OKAY]I did not know that using "match" method would give a list of words
- [KINDA OKAY] another thing I missed is converting text to lowercase first
  - I would have caught this later on
- [KINDA OKAY] another correction is that the words in the text
  - could have apostrophe. that's why they are using the regex pattern they are
  - but it does not matter as my list of positive and negative words don't have
    - apostrophe in it

*/

//LS Solution

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  //we can use the word boundary but it does not do much here because our
  //pattern already takes care of it. to see this for yourself, look at how
  //many words we have in wordlist when we use word boundary and not use it
  let wordList = text.toLowerCase().match(/[a-z']+/g);

  let positives = wordList.filter(word => positiveWords.indexOf(word) >= 0);
  let negatives = wordList.filter(word => negativeWords.indexOf(word) >= 0);

  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('');
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  let textSentiment;
  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}

sentiment(textExcerpt);