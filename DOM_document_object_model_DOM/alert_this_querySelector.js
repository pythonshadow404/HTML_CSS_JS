function thisKeyword(element){
    console.log("element clicked", element);
    element.innerText = "That Keyword"
    element.style.color = "red";
    element.style.background = "#222222";
}

var selectedElement = document.querySelector(".selector-query");
function querySelectElement(){
    console.log("Element selected by querySelector", selectedElement);
    selectedElement.innerText = "Powered by querySelector"
    selectedElement.style.background = "red"
    selectedElement.style.color = "#ffffff"
}

var h1 = document.querySelector("h1");
function titleColor(element) {
    h1.style.color = "purple";
}
