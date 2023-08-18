const num1 = [0, 0, 0, 1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 7, 7, 8, 9];
const nums = num1.reverse();
console.log(nums);
nums.sort();
const removeDup = [];

for (let i = 0; i < nums.length; i++) {
  if (i < nums.length - 1) {
    if (nums[i] !== nums[i + 1]) {
      removeDup.push(nums[i]);
    }
  } else {
    removeDup.push(nums[i]);
  }
}

console.log(nums);
console.log(removeDup);
