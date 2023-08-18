const prod = ["dam1", "dam2", "dam3"];
const nums = [1, 2, 3, 4, 5];

prod.forEach(printprod);

const mapNums = nums.map(addOne);
console.log(mapNums);

const filteredNums = nums.filter(lessThree);
console.log(filteredNums);

let sumNums = nums.reduce(sumAll);
console.log(sumNums);

function sumAll(total, value, index, array) {
  return total + value;
}

function printprod(value, index, array) {
  console.log(index, value);
}

function addOne(value, index, array) {
  return value + 1;
}

function lessThree(value, index, array) {
  return value % 2 == 0;
}

const numVals = [2, 4, 6, 8];
const newVals = numVals.map(doubleVals);
console.log(newVals);

function doubleVals(value, index, array) {
  return value * 2;
}
