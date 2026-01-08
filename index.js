
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