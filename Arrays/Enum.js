const prod = ["dam1", "dam2", "dam3"];
const nums = [1, 2, 3, 4, 5];

prod.forEach(printprod);

function printprod(value, index, array) {
  value += 1;
  index += 1;
  console.log(index, value);
}
