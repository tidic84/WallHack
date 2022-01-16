const popupS = document.querySelector("#sources-popup");
const popupBgS = document.querySelector("#sources-popupBg");
const btnS = document.querySelector("#sources");
const closeS = document.querySelector("#sources-close");

btnS.onclick = function() {
    animFunc(popupS, false);
    animFunc(popupBgS, false);
}
closeS.onclick = function() {
    animFunc(popupS, true);
    animFunc(popupBgS, true);
}
popupBgS.onclick = function() {
    animFunc(popupS, true);
    animFunc(popupBgS, true);
}

const popup = document.querySelector("#youko-popup");
const popupBg = document.querySelector("#youko-popupBg");
const btn = document.querySelector("#youko");
const close = document.querySelector("#youko-close");

btn.onclick = function() {
    animFunc(popup, false);
    animFunc(popupBg, false);
}
close.onclick = function() {
    animFunc(popup, true);
    animFunc(popupBg, true);
}
popupBg.onclick = function() {
    animFunc(popup, true);
    animFunc(popupBg, true);
}

const popupT = document.querySelector("#tidic-popup");
const popupBgT = document.querySelector("#tidic-popupBg");
const btnT = document.querySelector("#tidic");
const closeT = document.querySelector("#tidic-close");
const audio = document.querySelector("audio");
audio.volume = 0.5;

btnT.onclick = function() {
    audio.play();
    animFunc(popupT, false);
    animFunc(popupBgT, false);
}
closeT.onclick = function() {
    audio.pause();
    animFunc(popupT, true);
    animFunc(popupBgT, true);
}
popupBgT.onclick = function() {
    audio.pause();
    animFunc(popupT, true);
    animFunc(popupBgT, true);
}

let textCache = "";
document.onkeydown = function(e) {
    textCache += e.key;
    if(textCache.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) {
        const popupC = document.querySelector("#cmd-popup");
        const popupBgC = document.querySelector("#cmd-popupBg");
        const closeC = document.querySelector("#cmd-close");
        const submitButton = document.querySelector(".cmd-submit");
        const cmdInput = document.querySelector("#cmd-input");

        animFunc(popupC, false);
        animFunc(popupBgC, false);

        closeC.onclick = function() {
            animFunc(popupC, true);
            animFunc(popupBgC, true);
        }
        popupBgC.onclick = function() {
            animFunc(popupC, true);
            animFunc(popupBgC, true);
        }

        document.onkeydown = function(event) {
            if (event.key == "Enter") { 
              event.preventDefault();
              submitButton.click();
            }
          }
        
        submitButton.onclick = function() {
            let submitValue = cmdInput.value;
            cmdInput.value = "";
            textCache = "";
            
            if(submitValue == "lol" || submitValue == "mdr" || submitValue == "xd" || submitValue == "pdtr") {
                document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }

            if(submitValue == "bonneteau") {
                document.location.href = "documentation/bonneteau.html";
            }

            if(submitValue == "esveilloit") {

                const iframe = document.createElement("iframe");
                iframe.src = "resources/video/approuved.mp4";
                document.querySelector(".result").appendChild(iframe);

            }
            if (submitValue == "clear") {
                let child = document.querySelector(".result").children;
                for (i = 0; i < child.length; i++) {
                    document.querySelector(".result").removeChild(child[i]);
                }
            }
        }
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
//


