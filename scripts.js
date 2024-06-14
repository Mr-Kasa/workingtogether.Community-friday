function Addnums(nums, target) {
    // Create a map to store the complement of each number and its index
    let map = {};
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        
        // Check if the complement exists in the map
        if (map.hasOwnProperty(complement)) {
            // Return the indices if found
            return [map[complement], i];
        }
        
        // Store the current number and its index in the map
        map[num] = i;
    }
    
    // If no solution found, though it's guaranteed that there will always be one
    return [];
}
let nums = [2, 7, 11, 15];
let target = 9;
console.log(Addnums(nums, target));