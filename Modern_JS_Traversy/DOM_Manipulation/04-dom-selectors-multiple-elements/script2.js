// oldie by goodie: document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

//======================================================//
//Set attributes
document.getElementById('app-title').title = 'Shopping List';
////////// or ////////////
document.getElementById('app-title').setAttribute('class', 'title');

//set a variable so you don't have to type this long command line
const title = document.getElementById('app-title');

console.log(title);

// Get/Change content after we retrieve them from them DOM
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';


// New Kid on the Block: document.querySelector() 
// (codeName: 'Game Changer' create with ES6/2015)
// document.querySelector killed JQuery

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
// query by attribute
console.log(document.querySelector('input[type="text"]'));

// query pseudo-selectors from CSS
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
// Now query the list that we just selected
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';


