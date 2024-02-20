let images = [
    "../image/iceland.jpg",
    "../image//volcano1.jpg",
    "../image//mount-fuji.jpg",
    "../image//volcano2.jpg",
];
let i = 0;

function image1() {
    document.getElementById("image").src = "../image/iceland.jpg";
    i++;
    setTimeout(image2, 3000);
}

function image2() {
    document.getElementById("image").src = "../image//volcano1.jpg";
    i++;
    setTimeout(image3, 3000);
}

function image3() {
    document.getElementById("image").src = "../image//mount-fuji.jpg";
    i++;
    setTimeout(image4, 3000);
}

function image4() {
    document.getElementById("image").src = "../image/image/volcano2.jpg";
    i = 0
    setTimeout(image1, 3000);
}
