// --- Day 4: Secure Container-- -
//     You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.

// However, they do remember a few key facts about the password:

// It is a six - digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same(like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same(like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria(double 11, never decreases).
// 223450 does not meet these criteria(decreasing pair of digits 50).
// 123789 does not meet these criteria(no double).
// How many different passwords within the range given in your puzzle input meet these criteria ?

//     Your puzzle input is 172851 - 675869.

function findPassword(lowRangeInt, highRangeInt) {
    // store passwords in array
    let potentialPasswords = [];
    for (let i = lowRangeInt; i <= highRangeInt; i ++) {
        if (doesItHaveDoubles(i) && doTheyDecrease(i)) {
            potentialPasswords.push(i);
        }
    }
    return potentialPasswords;
}

console.log('checking potential passwords between 111 and 123: ', findPassword(111, 123));


function doesItHaveDoubles(int) {
    let lastDigit = 0;
    let doubles = false;
    let arrayOfInt = Array.from(int.toString()).map(Number);
    // console.log('array? ', arrayOfInt);
    
    for (let i = 0; i < arrayOfInt.length; i++) {
        if (arrayOfInt[i] === lastDigit) {
            // console.log('int @ i: ', arrayOfInt[i], 'lastDigit: ', lastDigit);
            doubles = true;
            return doubles;
        } else {
            lastDigit = arrayOfInt[i];
            // console.log('last digit? ', lastDigit);
        }
    }
    return doubles;
};

// console.log('trying double thing 111111, should be true: ', doesItHaveDoubles(111111));
// console.log('trying double thing 123789, should be false: ', doesItHaveDoubles(123789));
// console.log('trying double thing 123378, should be true: ', doesItHaveDoubles(123378));

function doTheyDecrease(int) {
    let lastDigit = 0;
    let doesNotDecrease = true;
    let arrayOfInt = Array.from(int.toString()).map(Number);


    for (let i = 0; i < arrayOfInt.length; i++) {
        if (arrayOfInt[i] < lastDigit) {
            doesNotDecrease = false;
            return doesNotDecrease;
        } else {
            lastDigit = arrayOfInt[i];
        }
    }
    return doesNotDecrease;
}

// console.log('checking if they decrease 111111, should be true: ', doTheyDecrease(111111));
// console.log('checking if they decrease 112111, should be false: ', doTheyDecrease(112111));
// console.log('checking if they decrease 123450, should be false: ', doTheyDecrease(123450));

