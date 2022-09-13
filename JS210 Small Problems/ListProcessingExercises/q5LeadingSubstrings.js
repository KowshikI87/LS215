function leadingSubstrings(str) {
  let result = [];
  for (let idx = 0; idx < str.length; idx++) {
    result.push(str.slice(0, idx + 1));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]