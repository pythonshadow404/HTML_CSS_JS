//querySelectAll()  (New kid on the block)

const ListItems = document.querySelectorAll('.item');
console.log(ListItems);  //returns a NodeList, which is an array-like structure
console.log(ListItems[1]);
console.log(ListItems[1].innerText);
// ListItems.style.color = 'red';  //This cannot be done on a nodeList

ListItems[1].style.color = 'red';

// ListItems.forEach((item) => {
//     item.style.color = 'red';
// });

// ListItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if (index == 1) {
//         item.remove();
//     }

//     if (index == 0){
//         item.innerHTML = `Oranges
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });


const ListItems2 = document.getElementsByClassName('item');
console.log(ListItems2);  // returns an HTMLCollection, which cannot be used with forEach

const ListItemsArray = Array.from(ListItems2); // convert the HTMLCollection to an array

ListItemsArray.forEach((item) => {
    console.log(item.innerText);
});


const ListItems3 = document.getElementsByTagName('li');
console.log(ListItems3); // returns an HTMLCollection which cannot use a forEach

console.log(ListItems3[0].innerText);

