//your JS code here. If required.
let str = "";
for(let i = 1; i<=20; i++){
	if(i%3==0 && i%5==0){
		str += 'FizzBuzz'+'\n';
		// str += i + '\n';
	}
	else if(i%5==0){
		str += 'Buzz'+'\n';
		// str += i + '\n';
	}
	else if(i%3==0){
		str += 'Fizz'+'\n';
		// str += i + '\n';
	}
}
alert(str);
