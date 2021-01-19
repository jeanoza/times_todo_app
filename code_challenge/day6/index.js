const select = document.querySelector("select"),
    flag = document.querySelector(".flag__img");

const COUNTRY_LS = "Country";
function handleChange() {
    const selected = select.value;
    localStorage.setItem(COUNTRY_LS, selected);
    paintFlag(selected);
}
function paintFlag(text) {
    if (text === "KR") {
        flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png';
    } else if (text === "TR") {
        flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png';
    } else if (text === "CN") {
        flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/250px-Flag_of_the_People%27s_Republic_of_China.svg.png'
    } else if (text === "FR") {
        flag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/langfr-450px-Flag_of_France.svg.png";
    }
}


function loadCountry() {
    const selected = localStorage.getItem(COUNTRY_LS);
    if (selected) {
        const option = document.querySelector(`option[value="${selected}"]`);
        option.selected = true;
        paintFlag(selected);
    }

}

function init() {
    loadCountry();
    select.addEventListener("change", handleChange);
}
init();