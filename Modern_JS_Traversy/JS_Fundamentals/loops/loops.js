// FOR LOOP
// for(declaration of a variable i.e. var or let not const; condition; increment of variable)

// for(let i = 0; i<10; i++){
//     if(i==2){
//         console.log('2 is my favorite number');
//         continue;
//     }
    
//     if(i==5){
//         console.log('Stop the loop')
//         break;
//     }
//     console.log(i);
// }

// WHILE LOOP
// So how do we set up a while loop is 
// we set the variable outside of the loop
// let i = 0;
// while(i<10){
//     console.log('Number ' + i);
//     i++;
// }

//DO WHILE LOOP

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// }

// while(i<10);


// LOOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// METHOD 1: REGULAR FOR LOOP
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

//METHOD 2: FOREACH METHOD for arrays
// NOTE: The foreach method takes a callback function
// the callback function takes in upto three arguments,
// (the iterator, the index, and the entire array)
// but the iterator is what is important.  The iterator 
// is sometimes called current or cur, but we like 
// to use the singular form of the variable.

// cars.forEach(function(car, index, array){
//     // console.log(car)
//     console.log(`${index} : ${car}`);  //template strings `${var}`
//     console.log(array);
// });


// const planets = ['earth', 'mars', 'saturn', 'venus', 'mercury']
// planets.forEach(function(planet){
//     if(planet == 'venus'){
//         break;
//     }
//     console.log(planet);
// });



/*JavaScript's forEach() function executes a function on every element 
in an array. However, since forEach() is a function rather than a loop, 
using the break statement is a syntax error:*/
// planets.forEach(function(planet){
//     if(planet == 'venus'){
//         break;        //SyntaxError: Illegal break statement ==>https://masteringjs.io/tutorials/fundamentals/foreach-break
//     }
//     console.log(planet);
// });


// MAP looping
/*Now we also have a method called map and map can work in a few different ways 
actually, but it's basically used to return something different. 
So we're to return a different array.*/

// const users = [
//     {id: 1, name:'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'},
//     {id: 4, name: 'Steve'}
// ];

// // Let's create an array of the ids from the array of objects above
// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);


// FOR IN LOOP (similar to Python)
const user = {firstName: 'John',
lastName: 'Doe',
age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}