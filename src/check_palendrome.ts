function reverse_word(word: string): string {
    const result = []
    for (let letter of word) {
        result.unshift(letter)
    }
    return result.join('')
}

function check_palindrome(word1: string): boolean {
    return word1 == reverse_word(word1);
}


const words_to_check = ['abcdefg', 'abcdefgfedcba', 'lionoil', ''];

console.log(words_to_check);
console.log(words_to_check.map(check_palindrome));
