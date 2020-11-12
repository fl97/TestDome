/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
    // Your code goes here
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === sum) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);