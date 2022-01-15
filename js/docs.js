const popupModal = document.querySelector("#popup");
const popupBg = document.querySelector("#popupBg");
const btn = document.querySelector("#sources");
const close = document.querySelector("#close");

btn.onclick = function() {
    animFunc(popupModal, false);
    animFunc(popupBg, false);
}
close.onclick = function() {
    animFunc(popupModal, true);
    animFunc(popupBg, true);
}
popupBg.onclick = function() {
    animFunc(popupModal, true);
    animFunc(popupBg, true);
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

const summaryItem = document.querySelectorAll(".summary-item");
for (let i = 0; i < summaryItem.length; i++) {
    summaryItem[i].onclick = function() {
        document.location.href = summaryItem[i].getAttribute("href");
    }
}