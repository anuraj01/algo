/**
  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
  
  Example 1:
  Input: nums1 = [1,3], nums2 = [2]
  Output: 2.00000
  Explanation: merged array = [1,2,3] and median is 2.
  
  Example 2:
  Input: nums1 = [1,2], nums2 = [3,4]
  Output: 2.50000
  Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  
 */

/**
 * Step 1 : Concat both arrays
 * Step 2 : Sort it in ascending order again, to make sure the concat array is sorted
 * Step 3 : If length of concat array is odd, return mid element / 2
 * Step 4 : If length is even, return center 2 elements and dividedby 2
 *
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
