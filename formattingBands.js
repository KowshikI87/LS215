function processBands(data) {
  return data.map(band => {
    band['name'] = band['name'].replace(".", "");
    let capitalizedWords = band['name'].split(' ').map(word => {
      let wordArray = word.split('');
      wordArray[0] = wordArray[0].toUpperCase();
      return wordArray.join('');
    });
    band['name'] = capitalizedWords.join(' ');
    band['country'] = "Canada";
    return band;
  });
}


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log("stop");

// // should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]