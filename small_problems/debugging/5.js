function range2(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range2(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));