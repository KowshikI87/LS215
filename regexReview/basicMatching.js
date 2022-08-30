//String.fromCharCode(9) puts "tab" in the text
let text = "Hello" + String.fromCharCode(9) + "hi";

if (text.match(/\t/)) {
  console.log("has tab");
}