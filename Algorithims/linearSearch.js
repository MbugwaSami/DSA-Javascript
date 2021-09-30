//This algorithim iterate through each element in array comparing it to the search value
//Time complexity is O(n)
//Worst case: Element at end of array=>0(n), n=array length

function search(arr, n, x)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}
let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length;
var result = search(arr, n,x)
console.log(result)