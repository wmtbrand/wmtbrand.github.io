const opacityMax = 1000;
const opacityMin = 500;
let currentOpacity = opacityMax;
let opacityChange = -1;
let background = document.getElementById('bgImage');


function setIframe(page) {
    document.getElementById('mainIframe').src = page;
}

function backgroundPulse() {
    
    setInterval(function() {
        currentOpacity += opacityChange;
        if(currentOpacity >= opacityMax || currentOpacity <= opacityMin) {
            opacityChange = opacityChange * -1;
        }
        background.style.opacity = currentOpacity / 1000;
    }, 100);
}

function showFullImage() {
    document.getElementById("fullPicture").style.visibility = "visible";
    document.getElementById("fullPictureBackground").style.visibility = "visible";
}

function hideFullImage() {
    document.getElementById("fullPicture").style.visibility = "hidden";
    document.getElementById("fullPictureBackground").style.visibility = "hidden";
}

function validateEmail(field) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(field.value)) {
        field.setCustomValidity("");
    }
    else {
        field.setCustomValidity("Invalid email.");
    }
}