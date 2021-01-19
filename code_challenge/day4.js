const body = document.querySelector("body");

const colors = {
    purple: "#904FAF",
    yellow: "#EEBC12",
    blue: "#2E8CD5"
}

body.innerHTML = "Hello!";
body.style.color = "#ffffff";
body.style.backgroundColor = colors.purple;
body.style.marginTop = "20px";

function handleResize() {
  if (window.innerWidth > 1000) {
      body.style.backgroundColor = colors.yellow;
  } else if(window.innerWidth < 500) {
      body.style.backgroundColor = colors.blue;
  } else {
      body.style.backgroundColor = colors.purple;
    }
}

window.addEventListener("resize", handleResize);
