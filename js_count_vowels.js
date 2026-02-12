
function countVowels(text) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World"));
