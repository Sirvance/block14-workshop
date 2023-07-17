// function filterOddNumbers(numbers) {
//   const oddNumbers = numbers.filter(number => number % 2 !== 0);
//   return oddNumbers.length === 1 ? oddNumbers : oddNumbers;
// }

// // Test cases
// const arrays = [
//   [2, 4, 6, 8, 11, 20, 15, 22],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [70, 42, 55, 81, 21, 91, 34],
//   [2, 4, 6, 8, 10, 11, 12]
// ];

// arrays.forEach(arr => {
//   const result = filterOddNumbers(arr);
//   console.log(result);
// });







function countConsonantsAndVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let consonantCount = 0;
    let vowelCount = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  
    return `${word} has ${consonantCount} consonants and ${vowelCount} vowels`;
  }
  
  // Test cases
  const words = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];
  
  words.forEach(word => {
    const result = countConsonantsAndVowels(word);
    console.log(result);
  });





  
  
  
  
  
  function reverseArray(arr) {
    const reversedArray = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
  
    return reversedArray;
  }
  
  // Test cases
  const arrays = [
    [1, 2, 3],
    [1, 3, 5, 7, 9, 11],
    [20, 50, 30, 60, 200],
    [1, -1, 2, -3, 5, -8, 13]
  ];
  
  arrays.forEach(arr => {
    const reversed = reverseArray(arr);
    console.log(reversed);
  });





  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }