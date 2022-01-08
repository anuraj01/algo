/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  
    // Sort function to correctly sort negative and positive numbers
    let mergedArray = [...nums1, ...nums2].sort(sortNumbers);
    let length = mergedArray.length;
    if (length === 1) return mergedArray[0]
    if (length % 2 === 0) {
        return (mergedArray[length/2] + mergedArray[(length/2) - 1]) / 2; 
    }
    else {
        return mergedArray[(length-1) / 2]
    }
};

var sortNumbers = (a, b) => {
    return a-b;
}


findMedianSortedArrays([3], [-2, -1])
