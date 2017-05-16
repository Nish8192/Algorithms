// Reverse digits of an integer.
//
// Example1: x = 123, return 321
// Example2: x = -123, return -321


function ReverseInt(num){
    var num = num + "";
    var arr = num.split("");
    var arr2 = [];
    if(arr[0] === "-"){
        var i = 1;
        arr2.push(arr[0]);
    }
    else{
        var i = 0;
    }
    var x = arr.length - 1;
    while(i <= x){
        arr2.push(arr[x]);
        x--;
    }
    var result = "";
    for(let y = 0; y < arr2.length; y++){
        result += arr2[y];
    }
    return parseInt(result);
}
console.log(ReverseInt(-123));
console.log(typeof(ReverseInt(-123)));
