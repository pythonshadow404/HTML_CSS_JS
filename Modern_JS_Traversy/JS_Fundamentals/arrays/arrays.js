// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
// Create an array using the array constructor and array object
const numbers2 = new Array(22, 45, 33, 76, 54);
// An array of strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// An array of mixed data types
const mixed_array = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is Array
val = Array.isArray(numbers);

/* NOTE:  Alright, so that's a very simple way to check, 
to see if something is actually an array and this 
is useful when we're dealing with the DOM, 
because we can return, for instance, 
a NodeList from the DOM, which is structured like an array 
but it's not an actual array. So we can't do certain things 
like forEach loops. So it's a good way to test, to see 
if something's an array, and then you can convert it into 
an array if you need to. */

// Insert into an array
numbers[2] = 100;
val = numbers.indexOf(36);
val = numbers[3];

// // Mutating arrays
// // Add to end
// numbers.push(250);

// // Add to front
// numbers.unshift(120);

// // Take off from the end
// numbers.pop();

// // take off from the front
// numbers.shift();

// // Splice values
// numbers.splice(1,3);

// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// User the "compare function"
/**So you notice that the first number is sorted 
 * and that's probably not what you want to do. 
 * So what you want to do to fix this is use what's 
 * called the compare function. So you want to pass in 
 * the callback to this sort. So I'll show you how to do that. 
 * Let's say use the compare function. So we would do val 
 * equals numbers.sort and then what you would do is pass 
 * in a function here and this function takes in two variable, 
 * you can call this whatever you want x and y is popular, 
 * a and b sometimes and then all you want to do is return x-y. */

// val = numbers.sort(function(x,y){
//     return x-y;
// })

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// })

// find method takes in a testing function
function under50(num){
    return num < 50;
}

function over50(num){
    return num > 50;
}

val = numbers.find(under50);

val2 = numbers.find(over50);

console.log (numbers);
console.log(val);
console.log(val2);