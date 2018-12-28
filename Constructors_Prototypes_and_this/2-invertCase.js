function inverCase(n) {
    var arr = "";
    for (var i = 0; i < n.length; i++) {
        var letter = n[i];
        if (letter == letter.toUpperCase()) {
            arr += letter.toLowerCase();
        } else {
            arr += letter.toUpperCase();
        }
    }
    return arr;
}
console.log(inverCase("HnhG"));
