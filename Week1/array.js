const nums = [1, 2, 3, 4, 5];
nums.map((n) => n * 2); // [2,4,6,8,10]
nums.filter((n) => n % 2 === 0); // [2,4]
nums.reduce((sum, n) => sum + n, 0); // 15
nums.forEach((n) => console.log(n));
nums.find((n) => n > 3); // 4
nums.includes(3); // true
