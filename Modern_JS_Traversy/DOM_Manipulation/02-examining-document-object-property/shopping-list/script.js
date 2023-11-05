let output;

output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement;
output = document.body;
output = document.head;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0]; // HTMLCollection works like an array
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action; //action is the page where the form submits to 


// document.forms[0].id = 'new-id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0]; //gives us the first image
output = document.images[0].src;

// HTMLCollection is array-like but, 
// we cannot use a ForEach loop on it.
// document.forms.forEach((form) => console.log(form));
// We should get an error telling us that forEach is 
// not a function for an HTMLCollection
// we can use forEach on querySelector

// to use a forEach on HTMLCollection, we must 
// convert it to an array with the arrayFrom method
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));




console.log(output);