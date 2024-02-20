function image1() {
    document.getElementById("image").src = "../image/iceland.jpg";

    setTimeout(image2, 3000);
}

function image2() {
    document.getElementById("image").src =
        "../image/volcano1.jpg";

    setTimeout(image3, 3000);
}

function image3() {
    document.getElementById("image").src =
        "../image/mount-fuji.jpg";

    setTimeout(image4, 3000);
}

function image4() {
    document.getElementById("image").src =
        "../image/volcano2.jpg";

    setTimeout(image1, 3000);
}
