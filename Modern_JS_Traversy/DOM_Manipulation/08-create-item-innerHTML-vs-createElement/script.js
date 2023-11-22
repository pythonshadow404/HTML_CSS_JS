// Quick & Dirty
function createListItem(item){
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`;

    document.querySelector('.items').appendChild(li);
}

//call the function
// createListItem('Eggs');

// Clean and Perforant version
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createNewItem('Cheese')

/*Now, is this a huge deal in this situation? No, it's not. 
Just know that using innerHTML. So using this first method 
causes the web browser to reparse and recreate all the DOM nodes 
inside the Ul element. So this is less efficient than creating 
new elements and appending them. So the second way is going to be 
more performant. Also, setting innerHTML will not automatically 
reattach event handlers to the new elements it creates, so you would 
have to keep track of them manually. I know we haven't gotten into 
events yet, but it can cause some issues with attaching event handlers. 
But again, I'm not going to sit here and tell you that this is a horrible 
way of doing it. And you will see this quite a bit. */ 

