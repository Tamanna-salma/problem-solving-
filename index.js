
// Problem 1: Reverse a String

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseString("hello developer")); 


// Problem 2: Count Vowels in a String

function countVowels(text) {
    let count = 0;
    let lowerText = text.toLowerCase(); 
    const vowels = "aeiou";

    for (let i = 0; i < lowerText.length; i++) {
        let alph = lowerText[i];
        
        if (vowels.includes(alph)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Programming"));


// /Problem 3: Check for Palindrome:

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


// Problem 4: Find the Maximum Number:

function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([5, 1, 9, 3])); 


// Problem 5: Remove Duplicates from an Array  :

const number = [1,2,3,2,4,4];  
function noDuplicates(arr){
const newArr= [... new Set(arr)];
return newArr;
}
console.log(noDuplicates(number));


// Problem 6: Sum of All Numbers in an Array:

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4])); 

// Problem 7: Find Even Numbers in an Array:

function Even(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
console.log(Even([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word: 
function capitalizeWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("hello world")); 
