const bouton = document.querySelector("#tidic");
const audio = document.querySelector("audio");
const test = document.querySelector(".test");
console.log(test)

console.log(bouton)
console.log(audio)
bouton.addEventListener("click", () => {
if (audio.paused) {
audio.volume = 0.2;
audio.play();

} else {
audio.pause();
}
});