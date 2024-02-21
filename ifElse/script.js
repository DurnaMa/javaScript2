let images = [
    "../image/iceland.jpg",
    "../image/volcano1.jpg",
    "../image/mount-fuji.jpg",
    "../image/volcano2.jpg",
];

let currentImage = 0;

function start() {
    let millisecons = +document.getElementById("inputfield").value * 1000;

    if (millisecons > 10000) {
        alert("Bitte eine kleiner zahl eingeben");
    } else {
        if (millisecons < 1000) {
            alert("Bitte mindestens eine Sekunde als zeit angeben!");
        } else {
            showImage(currentImage);
            currentImage++;

            if (currentImage == 4) {
                currentImage = 0;
            }
        }
    }

    setTimeout(start, millisecons);
}

function showImage(i) {
    document.getElementById("image").src = images[i];
}
