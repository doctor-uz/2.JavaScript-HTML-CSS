//1. Define working objects:
//men - hamburger buttom, box - actual menu, x - close buttom
//2. Add click function to men(hamburger logo):
//  a) stopPropogation: function needs only for hamburger logo
//  b) add for "box - actual menu" on class, which is "left (css) - 78%";
//  c) add remove class, which is left 100%
//3. Prevent closing event while clicking on "box" - actual menu
//4. Clicking out of "box - actual menu" need to be hided
//5. Inside "box" give event to "x" in order to close box - left100%.

var men = document.querySelector(".menu");
var box = document.querySelector(".hamburger-menu");
var x = document.querySelector(".x");

men.addEventListener("click", function(e) {
    e.stopPropagation();
    box.classList.remove("remove");
    box.classList.add("on"); //change left
});

box.addEventListener("click", function(e) {
    e.stopPropagation();
});

document.addEventListener("click", function() {
    box.classList.remove("on");
    box.classList.add("remove"); //hide
});

x.addEventListener("click", function() {
    box.classList.remove("on");
    box.classList.add("remove"); //hide
});
