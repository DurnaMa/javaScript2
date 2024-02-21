let currentImage = 0;

function inserDoors() {
    for (let i = 1; i < 25; i++) {
        document.getElementById(
            "body"
        ).innerHTML += `<div class="door">${i}</div>`;
    }
}
