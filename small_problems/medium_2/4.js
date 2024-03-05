function fridayThe13ths(year) {
  let counter = 0;

  for (let month = 0; month < 12; month += 1) {
    day = new Date(year, month, 13);
    if (day.getDay() === 5) {
      counter += 1;
    }
  }

  return counter;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2