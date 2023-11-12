// everything in the DOM is a node

let output;
// Get child elements

const parent = document.querySelector('.parent');

output = parent.children;

//parent.chilren is an array-like structure that is zero-based
// access the second item with index of [1]
output = parent.children[1].innerText; 
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';






// console.dir(output);
console.log(output);