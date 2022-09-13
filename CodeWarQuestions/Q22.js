//prevous solution

function scramble(s1, s2) {
  if (s2.length < s1.length) return false;
  let str1Chars = s1.split('');
  for (let index = 0; index < s2.length; index++) {
    if (str1Chars.includes(s2[index])) {
      str1Chars.splice(str1Chars.indexOf(s2[index]), 1);
    } else {
      return false;
    }
  }
  return true;
}