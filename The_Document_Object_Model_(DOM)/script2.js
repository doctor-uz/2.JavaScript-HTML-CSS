function klass(n) {
    var item = document.getElementsByClassName(n);
    var arr = [];
    for (var i = 0; i < item.length; i++) {
        arr.push(item[i]);
    }

    return arr;
}

klass("two");
