function bubbleSort(array, n){
    for(i=0; i<= n-1; i++){
        for(j=0; j<= n-i-1; j++){
            if(array[j]> array[j+1]){
                swap(array,j, j+1)
            }
        }
    }
}