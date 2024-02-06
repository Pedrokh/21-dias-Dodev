let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function commonNumbers(array1, array2) {
  let result = [];
  let counter = 0;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        result[counter] = array1[i];

        counter++;
        j = array2.length;
      }
    }
  }
  return result;
}

console.log(commonNumbers(arrayA, arrayB));
