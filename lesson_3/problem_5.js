/*

  3 rails

  0, 4, 8, ... (3 between)
  1, 3, 5 ... (1 between)
  2, 6, 9 ... (3 between)


  2 rails

  0, 2, 4 ... (1 between)
  1, 3, 5 ... (1 between)


  4 rails
  0, 6, 12 (5 between)
  1, 5, 7, 11 (3 .. 1 .. 3 ... 1)
  2, 4, 8, 10 (1 .. 3 .. 1 .. 3)
  3, 9 (5 between)

  W _ _ _ _ _ I _ _ _ _ _ R   5
  _ E _ _ _ D _ S _ _ _ E     3 1 3
  _ _ A _ E _ _ _ C _ V       1 3 1
  _ _ _ R _ _ _ _ _ O         5

  while plaintext...
    loop down
    loop up
    add letters to corresponding rail row

*/


function encode(message, railNum) {
  // console.log('WECRLTE'.split('').join('___'));
  // console.log('ERDSOEEFEAOC'.split('').join('_'));
  // console.log('AIVDEN'.split('').join('___'));

  let lettersArray = message.replace(/ /g,'').split('');
  let railMessages = [];
  for (let subArrays = 0; subArrays < railNum; subArrays += 1) {
    railMessages.push([]);
  }
  
  while(lettersArray.length > 0) {
    for (let index = 0; index < railNum; index += 1) {
      if (lettersArray.length > 0) {
        for (let index2 = 0; index2 < railNum; index2 += 1) {
          if (index2 !== index) {
            railMessages[index2].push('_');
          } else {
            railMessages[index].push(lettersArray.shift());
          }
        }
      }
    }
    
    for (let index = railNum - 2; index > 0; index -= 1) {
      if (lettersArray.length > 0) {
        for (let index2 = 0; index2 < railNum; index2 += 1) {
          if (index2 !== index) {
            railMessages[index2].push('_');
          } else {
            console.log(lettersArray[0]);
            railMessages[index].push(lettersArray.shift());
          }
        }
      }
    }
  }

  // console.log(railMessages);
  for (let row = 0; row < railNum; row += 1) {
    console.log(railMessages[row].join(''));
  }

  // let joiner;
  // let rowMessage;
  // // let messageArray = [
  // //   'WECRLTE', 'ERDSOEEFEAOC', 'AIVDEN'
  // // ];

  // for (let row = 0; row < railNum; row += 1) {
  //   if (row % 2 === 0) {
  //     joiner = '_'.repeat();
  //   } else {
  //     joiner = '_';
  //   }

  //   rowMessage = '_'.repeat(row) + railMessages[row].join(joiner);
  //   console.log(rowMessage);
  // }
}

function decode(message, railNum) {
  let lettersArray = message.split('');
  let result = '';
  // let railMessages = [];
  // for (let subArrays = 0; subArrays < railNum; subArrays += 1) {
  //   railMessages.push([]);
  // }


  console.log(result);
}

encode('WE ARE DISCOVERED FLEE AT ONCE', 3);
encode('WE ARE DISCOVERED FLEE AT ONCE', 5);

decode('TEITELHDVLSNHDTISEIIEA', 3);

// working on joiner for non-3 rails