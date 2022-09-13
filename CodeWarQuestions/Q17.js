/*

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

Problem
- input: integer
- output: string 
  we give the integer in expaned Form


Example / Test Cases
 - 12 --> 10


- 70304
  - Math.floor(70304 / 10000) * 10000 = 70000
      divisor is 10000 is because 70304 has 5 digits
      70304 - 70000 --> 304
  - Math.floor(304 / 100) * 100 = 300
    304-300 = 4
  - Math.floor(4 / 1) = 4; break since divisor is 1

  - at the end, we just join the elements using "+"

Data Structure


Algorithm


Review
- took 18 minutes
- missed the part about not pushing in 0
- looking at other solution, I could have done this without using divisiion
and such

*/

function expandedForm(num) {
  let result = [];
  let divisor;
  let remainder = num;

  while (true) {
    divisor = Number(`1${"0".repeat(String(remainder).length - 1)}`);
    let expandComponent = Math.floor(remainder / divisor) * divisor;

    if (expandComponent === 0) break;

    result.push(expandComponent);
    remainder = remainder - expandComponent;

    if (divisor === 1) break;
  }

  return result.join(' + ');
}