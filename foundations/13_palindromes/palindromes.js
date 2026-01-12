const palindromes = function (text) {
    // strip punctuation
    const strippedText = text.replace(/[^A-Za-z0-9]/g, '');
    const lowerText = strippedText.toLowerCase();
    const reversedText = lowerText.split('').reverse().join('');

    return lowerText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
