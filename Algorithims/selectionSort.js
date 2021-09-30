// //This algorithim is used to sort an array by moving low elements to start of the array
// //Time complexity is o(n2)

// function swap(arr,minIdex, currentMin)
// {
//     var temp = arr[minIdex];
//     arr[minIdex] = arr[currentMin];
//     arr[currentMin] = temp;
// }
 
// function selectionSort(arr,  n)
// {
//     var i, j, min_idx;
 
//     // One by one move boundary of unsorted subarray
//     for (i = 0; i < n-1; i++)
//     {
//         // Find the minimum element in unsorted array
//         min_idx = i;
//         for (j = i + 1; j < n; j++)
//         if (arr[j] < arr[min_idx])
//             min_idx = j;
 
//         // Swap the found minimum element with the first element
//         swap(arr,min_idx, i);
//     }
// }

// function printArray( arr)
// {
//     var i;
//     for (i = 0; i < arr.length -1; i++)
//     console.log(arr[i])
// }
 
// var arr = [64, 25, 12, 22, 11];
//     var n = 5;
//     selectionSort(arr, n);

// printArray(arr)

var findMedianSortedArrays = function(nums1, nums2) {
    mergedArray = nums1.concat(nums2);
    mergedArray.sort();
    if(mergedArray.length%2 !==0){
        let median = Math.round(mergedArray.length/2);
        console.log(median)
        return mergedArray[median];
    }
     median = mergedArray.length/2
     const medianValue = (mergedArray[median-1]+ mergedArray[median] )/2
     console.log(median, mergedArray)
     return medianValue
 };

 findMedianSortedArrays([1,2],[3,4])