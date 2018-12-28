var container = document.getElementById("container");
var child = document.querySelector(".innerBox");

child.addEventListener("click", function(e) {
    e.stopPropagation();
    var rgb = rgbColors();
    child.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

container.addEventListener("click", function() {
    var rgb = rgbColors();
    container.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

function rgbColors() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }
    return rgbArr;
}
