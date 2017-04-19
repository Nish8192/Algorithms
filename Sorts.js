function bubbleSort(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            while (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                i++;
            }
        }
    }
    return arr
}
// arr = [5, 3, 4, 7, 1, 9, 13]
// console.log(bubbleSort(arr))

function bubbleSort2(arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        for (var i = 0; i < x; i++) {
            var temp = arr[i];
            var j = i;
            while (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                j++;
            }
        }
    }
    return arr
}

function selectionSort(arr){
    for(var x = 0; x < arr.length; x++){
        var min = arr[x];
        for(var y = x; y < arr.length; y++){
            if(arr[y] <= min){
                min = arr[y];
                var pos = y;
            }
        }
        var temp = arr[x];
        arr[x] = min;
        arr[pos] = temp;
    }
    return arr;
}
arr2 = [5, 7, 12, 99, 123, 42, 4, 3, 4, 44, 123, 3434, 13, 7, 1, 9, 13]
// console.log(bubbleSort2(arr2))
console.log(selectionSort(arr2));
