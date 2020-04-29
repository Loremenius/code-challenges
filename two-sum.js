/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    let savedNums = {};
    let solutions  = null;
    let index = 0
    while (solutions === null && index < nums.length){
        const num = nums[index]
        if (savedNums[target-num]>=0){
            solutions = [savedNums[target-num], index]
        }else{
            savedNums = {
                    ...savedNums,
                    [num]: index
                    }
            index += 1
        }
    }
    return solutions
    
};

const array = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(array, target));
