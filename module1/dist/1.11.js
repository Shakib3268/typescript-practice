"use strict";
var _a, _b;
{
    // ternary operartor || optional chaining || nullish coalescing operator 
    const age = 15;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });
    // nullish coleascing
    //  null / undefined ---> decision making
    const IsAutenticate = '';
    const result1 = IsAutenticate !== null && IsAutenticate !== void 0 ? IsAutenticate : 'Guest';
    const resul2 = IsAutenticate ? IsAutenticate : 'Guest';
    console.log({ result1 }, { resul2 });
    const user = {
        name: 'shakib',
        address: {
            city: 'ctg',
            road: 'awasome',
            presentaddress: 'rasulpur'
        }
    };
    const permanentaddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentaddress) !== null && _b !== void 0 ? _b : 'no parmanent address';
    console.log({ permanentaddress });
}
