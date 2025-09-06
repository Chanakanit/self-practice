// Test 1: Write a function addProperty(obj, key, value) that adds a new property to an object and returns the updated object.
function addProperty(obj, key, value) {
  // write code here
  obj[key] = value;
  return obj;
}
console.log("Test 1:", addProperty({ name: "John" }, "age", 25)); // { name: 'John', age: 25 }
console.log("Test 1:", addProperty({}, "city", "New York")); // { city: 'New York' }

// Test 2: Write a function mergeObject(obj1, obj2) that merges two objects.
function mergeObject(obj1, obj2) {
  // write code here
  return { ...obj1, ...obj2 };
}
console.log(
  "Test 2:",
  mergeObject({ name: "John", age: 25 }, { city: "New York" })
); // { name: 'John', age: 25, city: 'New York' }
console.log(
  "Test 2:",
  mergeObject({ name: "Jane" }, { age: 30, country: "USA" })
); // { name: 'Jane', age: 30, country: 'USA' }

// Test 3: Write a function getFreqOfWords(sentence) that returns an object with frequency of each word (ignore case).
function getFreqOfWords(sentence) {
  // write code here
  if (typeof sentence !== "string") {
    return undefined;
  }
  return sentence
    .toLowerCase()
    .split(" ")
    .reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = 1;
      } else {
        acc[cur]++;
      }
      return acc;
    }, {});
}
console.log(
  "Test 3:",
  getFreqOfWords("Today is present and present is your gift")
); // { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log("Test 3:", getFreqOfWords("Do you best just do it")); // { do: 2, you: 1, best: 1, just: 1, it: 1 }
console.log("Test 3:", getFreqOfWords(null)); // undefined
console.log("Test 3:", getFreqOfWords(undefined)); // undefined

// Test 4: Write a function extractAndRename(obj) that extracts name and age, rename to fullName and yearsOld
function extractAndRename(obj) {
  // write code here
  let { name: fullname, age: yearsOld } = obj;
  return { fullname, yearsOld };
}
console.log(
  "Test 4:",
  extractAndRename({ name: "John", age: 25, city: "New York" })
); // { fullName: 'John', yearsOld: 25 }
console.log("Test 4:", extractAndRename({ name: "Jane", age: 30 })); // { fullName: 'Jane', yearsOld: 30 }

// Test 5: Write a function mergeAndDestructure(obj1, obj2) that merges two objects and extracts specific properties
function mergeAndDestructure(obj1, obj2) {
  // write code here
  let mergeOp = { ...obj1, ...obj2 };
  let { name, age } = mergeOp;
  return { name, age };
}
console.log(
  "Test 5:",
  mergeAndDestructure({ name: "John", age: 25 }, { city: "New York" })
); // { name: 'John', age: 25 }
console.log(
  "Test 5:",
  mergeAndDestructure({ name: "Jane" }, { age: 30, country: "USA" })
); // { name: 'Jane', age: 30 }

// Test 6: Write a function removeDuplicateWords(sentence) that removes duplicate words (case-insensitive) while preserving order
function removeDuplicateWords(sentence) {
  // write code here
  if (typeof sentence !== "string") {
    return "";
  }
  let splitWord = sentence.split(" ");
  let arr = [];
  for (let i of splitWord) {
    arr.map((x) => x.toLowerCase()).includes(i.toLocaleLowerCase())
      ? ""
      : arr.push(i);
  }
  return arr.join(" ");
}
console.log(
  "Test 6:",
  removeDuplicateWords("This is a test This test is easy.")
); // "This is a test easy."
console.log("Test 6:", removeDuplicateWords("Hello hello HELLO world!")); // "Hello world!"
console.log("Test 6:", removeDuplicateWords("One two two three three three")); // "One two three"
console.log("Test 6:", removeDuplicateWords("")); // ""
console.log("Test 6:", removeDuplicateWords(null)); // ""

// Test 7: Write a function findValue(arr) that returns an object with min, max, sum, avg of the array
function findValue(arr) {
  // write code here
  const sum = arr.reduce((acc, cur) => acc + cur);
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    sum: sum,
    avg: sum / arr.length,
  };
}
console.log("Test 7:", findValue([1, 2, 3, 4, 5])); // { min: 1, max: 5, sum: 15, avg: 3 }

// Test 8: Write a function convertToUppercase(arr) that returns a new array with all strings uppercase
function convertToUppercase(arr) {
  // write code here
  return arr.map((e) => e.toUpperCase());
}
console.log("Test 8:", convertToUppercase(["hello", "world"])); // ['HELLO', 'WORLD']
console.log("Test 8:", convertToUppercase(["javascript", "is", "fun"])); // ['JAVASCRIPT', 'IS', 'FUN']

// Test 9: Write a function findMax(arr) that returns the maximum value using reduce
function findMax(arr) {
  // write code here
  return Math.max(...arr);
}
console.log("Test 9:", findMax([1, 2, 3, 4])); // 4
console.log("Test 9:", findMax([10, 5, 8, 7])); // 10

// Test 10: Write a function removeFalsyValues(arr) that returns a new array with all falsy values removed
function removeFalsyValues(arr) {
  // write code here
  return arr.filter((ar) => (ar ? ar : ""));
}
console.log("Test 10:", removeFalsyValues([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log("Test 10:", removeFalsyValues(["a", "", "b", null, "c"])); // ['a', 'b', 'c']
console.log("Test 10:", removeFalsyValues([null, undefined, "A"])); // ['A']

// Test 11: Write a function doubleAndFilterEvenNumbers(arr) that filters odd numbers and doubles the rest
function doubleAndFilterEvenNumbers(arr) {
  // write code here
  return arr.filter((ar) => ar % 2 === 0).map((e) => e * 2);
}
console.log("Test 11:", doubleAndFilterEvenNumbers([1, 2, 3, 4])); // [4, 8]
console.log("Test 11:", doubleAndFilterEvenNumbers([5, 6, 7, 8])); // [12, 16]

// Test 12: Write a function filterEvenNumbers(arr) that returns only even numbers
function filterEvenNumbers(arr) {
  // write code here
  return arr.filter((ar) => ar % 2 === 0);
}
console.log("Test 12:", filterEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log("Test 12:", filterEvenNumbers([5, 6, 7, 8])); // [6, 8]

// Test 13: Write a function populateArray(length, value) that creates an array filled with the value
function populateArray(length, value) {
  // write code here
  const arr = new Array(length);
  return arr.fill(value);
}
console.log("Test 13:", populateArray(3, "a")); // ['a', 'a', 'a']
console.log("Test 13:", populateArray(5, 0)); // [0, 0, 0, 0, 0]

// Test 14: Write a function squareNumbers(arr) that returns a new array with each number squared
function squareNumbers(arr) {
  // write code here
  return arr.map((ar) => ar * ar);
}
console.log("Test 14:", squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log("Test 14:", squareNumbers([5, 6])); // [25, 36]

// Test 15: Write a function processNumbers(arr) that squares numbers, filters out even numbers, and returns sum of remaining
function processNumbers(arr) {
  // write code here
  return arr
    .filter((ar) => ar % 2 !== 0)
    .reduce((acc, cur) => acc + cur ** 2, 0);
}
console.log("Test 15:", processNumbers([1, 2, 3, 4])); // 10 (1^2 + 3^2)
console.log("Test 15:", processNumbers([5, 6, 7, 8])); // 74 (5^2 + 7^2)

// Test 16: Write a function topN(arr, n) that returns the largest n numbers from the array (sorted descending).
function topN(arr, n) {
  // write code here
  return arr
    .slice()
    .sort((a, b) => b - a)
    .slice(0, n);
}
console.log("Test 16:", topN([10, 20, 5, 30, 25], 3)); // [30, 25, 20]

// Test 17: Write a function reverseWordsAndSwapCase(sentence) that reverses word order and swaps case of each letter.
function reverseWordsAndSwapCase(sentence) {
  // write code here
  return sentence
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map((w) =>
      w === w.toUpperCase() ? w.toLocaleLowerCase() : w.toUpperCase()
    )
    .join("");
}
console.log("Test 17:", reverseWordsAndSwapCase("Hello World")); // "wORLD hELLO"

// Test 18: Write a function calcSumAndProduct(arr) that returns an object with sum and product using reduce.
function calcSumAndProduct(arr) {
  // write code here
  return {
    sum: arr.reduce((acc, cur) => acc + cur),
    product: arr.reduce((acc, cur) => acc * cur),
  };
}
console.log("Test 18:", calcSumAndProduct([1, 2, 3, 4])); // { sum: 10, product: 24 }

// Test 19: Write a function countChar(sentence, char) that counts how many times a specific character appears.
function countChar(sentence, char) {
  // write code here
  return sentence.split("").filter((w) => char === w).length;
}
console.log("Test 19:", countChar("programming", "m")); // 2
console.log("Test 19:", countChar("hello world", "o")); // 2

// Test 20: Write a function sortByLength(arr) that sorts an array of strings by their length.
function sortByLength(arr) {
  // write code here
  return arr.sort((a, b) => a.length - b.length);
}
console.log("Test 20:", sortByLength(["apple", "fig", "banana", "kiwi"])); // ["fig", "kiwi", "apple", "banana"]

// Test 21: Write a function isPalindromeIgnoreSpaces(sentence) that checks if it's a palindrome ignoring spaces and case.
function isPalindromeIgnoreSpaces(sentence) {
  // write code here
  let joinSen = sentence.trim().toLowerCase().split(" ").join("");
  let joinSenRev = sentence
    .trim()
    .toLowerCase()
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .join("");
  return joinSen === joinSenRev;
}
console.log(
  "Test 21:",
  isPalindromeIgnoreSpaces("A man a plan a canal Panama")
); // true
console.log("Test 21:", isPalindromeIgnoreSpaces("Hello")); // false

// Test 22: Write a function chunkArray(arr, size) that splits an array into groups of a given size.
function chunkArray(arr, size) {
  // write code here
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, size + i));
  }
  return result;
}
console.log("Test 22:", chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]

// Test 23: Write a function flattenArray(arr) that flattens a nested array into a single array.
function flattenArray(arr) {
  // write code here
  return arr.flat(Infinity);
}
console.log("Test 23:", flattenArray([1, [2, 3], [4, [5]]])); // [1, 2, 3, 4, 5]

// Test 24: Write a function findLongestWordWithLength(sentence) that returns both the longest word and its length.
function findLongestWordWithLength(sentence) {
  // write code here
  const longWord = sentence
    .split(" ")
    .reduce((acc, cur) => (acc.length < cur.length ? (acc = cur) : acc));
  return { word: longWord, length: longWord.length };
}
console.log(
  "Test 24:",
  findLongestWordWithLength("I love programming in JavaScript")
);
// { word: "programming", length: 11 }

// Test 25: Write a function countVowels(sentence) that counts the number of vowels in a string.
function countVowels(sentence) {
  // write code here
  const vowels = ["a", "e", "i", "o", "u"];

  return sentence
    .toLowerCase()
    .split("")
    .filter((c) => vowels.includes(c)).length;
}
console.log("Test 25:", countVowels("hello world")); // 3
console.log("Test 25:", countVowels("javascript")); // 3
