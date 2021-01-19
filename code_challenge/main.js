const calculator = {
    add: (a, b) => (a+b),
    minus: (a, b) => {
        return a - b;
    },
    div: function (a, b) {
        return a / b;
    },
    rest: function (a, b) {
        return a % b;
    },
    multiple: function (a, b) {
        return a*b
    },
    pow: function (a, b) {
        return a ** b;
    }
}

console.log(`add : ${calculator.add(2,3)}`);
console.log(`minus : ${calculator.minus(2, 3)}`);
console.log(`div : ${calculator.div(2, 3)}`);
console.log(`rest : ${calculator.rest(2, 3)}`);
console.log(`multiple : ${calculator.multiple(2, 3)}`);
console.log(`pow : ${calculator.pow(2, 3)}`);


//select HTML
const title = document.querySelector("#title");

// title.innerHTML = "Hi from JS";
// title.style.color = 'red';
// document.title = 'I own you now';

function handleResize(event) {
    console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = '#ff00ff';
    title.innerHTML = 'You have clicked';

}

title.addEventListener("click", handleClick);