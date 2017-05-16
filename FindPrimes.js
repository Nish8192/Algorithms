function findPrimes(num){
	if(num <2){
		return [];
	}
	var array = [2];
	for(var i = 3; i <= num; i = i+2){
		var is_prime = true;
		for(var j = 0; j < array.length; j++){
			if(i % array[j] == 0){
				is_prime = false;
				break;
			}
		}
		if(is_prime){
			array.push(i);
		}
	}
	return array;
}

console.log(findPrimes(100));
