function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}

var fu = "01000110  01010101 01000011 01001011  01011001 01001111 01010101 00100001"
var fu2 = "01000110 01110101 01100011 01101011 00100000 01011001 01101111 01110101 00100001"
console.log(binaryAgent(fu));
console.log(binaryAgent(fu2));
