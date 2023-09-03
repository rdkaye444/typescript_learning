function reverse_word(word: string): string {
    const result = []
    for (let letter of word) {
        result.unshift(letter)
    }
    return result.join('')
}


console.log(reverse_word('abcdefg'))