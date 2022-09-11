"use strict";

// console.log("Hello");

// let number = 5;
// const leftBorderWidth = 1;
// number = 33;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 11;

// console.log(obj);

const arrObj = {
    a: 'a',
    c: 'c'
};
arrObj.b = '1234';
arrObj['d'] = '34';


for(let i in arrObj) {
    console.log(i + ": " + arrObj[i]); 
}