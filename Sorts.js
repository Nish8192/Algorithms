function generateArr(length, lim){
    var arr = [];
    var length = length || 10;
    var lim = lim || 100;
    for(let i = 0; i < length; i++){
        let rand = Math.floor(Math.random() * (lim - 0 + 1)) + 0;
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
    for(var outer = 1; outer < arr.length; outer ++){
        var idx = outer;
        var temp = arr[outer];
        while(temp < arr[idx - 1] && idx > 0){
            arr[idx] = arr[idx - 1];
            idx--;
        }
        arr[idx] = temp;
    }
    return arr;
}
Array.prototype.insertAt = function(i, val){
    for(var x = this.length; x >= i; x--){
        this[x] = this[x-1];
    }
    this[i] = val;
    return this;
}

//Arrays must be sorted before combining
function combineArr(a1, a2){
    var result = [], x = 0, y = 0;
    while(a1[x]){
        while(a2[y]){
            if(!a1[x]){
                break;
            }
            while(a1[x] <= a2[y] && !(a1[x] > a2[y+1])){
                result.push(a1[x]);
                x++;
            }
            while(a2[y] <= a1[x] && !(a2[y] > a1[x+1])){
                result.push(a2[y]);
                y++
            }
        }
        if(a1[x]){
            result.push(a1[x]);
            x++;
        }
    }
    for(var i = y; y < a2.length; y++){
        result.push(a2[y]);
    }
    return result;
}

var arr = generateArr();

// console.log(arr);
// console.log(bubbleSort2(arr))
// console.log(selectionSort(arr));
// console.log(insertionSort(arr));

// var a1 = [6,14,17,20], a2 = [2,13,14,15,19];
var a1 = generateArr(), a2 = generateArr();

a1 = insertionSort(a1);
a2 = insertionSort(a2);
result = combineArr(a1, a2);

console.log(result, result.length);
