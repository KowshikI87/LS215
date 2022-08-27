function totalArea(rectangles) {
  return rectangles.reduce((total, currentRectangle) => {
    return total + (currentRectangle[0] * currentRectangle[1]);
  }, 0);
}

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));
console.log(totalSquareArea(rectangles));
