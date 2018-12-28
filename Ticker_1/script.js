(function() {
    var elem = document.getElementById("headlines");
    var links = elem.getElementsByTagName("a");
    var animId;
    var left = elem.offsetLeft;

    function moveHeadlines() {
        left = left - 1;

        if (left <= -links[0].offsetWidth) {
            left = left + links[0].offsetWidth;
            elem.appendChild(links[0]);
        }
        elem.style.left = left + "px";

        animId = requestAnimationFrame(moveHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function() {
            cancelAnimationFrame(animId);
        });
        links[i].addEventListener("mouseout", function() {
            moveHeadlines();
        });
    }

    moveHeadlines();
})();
