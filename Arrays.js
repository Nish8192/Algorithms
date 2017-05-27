    // Overwrite the Array class with an insertAt function
Array.prototype.insertAt = function(val, i){
    for(var x = this.length; x > i; x--){
        this[x] = this[x - 1];
    }
    this[i] = val;
    return this;
}
// arr = [1,2,3,4,5,6]
// console.log(arr);
// arr.insertAt(15, 2);
// console.log(arr);
