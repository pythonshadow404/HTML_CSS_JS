// To get the HTML button element assigned the variable 'button' we will need to use 
// the JavaScript 'document object' in the browser environment.
// const button = document.getElementById('button');
const button = document.querySelector('#button');
// or by the class: const button = document.querySelector('.btn');


console.log(button); //We're gonna see our button with the ID of button and the class of btn and that has a bunch of properties and methods on it that we can do things with.

// Now we want something to happen when we click this button. So it needs to have what we call an event listener. the button object has a method (methods have parentheses) we can attach to it.
button.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
