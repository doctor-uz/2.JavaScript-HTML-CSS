function createElement(elem) {
    var elem = document.createElement("div"); //create an element
    var text = document.createTextNode("AWESOME"); //create its content

    elem.appendChild(text); //insert content into element
    document.body.appendChild(elem); //append new element to the body
    elem.style.position = "fixed";
    elem.style.zIndex = "2147483647";
    elem.style.left = "20px";
    elem.style.top = "100px";
    elem.style.fontSize = "200px";
}

createElement("div");
