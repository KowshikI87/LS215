/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

Problem
- input: string
  - characters and "#"
  - # acts as backspace
- output: string
  - for each "#", we remove the preceeding character


Example / Test Cases

  "abc#d##c"      ==>  "ac"
    "ac"
  "abc##d######"  ==>  ""
    ####
  "#######"       ==>  ""
  ""              ==>  ""


Data Structure


Algorithm

  - while(str.includes("#")
    str = str.replace(/^##/g, "")

Review
- took: 16 minutes (took a bit of time to get the pattern for "not #"
  (only way to do this is to use characer class))
- pay a bit more attention to test cases such as when we ony have "#",
  return empty string

*/

function cleanString(s) {
  let pattern = /[^#]#/g;
  let cleanedStr = s;

  while (cleanedStr.match(pattern)) {
    cleanedStr = cleanedStr.replace(pattern, "");
  }

  //deals with cases when we only have "#" remaining in the string
  return cleanedStr.replace(/#/g, "");
}

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));

