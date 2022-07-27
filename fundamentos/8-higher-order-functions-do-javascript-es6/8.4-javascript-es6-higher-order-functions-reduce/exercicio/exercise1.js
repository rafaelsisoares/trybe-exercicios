const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    const newArray = array.reduce((vetor, item) => vetor.concat(item), []);
    return newArray;
  }

console.log(flatten(arrays));