/* //Solution-1
document.write('hello,World!');
//alert('hello,World!');
console.log('hello,World!');

//Solution-2
const firstNum = parseInt(prompt('enter first number'));
const secondNum = parseInt(prompt('enter second number'));
const sum = firstNum + secondNum;
console.log(`the sum of ${firstNum} and ${secondNum} is = ${sum}`);


//Solution-3
const yourNum = parseInt(prompt('enter your number'));
const convertNum = Math.sqrt(yourNum);
console.log(`square root of ${yourNum} is ${convertNum}`);


//Solution-4
const baseNum = parseFloat(prompt('enter base number'));
const heightNum = parseFloat(prompt('enter height number'));
const triangleAre = (baseNum * heightNum ) / 2;
console.log(triangleAre); 
*/

//Solution-5
let x = parseInt(prompt('enter the first number'));
let z = parseInt(prompt('enter the second number'));

[x,z] = [z,x]
console.log(`The value of x after swapping ${x}`);  
console.log(`The value of z after swapping ${z}`);  