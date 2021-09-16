function main(numOne, numTwo) {
    var quotient;

    //Only change code below this line
    
    if (numTwo === 0) {
        quotient = "divide by 0! Cannot divide by zero!";
    }else
        quotient = numOne / numTwo;

        return quotient;

    //Only change code apove this line
}

console.log(main(15,3));

module.exports = main;