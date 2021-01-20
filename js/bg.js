const body = document.querySelector("body");

const IMG_NUMBER = 11;

const imgObj = {
    img1: 'https://www.leparisien.fr/resizer/UODDsIxlwEfuQpQgMaJ4XCQhiQM=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/5B6YJARWVXKMFILKPTAW7XK6QU.jpg',
    img2: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/88b9ad61-1f30-4029-a8e3-4dd6bcb6424e/640_index.webp',
    img3: 'https://pbs.twimg.com/media/ELGg7l4XsAAzCTq?format=jpg&name=large',
    img4: 'https://resize-parismatch.lanmedia.fr/f/webp/r/625,417,forcex,center-middle/img/var/news/storage/images/paris-match/actu/societe/greve-a-la-ratp-14-lignes-de-metro-fermees-dimanche-10-lundi-1663495/27129292-1-fre-FR/Greve-a-la-RATP-14-lignes-de-metro-fermees-dimanche-10-lundi.jpg',
    img5: 'https://www.befrenchie.fr/wp-content/uploads/2020/09/nounours-gobelins.jpg',
    img6: 'https://i.pinimg.com/originals/96/d3/94/96d394ac30d59179bb555e658528636f.jpg',
    img7: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Charles_Marville%2C_Avenue_des_Gobelins%2C_ca._1853%E2%80%9370.jpg/1920px-Charles_Marville%2C_Avenue_des_Gobelins%2C_ca._1853%E2%80%9370.jpg',
    img8: 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/d6018169-a1a7-424f-8fc1-dfe9a51889a5/1136_index.jpg',
    img9: 'https://cdn.vacancesbleues.resalys.com/sites/default/files/SH-Seine-1900px-VB017638hd.jpg',
    img10: 'https://media.routard.com/image/31/3/photo.1537313.w630.jpg',
    img11: 'http://paris1900.lartnouveau.com/paris05/la_sorbonne/place/cp/pce_sorbcp1.jpg'
}


function paintImage(imgNumber) {
    const image = new Image();
    image.src =imgObj[`img${imgNumber}`];
    image.classList = "bgImage";
    body.prepend(image);
}

function genRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);

    return number;
}

function init() { 
    const randomNumber = genRandom();
    paintImage(randomNumber);
};

init();