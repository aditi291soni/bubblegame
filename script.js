var circle = document.querySelector("#circle");
var timebox = document.querySelector("#time");
var content = document.querySelector("#content");
var clickbox = document.querySelector("#click");
var scorebox = document.querySelector('#score');
var rescore = document.querySelector('#rescore');
var remove = document.querySelector('#remove');
var tryagain = document.querySelector('#tryagain');
var overlay = document.querySelector('#overlay');

var time = 60;
var score = 0;


function bubbles() {
    var temp = ``;
    for (i = 0; i <= 77; i++) {

        temp += `<div id="circle">
       <h3>${Math.floor(Math.random() * 50)}<h3>
    </div>`
    }
    document.querySelector('#content').innerHTML = temp;
    clickbox.textContent = Math.floor(Math.random() * 50);
}

function timer() {

    setInterval(() => {
        if (time < 0) {
            overlay.style.display = "flex";
            display()
        }
        else {
            timebox.textContent = time;
            time--;
        }

    }, 1000);
}

function click() {
    content.addEventListener('click', function (dets) {
        var clickedno = Number(dets.target.textContent);
        var target = Number(clickbox.textContent);
        if (clickedno === target) {
            result();
            bubbles();
            clickbox.textContent = Math.floor(Math.random() * 50);
        }
        else {
            bubbles()
        }

    })
}

function result() {

    score = score + 10;
    scorebox.textContent = score;

}

bubbles();
timer();
click();
function display() {
    rescore.innerHTML = `Your score is ${score}`;
}
tryagain.addEventListener("click", () => {
    overlay.style.display = "none";
    time = 60;

})