console.log("page loaded...")

function message(){
    alert("Ninja was liked!")
}

function login(element){ // we want to know what the element is so we can
    // change the text of the element. So we will pass the argument
    // *this* to the function on the HTML page and pass it to JavaScript.
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element){
    element.remove();
}