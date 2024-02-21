let images = [
    "../image/iceland.jpg",
    "../image/volcano1.jpg",
    "../image/mount-fuji.jpg",
    "../image/volcano2.jpg",
];

let currentImage = 0;

function inserDoors() {
    for (let i = 0; i < 24; i++) {
        document.getElementById("body").innerHTML += `<div class="door"></div>`;
    }
}
