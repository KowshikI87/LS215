/*

Took: 17 minutes

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


Problem

Example / Test Cases


Data Structure


Algorithm
- simple regex Problem
- pattern for whole URL: /https?:\/\/(www\.)?[^\.]+
  - we capture up to before ".com" (could also have .ca or so on)
  - then we just need to output match[2]

Code


*/


//note on match object
//match[0] contains the full match
//later indexes contains the capture groups.
//[1] contains first capture group
//[2] contains second capture grooup and so on

function domainName(url) {
  //first pattern does not take into account
  //that we might not have "https://"" at all
  //let pattern = /https?:\/\/(www\.)?([^\.]+)/;
  let pattern = /(https?:\/\/)?(www\.)?([^\.]+)/
  let match = url.match(pattern);
  return match[3];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("www.xakep.ru"));