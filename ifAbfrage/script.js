let images = [
    "../image/iceland.jpg",
    "../image/volcano1.jpg",
    "../image/mount-fuji.jpg",
    "../image/volcano2.jpg",
];

let currentImage = 0;

function showImage(i) {
    document.getElementById("image").src = images[i];
}

function start() {
    showImage(currentImage);
    currentImage++;

    if(currentImage == 4){
        currentImage = 0;
    };

    setTimeout(start, 3000);
}
