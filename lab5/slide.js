let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");

let img = document.images[0];
let count = 1;

function nextSlide() {
    count++;
    if (count > 4) count = 1;
    img.src = `img/cat${count}.jpg`;
}
function prevSlide() {
    count--;
    if (count < 1) count = 4;
    img.src = `img/cat${count}.jpg`;
}

nextbtn.onclick = nextSlide;
prevbtn.onclick = prevSlide;

// https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval
let interval = setInterval(nextSlide, 5000);

stopbtn.onclick = () => {
    clearInterval(interval);
    interval = null;
}

startbtn.onclick = () => {
    if(interval == null){
        interval = setInterval(nextSlide, 5000);
    }
}



