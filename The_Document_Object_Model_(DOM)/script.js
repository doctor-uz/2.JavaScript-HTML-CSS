function style(div) {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.fontStyle = "italic";
        divs[i].style.textDecoration = "underline";
        divs[i].style.fontWeight = "bold";
    }
}
style("blabla");

function style2(p) {
    var pi = document.querySelectorAll("p");
    for (var i = 0; i < pi.length; i++) {
        pi[i].style.fontStyle = "italic";
        pi[i].style.textDecoration = "underline";
        pi[i].style.fontWeight = "bold";
    }
}

style2("pi");
