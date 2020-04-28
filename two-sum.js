/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    let savedNums = {};
    nums.forEach((num, index)=>{
        savedNums = {
                    ...savedNums,
                    [num]: index
                    }
    });
    console.log(savedNums)
    let index = 0;
    let solutions  = null;
    while (index < nums.length && solutions === null){
        const number = nums[index];
        if(savedNums[target-number] !== null){
            solutions = [index, savedNums[target-number]];
        }
        index += 1;
        
    }
    return solutions
    
};

const array = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(array, target));
