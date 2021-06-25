var p = [];
var s = [];
p.push(prompt("Enter your name"));
// constants
const s1 = new Audio("sounds/red.mp3");
const s2 = new Audio("sounds/green.mp3");
const s3 = new Audio("sounds/yellow.mp3");
const s4 = new Audio("sounds/blue.mp3");
const s5 = new Audio("sounds/wrong.mp3");

// functions
function displayrunner(n) {
    switch (n) {
        case 1:
            s1.play();
            $(".red").addClass("hide");
            setTimeout(() => {
                $(".red").removeClass("hide");
            }, 200);
            break;
        case 2:
            s2.play();
            $(".green").addClass("hide");
            setTimeout(() => {
                $(".green").removeClass("hide");
            }, 200);
            break;
        case 3:
            s3.play();
            $(".yellow").addClass("hide");
            setTimeout(() => {
                $(".yellow").removeClass("hide");
            }, 200);
            break;
        case 4:
            s4.play();
            $(".blue").addClass("hide");
            setTimeout(() => {
                $(".blue").removeClass("hide");
            }, 200);
            break;


    }
}

// press function

function press(n) {
    switch (n) {
        case 1:
            s1.play();
            $(".red").addClass("pressed");

            setTimeout(() => {
                $(".red").removeClass("pressed")
            }, 200);

            break;
        case 2:
            s2.play();
            $(".green").addClass("pressed");
            setTimeout(() => {
                $(".green").removeClass("pressed");
            }, 200);
            break;
        case 3:
            s3.play();
            $(".yellow").addClass("pressed");
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
            }, 200);
            break;
        case 4:
            s4.play();
            $(".blue").addClass("pressed");
            setTimeout(() => {
                $(".blue").removeClass("pressed");
            }, 200);
            break;


    }
}

//   runner function
function runner() {
    i = 0;
    str = [];
    var r = Math.floor(Math.random() * 4 + 1);
    setTimeout(() => {
        displayrunner(r);
    }, 1000);

    return r
}



//   PROGRAM


$(document).keydown((evt) => {
    if (($("h1").html() === "Press A Key to Start") && ((evt.key == "a") || (evt.key == "A"))) {
        $("h1").html("level 1")
        start();
    }
    if (($("h1").html() === "Game Over!.... Press any key to continue")) {
        $("h1").html("level 1");
        start();
    }
    
})
var i = 0;

function start() {

    var seq = [];
    var str = [];
    seq.push(runner());

    $(".btn").click(function () {
        console.log("i is " + i);
        str[i] = parseInt(this.innerHTML);
        console.log("you clicked" + str[i]);
        press(str[i]);

        if (str[i] == seq[i]) {
            i++;
            console.log('i++');
        } else {
            $("h1").html("Game Over!.... Press any key to continue");
            s5.play();
            i--;

        }
        if (i == seq.length) {
            var tem = runner();
            seq.push(tem);
            $("h1").html("Level " + seq.length);

        }
        

    })


}
