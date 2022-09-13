/*

Took: 5 minutes; most of BS is due to coderpad not returning array for line 17
of second test case

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1


*/

function solution(fullText, searchText) {
  let pattern = new RegExp(searchText, 'g');
  let matches = fullText.match(pattern) || [];
  return matches.length;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
console.log(('aaabbbcccc', 'bbb'));