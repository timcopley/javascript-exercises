const sumAll = function(numA, numB) {

    function verifyNum(num) {
        if (num >= 0 && Math.floor(num) === num && typeof(num) === 'number') {
            return true
        } else return false
    }

    if (!verifyNum(numA) || !verifyNum(numB)) return 'ERROR';

    let sum = 0;
    let a, b;
    if (numA <= numB) {
        a = numA;
        b = numB;
    } else { 
        a = numB;
        b = numA;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
