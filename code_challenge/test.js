const body = document.querySelector("body");

const PURPLE = "purple";
const BLUE = "blue";
const YELLOW = "yellow";

function handleResize(){
    const width = window.innerWidth;
    if (width > 1000) {
        body.classList.add(YELLOW);
        body.classList.remove(PURPLE, BLUE);
        console.log('yellow');
    } else if (width < 500) {
        body.classList.add(BLUE);
        body.classList.remove(YELLOW, PURPLE);
    } else {
        body.classList.add(PURPLE);
        body.classList.remove(YELLOW, BLUE);
    }
}

function init() {

    body.classList.add(PURPLE);
    window.addEventListener("resize", handleResize);
}

init();
