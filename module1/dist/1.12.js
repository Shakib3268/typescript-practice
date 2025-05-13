"use strict";
{
    // nullable type
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('there is nothing to search');
        }
    };
    searchName(null);
    // unknown typeof
    const getSpeedInMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertSpeed = (value * 1000) / 3600;
            console.log(`the speed is : ${convertSpeed} ms^-1`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is : ${convertSpeed} ms^-1`);
        }
        else {
            console.log('wrong input');
        }
    };
    getSpeedInMeterPerSecond(null);
    // never type
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError('muskil ce error ho geya');
}
