const bouton = document.querySelector("#tidic");
const audio = document.querySelector("audio");

bouton.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 1;
        audio.play();

    } else {
        audio.pause();
    }
});