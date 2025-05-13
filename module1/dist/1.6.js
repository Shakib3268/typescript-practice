"use strict";
{
    // learning function
    // normal function
    // Arrow function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => num1 + num2;
    // object -->function --> method
    const pooruser = {
        name: 'shakib',
        balance: 0,
        addBalance(balance) {
            return `My Balance is: ${this.balance + balance}`;
        }
    };
    const arr = [1, 4, 6];
    const newArray = arr.map((elem) => elem * elem);
}
