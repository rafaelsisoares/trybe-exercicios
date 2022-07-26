const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    const newArray = array.map((vetor) => vetor.reduce((union, array) => union + array));
    return newArray;
  }

console.log(flatten(arrays));