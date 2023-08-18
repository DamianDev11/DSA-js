const prod = ["dam1", "dam2", "dam3", "dam4"];

console.log(prod.toString());
console.log(prod.join("|"));

const prod1 = prod.pop();
console.log(prod1);

delete prod[0];
console.log(prod);
