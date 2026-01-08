
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


