(function() {
    //setting up kittens and circles
    var kitties = document.getElementsByClassName("kitty");
    var circles = document.getElementsByClassName("circle");
    var curKitty = 0;
    var timeout;
    var transit; //for later --> if clicked during transition

    //handle what happens at the end of every transition, like clearing the canvas before a new frame
    for (var i = 0; i < kitties.length; i++) {
        kitties[i].addEventListener("transitionend", function(e) {
            e.target.classList.remove("exit");
            transit = false; //website is not in the transition, so animation and clicking can happen
        });
    }

    //add event to click on circles
    for (var j = 0; j < circles.length; j++) {
        (function(j) {
            circles[j].addEventListener("click", function() {
                if (j == curKitty) {
                    //deal with clicking on the active button
                    return;
                }

                if (transit == true) {
                    //deal with clicking during transition
                    return;
                }
                clearTimeout(timeout);
                moveKitties(j);
                console.log("j");
            });
        })(j);
    }

    function moveKitties(nextKitty) {
        //while transition stuff is happening, transition should be on and clicks should be disabled
        transit = true;

        //remove the onscreen class from the shown element and add the exit class to it
        //this is independent from whether we click on a dot or not. old image should go
        kitties[curKitty].classList.remove("onscreen");
        kitties[curKitty].classList.add("exit");

        circles[curKitty].classList.remove("on");

        curKitty++;

        if (typeof nextKitty != "undefined") {
            curKitty = nextKitty; //next kitty to show is the one we click
            console.log(nextKitty); //for me
        } else {
            //proceed as normal
            if (curKitty >= kitties.length) {
                curKitty = 0;
            }
        }

        //add onscreen class to the next one, whether it is the original curKitty or the assigned nextKitty

        kitties[curKitty].classList.add("onscreen");
        circles[curKitty].classList.add("on");

        // setTimeout to do it again in 5 seconds
        timeout = setTimeout(moveKitties, 4000);
    }

    setTimeout(moveKitties, 4000); //to let us see the first pic too for the first time, lets us the see cat thats already on screen before it starts running at all
})();
