let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordene o array numbers em ordem crescente e imprima seus valores;

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];
for (let i = 0; i < numbers.length; i += 1) {
    if (i + 1 < numbers.length) {
        numbersMulti.push(numbers[i] * numbers[i + 1]);
    }else{
        numbersMulti.push(numbers[i] * 2);
    }
}
console.log(numbersMulti);