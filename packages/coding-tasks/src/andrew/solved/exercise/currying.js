const sum = (one) => (two) => (three) => one + two + three;

function sum2(one) {
    return function sum3(two) {
        return function sum4(three) {
            return one + two + three;
        }
    }
}

const addToTwo = sum2(2)(5)

console.log(addToTwo)

