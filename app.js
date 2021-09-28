nums = [1, 2, 3, 2, 4, 5]
    // var removeDuplicates = function(nums) {
    //     let i = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[j] != nums[i]) nums[++i] = nums[j];
    //     }
    //     return ++i;
    // };
var containsDuplicate = function(nums) {
    let duplicate = false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i !== nums[j]) {
                duplicate = true;
            }
        }
    }
    return duplicate
};
console.log(containsDuplicate(nums))