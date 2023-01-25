export function findMaxAverage(nums, k) {
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	let max = sum;
	for (let i = k; i < nums.length; i++) {
		sum = sum - nums[i - k] + nums[i];
		max = Math.max(max, sum);
	}

	return max / k;
}
