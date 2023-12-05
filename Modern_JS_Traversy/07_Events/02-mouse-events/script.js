const logo = document.querySelector('img');


//Place your functions before the event listeners
const onClick = () => console.log('logo clicked');
// 2. const onDoubleClick = () => console.log('double logo clicked');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple'
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'
    }
}

const onRightClick = () => console.log('logo clicked');

// Event Listeners
//Place your event listeners at the bottom of the page
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick); 
// logo.addEventListener('click', onClick);