const nums = [5, 10, 33, 78, 3, 64, 54, 12, 6];

let max = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (max < nums[i]) {
    max = nums[i];
  }
}

console.log(max);
