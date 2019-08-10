/*
String Methods
*/
const learning = 'Learning JavaScript is great!';
const email = 'email@email';

//length
output = learning.length;
//concat
output = learning.concat(" ", "and fun");
//uppercase
output = learning.toUpperCase();
//lowercase
output = learning.toLocaleLowerCase();
// Index of     -1 for negative results
output = learning.indexOf('JavaScript');
//check if @ exists in the form
output = email.indexOf('@');

if(output > 0) {
    console.log('Valid email');
} else {
    console.log('Invalid email');
}
//substring
output = learning.substring(0, 10);
//substring from the end
output = learning.substring(learning.length - 6);
//Slice
output = learning.slice(0,10);
output = learning.slice(-10);
//Split
output = learning.split(' ');
// Replace
output = learning.replace('JavaScript', 'Modern JS');
// Includes
output = learning.includes('Javascript');
//repeat
let greet = 'Hello ';
output = greet.repeat(5);