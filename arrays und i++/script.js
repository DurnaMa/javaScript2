let images = [
    "../image/iceland.jpg",
    "../image/volcano1.jpg",
    "../image/mount-fuji.jpg",
    "../image/volcano2.jpg",
];
let i = 0;

function image1() {
    document.getElementById("image").src = images[i]; // I hat den wrt 0
    i++;
    setTimeout(image2, 3000);
}

function image2() {
    document.getElementById("image").src = images[i]; // I hat den wrt 1
    i++;
    setTimeout(image3, 3000);
}

function image3() {
    document.getElementById("image").src = images[i]; // I hat den wrt 2
    i++;
    setTimeout(image4, 3000);
}

function image4() {
    document.getElementById("image").src = images[i]; // I hat den wrt 4
    i = 0;
    setTimeout(image1, 3000);
}
