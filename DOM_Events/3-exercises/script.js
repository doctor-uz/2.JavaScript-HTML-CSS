var kv = document.querySelector("#box");

function rgbColors() {
    var rgbArr = [];

    for (var i = 0; i < 3; i++) {
        var randomNum = Math.floor(Math.random() * 256);
        rgbArr.push(randomNum);
    }

    return rgbArr;
}

kv.addEventListener("mousedown", function() {
    var rgb = rgbColors();
    kv.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});

kv.addEventListener("mouseup", function() {
    var rgb = rgbColors();
    kv.style.backgroundColor =
        "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
});
