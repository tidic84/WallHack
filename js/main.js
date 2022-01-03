const rollBouton = document.querySelector("#tidic");
const audio = document.querySelector("audio");

rollBouton.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.6;
        audio.play();

    } else {
        audio.pause();
    }
});

const popup = document.querySelector(".popup");
const btn = document.getElementById("youko");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    popup.style.display = "block";
    animFunc(popup, false);
}
span.onclick = function() {
    animFunc(popup, true);
}
window.onclick = function(event) {
    if (event.target == popup) {
        animFunc(popup, true);
    }
}
function animFunc(element, inversed = false) {
   if (!inversed) {
       element.classList.add("in")
       element.classList.remove("out")
   }
   if (inversed) {
        element.classList.add("out")
        element.classList.remove("in")
    }
}