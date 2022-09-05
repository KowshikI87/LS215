//thinking process:
//the local part is easy
//for the domain part, we have one component then followed by one or more
//instances of ".component"

//LS solution is similar to mine. For domain part, they are saying
//opne ore more instances of "component."" and then "component"
//I like my solution better

function isValidEmail(email) {
  let pattern = /^[a-zA-Z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/;
  if (email.match(pattern)) {
    return true;
  } else {
    return false;
  }
  // return !!email.match(pattern); //shortcut which I won't use
}

//deal with two components only first for the domain name

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));          // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false