"use strict";
{
    // type assertion
    let anything;
    anything = 'next web developement',
        anything;
    const KgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = KgToGm(1000);
    const result2 = KgToGm('1000');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
