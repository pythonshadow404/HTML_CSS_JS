const logo = document.querySelector('img');


//Place your functions before the event listeners
const onClick = () => console.log('logo clicked');
const onDoubleClick = () => console.log('double logo clicked');


//Place your event listeners at the bottom of the page
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('click', onClick); 
// logo.addEventListener('click', onClick);