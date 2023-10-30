//https://www.javatpoint.com/javascript-queryselector

// Element selector
var element = document.querySelector("p");
console.log(element);

// Class selector
var classSelector = document.querySelector(".myClass");
console.log(classSelector);

// Id selector
var idSelector = document.querySelector("#myid");
console.log(idSelector);

//Attribute Selector
// This output will be 'null' because we do not have this attribute
var attributeSelector = document.querySelector('[target]');
console.log(attributeSelector);

