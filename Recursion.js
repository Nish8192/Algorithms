    //Recursively add all numbers from 1 to a
function rSigma(a){
    if(a <= 0){
        return 0;
    }
    a = Math.floor(a);

    if(a > 0){
        return a + rSigma(a - 1);
    }
}
// console.log(rSigma(3));
// console.log(rSigma(5));

    //Recursively find the factorial of a (a!)
function rFactorial(a){
    if(a <= 0){
        return 1;
    }
    a = Math.floor(a);

    if(a >= 1){
        return a * rFactorial(a - 1);
    }
}
// console.log(rFactorial(3));
// console.log(rFactorial(6));

    //Recursively return the numTH number in the Fibonacci Sequence
function rFibonacci(a){
    a = Math.floor(a);
    if(a <= 1){
        return 0;
    }
    if(a <= 2){
        return 1;
    }
    return rFibonacci(a - 1) + rFibonacci(a - 2);
}
// console.log(rFibonacci(10));

    //Recursively find if a value exists in arr w/ Binary Search
function rBinarySearch(arr, val){
    if(arr.length <= 1){
        if(arr[0] === val){
            return true;
        }
        else{
            return false;
        }
    }
    var min = 0, max = arr.length - 1;
    var i = Math.floor((max + min) / 2);
    if(arr[i] === val){
        return true;
    }
    if(arr[i] > val){
        return rBinarySearch(arr.slice(0, i), val);
    }
    if(arr[i] < val){
        return rBinarySearch(arr.slice(i + 1, max + 1), val);
    }
}
// console.log(rBinarySearch([1, 3, 5, 6], 4));
// console.log(rBinarySearch([4, 5, 6, 8, 12], 5));

    //Recursively replace all '?' with either 1 or 0 returning an array of all possible outcomes
function rStringExpansion(str){

}

function rFloodFill(canvas, sXY, newColor){
    var currColor = canvas[sXY[0]][sXY[1]];
    canvas[sXY[0]][sXY[1]] = newColor;
    if(sXY[0] > 0){
        if(canvas[sXY[0] - 1][sXY[1]] === currColor){
            sXY[0]--;
            return rFloodFill(canvas, sXY, newColor);
        }
    }
    if(sXY[1] > 0){
        if(canvas[sXY[0]][sXY[1] - 1] === currColor){
            sXY[1]--;
            return rFloodFill(canvas, sXY, newColor);
        }
    }
    if(sXY[0] < canvas.length - 1){
        if(canvas[sXY[0] + 1][sXY[1]] === currColor){
            sXY[0]++;
            return rFloodFill(canvas, sXY, newColor);
        }
    }
    if(sXY[1] < canvas[sXY[0]].length - 1){
        if(canvas[sXY[0]][sXY[1] + 1] === currColor){
            sXY[1]++;
            return rFloodFill(canvas, sXY, newColor);
        }
    }
    return canvas;
}
var canvas = [ [3,2,3,4,3],
                [2,3,3,4,0],
                [7,3,3,5,3],
                [6,5,3,4,1],
                [1,2,3,3,3]]
    console.log(rFloodFill(canvas, [2,2], 1));
