const title = document.querySelector("#title");

function handleClick() {
    title.innerHTML = 'You was a right click!'
    title.style.color = 'tomato';
}

function handleResize() {
    title.innerHTML = 'You just resized!';
    title.style.color = 'mediumpurple';
}

function handleMouseEnter() {
    title.innerHTML = "The mouse is here!"
    title.style.color = 'mediumaquamarine';
}
function handleMouseLeave() {
    title.innerHTML = "The mouse is gone!"
    title.style.color = 'steelblue';
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);