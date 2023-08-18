const prod = ["dam1", "dam2", "dam3"];

const prod2 = [...prod];
const prod3 = prod.slice(0, 3);

const prod5 = [].concat(prod);
const prod6 = Array.from(prod);

const prod4 = prod.splice(0, 3); //mutator

console.log(prod2);
console.log(prod3);

console.log(prod5);
console.log(prod6);

console.log(prod4);

console.log(prod);
prod.push("damm");
console.log(prod);
prod.length = 4;
console.log(prod);
prod.length = 1;
console.log(prod);
