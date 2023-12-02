const clearBtn = document.querySelector('#clear')

// function onClear(){
//     alert('custom clear function')
// }

function onClear(){
    const removeItems = document.querySelector('ul');
    const items = removeItems.querySelectorAll('li');

    // removeItems.innerHTML = '';

    // items.forEach((item) => item.remove());

    while (removeItems.firstChild){
        removeItems.removeChild(removeItems.firstChild);
    }
}


// Using JavaScript Event Listeners //



// clearBtn.onclick = function() {
// 	alert('Clear Items')
// };

// use addEventListerner is the best way to work with events
// addEventListerner is a method that takes in an event and call back function
// clearBtn.addEventListener('click', function() {
//     alert('Button addEventListener to clear items')
// });

// version2 short hand.
// clearBtn.addEventListener('click', () => alert('Button addEventListener to clear items'));

// An alert is synchronous and it's a blocking operation.  
// Nothing can happen until the alert is complete.

// clearBtn.addEventListener('click', () => console.log('Button addEventListener to clear items'));

// We can use a named function also, not just an anonymous one
// ***Remember NOT to add the parenthesis after the function
// doing so will cause the event to execute automatically***
// clearBtn.addEventListener('click',onClear);

// remove the addEventListener first then the DOM element
// clearBtn.addEventListener('click',onClear);

// remove the addEventListener
// setTimeout(() => clearBtn.removeEventListener('click',onClear), 5000);

//## Have the program do the removing by script
// setTimeout(() => clearBtn.click(), 5000);