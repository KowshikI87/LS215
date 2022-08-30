function isUrl(url) {

  //note that, because third test case to return false
  //we have to say we want non whitespace character after "//"
  let pattern = new RegExp(/^https?:\/\/\S+$/);

  // //this also works for pattern
  // let pattern = /^https?:\/\/\S+$/;


  if (url.match(pattern)) {
    return true;
  } else {
    return false;
  }

  // return url.match(pattern);
}

console.log(isUrl('http://launchschool.com'));
console.log(isUrl('https://example.com'));
console.log(isUrl('https://example.com hello'));
console.log(isUrl('   https://example.com'));

