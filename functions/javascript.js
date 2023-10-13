let add7 = (num) => num + 7;
console.log("add7: "+ add7(3));

let multiply = (a, b) => a * b;
console.log("multiply: " + multiply(2, 3));

let capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log("capitalize: " + capitalize("heLLo"));

let lastLetter = (str) => str.slice(-1);
console.log("last letter of abcdefg is " + lastLetter("abcdefg"));