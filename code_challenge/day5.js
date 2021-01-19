
const h3 = document.querySelector("h3");;
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const DAY_MILLISECONDS = 86400000;
const HOUR_MILLISECONDS = 3600000;
const MINUTES_MILLISECONDS = 60000;



function getTime() {
  // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const currentDay = new Date();
    const gap = xmasDay - currentDay;


    const dDay = Math.floor(gap / DAY_MILLISECONDS);
    const dHours = Math.floor((gap % DAY_MILLISECONDS) / HOUR_MILLISECONDS);
    const dMinutes = Math.floor((gap % HOUR_MILLISECONDS) / MINUTES_MILLISECONDS);
    const dSeconds = Math.floor((gap % MINUTES_MILLISECONDS) / 1000); 
    
    h3.innerHTML = `${dDay < 10 ?
            `0${dDayd}d` : `${dDay}d`} ${dHours < 10 ?
            `0${dHours}h` : `${dHours}h`} ${dMinutes < 10 ?
            `0${dMinutes}m` : `${dMinutes}m`} ${dSeconds < 10 ?
            `0${dSeconds}s` : `${dSeconds}s`}
            `;
    

    
  
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
