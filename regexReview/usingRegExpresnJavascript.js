// let text = 'We read War of the Worlds.';
// let regMatch = text.match(/(['"]).+\1/);
// // console.log(regMatch[0]);
// // console.log(regMatch[1]);
// // console.log(regMatch[2]);

// // console.log(text.replace(/(['"]).+\1/, '$1'));
// console.log(text.replace(/(['"]).+\1/, '$1The Time Machine$1'));
// console.log(text.replace(/(['"]).+\1/, '$1-$1-$1-$1'));
// // outputs: We read "The Time Machine".

let text = "cat dog hello";
let regmatch = text.match(/cat/);
console.log(regmatch[0]);
console.log(regmatch[1]);