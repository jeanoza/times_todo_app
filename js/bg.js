const body = document.querySelector("body");

const IMG_NUMBER = 5;

const img1 = 'https://www.leparisien.fr/resizer/UODDsIxlwEfuQpQgMaJ4XCQhiQM=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5B6YJARWVXKMFILKPTAW7XK6QU.jpg';
const img2 = 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/88b9ad61-1f30-4029-a8e3-4dd6bcb6424e/640_index.webp';
const img3 = 'https://pbs.twimg.com/media/ELGg7l4XsAAzCTq?format=jpg&name=large';
const img4 = 'https://resize-parismatch.lanmedia.fr/f/webp/r/625,417,forcex,center-middle/img/var/news/storage/images/paris-match/actu/societe/greve-a-la-ratp-14-lignes-de-metro-fermees-dimanche-10-lundi-1663495/27129292-1-fre-FR/Greve-a-la-RATP-14-lignes-de-metro-fermees-dimanche-10-lundi.jpg';
const img5 = 'https://www.befrenchie.fr/wp-content/uploads/2020/09/nounours-gobelins.jpg'; 
const images = [img1, img2, img3, img4, img5];


function paintImage(imgNumber) {
    const image = new Image();
    image.src = images[imgNumber];
    console.log(imgNumber);
    image.classList = "bgImage";
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random()* IMG_NUMBER);

    return number;
}

function init() { 
    const randomNumber = genRandom();
    paintImage(randomNumber);
};

init();


/*
  https://www.leparisien.fr/resizer/UODDsIxlwEfuQpQgMaJ4XCQhiQM=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5B6YJARWVXKMFILKPTAW7XK6QU.jpg

  https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/88b9ad61-1f30-4029-a8e3-4dd6bcb6424e/640_index.webp

  https://pbs.twimg.com/media/ELGg7l4XsAAzCTq?format=jpg&name=large

  https://resize-parismatch.lanmedia.fr/f/webp/r/625,417,forcex,center-middle/img/var/news/storage/images/paris-match/actu/societe/greve-a-la-ratp-14-lignes-de-metro-fermees-dimanche-10-lundi-1663495/27129292-1-fre-FR/Greve-a-la-RATP-14-lignes-de-metro-fermees-dimanche-10-lundi.jpg

  https://www.befrenchie.fr/wp-content/uploads/2020/09/nounours-gobelins.jpg

*/