function generateArr(){
    var arr = [];
    for(let i = 0; i < 100; i++){
        let rand = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
        arr.push(rand);
    }
    return arr;
}

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
function insertionSort(arr){
    var temp;
    for (var i = 1; i < arr.length; i++){
        var idx = i;
        temp = arr[i]
        while(arr[i-1] < arr[i]){
            idx--;
            arr[i] = arr[i-1];
        }
        arr[idx] = temp;
    }
    return arr;
}
var arr = generateArr();
var str = 0100011001010101010000110100101101011001010011110101010100100001
console.log(parseInt(str,2).toString(10));
// console.log(arr);
// console.log(bubbleSort2(arr))
// console.log(selectionSort(arr));
