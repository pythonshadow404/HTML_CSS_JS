console.log('page loaded...')

/*
Now, there's a few different types of 
functions or different ways of writing
functions in JavaScript that I want to 
show you. So we're going to look at 
function declarations, function expressions. 
Also, something called an IFFE which is an 
immediately invocable function expresssion 
and also property methods. 
*/

// Function Declarations

function greet(firstName){
    // console.log('Hello');
    return 'Hello ' + firstName;
}

// console.log(greet('John'));


//==========================================================//
//FUNCTION EXPRESSIONS
/*Alright, now function expression is 
basically putting a function as a variable assignment.*/


// An anonymous function does not have a name
/* const add_value = function(){
    This function is anonymous
}*/
// vs
/* function greet(){
    This function is not anonymous because it has a name
}
*/
const square = function(x){
    return x*x;
};

// Default argument
const square_me = function(x = 3){
    return x*x;
};

//IMMEDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran...')
// })();

// IIFEs can also take in parameters
// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS
/* When a function is put inside of an object it is call a method*/

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);  // template string (``) backticks
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}


todo.add();
todo.edit(22);
todo.delete();