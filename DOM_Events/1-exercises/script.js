var squareMove = document.querySelector("#square");

document.addEventListener("mousemove", function() {
    squareMove.style.left = event.clientX + -50 + "px";
    squareMove.style.top = event.clientY + -50 + "px";
});
