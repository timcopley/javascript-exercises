const fibonacci = function(index) {
    index = +index;
    if (index === 0) return 0;
    if (index < 0) return 'OOPS';
    
    let prev1 = 0;
    let prev2 = 1;
    let curr = 1;

    for (let i = 1; i < index; i++) {
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
