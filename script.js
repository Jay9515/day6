function groupSeats(seatingArrangement, n) {
  const rows = seatingArrangement.length;
  const cols = seatingArrangement[0].length;
  let count = 0;

  
  for (let i = 0; i < rows; i++) {
    let consecutiveEmptySeats = 0;

    
    for (let j = 0; j < cols; j++) {
      if (seatingArrangement[i][j] === 0) {
        consecutiveEmptySeats++;
        if (consecutiveEmptySeats === n) {
          count++;
        }
      } else {
        consecutiveEmptySeats = 0;
      }
    }
  }

  return count;
}


const seatingArrangement1 = [
  [0, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 0]
];
console.log(groupSeats(seatingArrangement1, 3));

const seatingArrangement2 = [
  [0, 1, 1, 0, 0, 0, 1],
  [1, 1, 0, 1, 0, 1, 0],
];
console.log(groupSeats(seatingArrangement2, 3));



