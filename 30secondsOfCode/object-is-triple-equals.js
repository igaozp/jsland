console.log({} === {}); // false
console.log(Object.is({}, {})); // false

console.log(1 === 1); // true
console.log(Object.is(1, 1)); // true

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
