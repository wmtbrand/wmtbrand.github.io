// These variables control the opacity settings for backgroundPulse()
// I've moved them out of the function for testing.
const opacityMax = 1000;
const opacityMin = 500;
let currentOpacity = opacityMax;
let opacityChange = -1;
let background = document.getElementById('bgImage');


// This loads the requested page in the iFrame for index.html
function setIframe(page) {
    document.getElementById('mainIframe').src = page;
}

// This function is called when index.html opens
// It continiously adjust the opacity of the element in front of the
// background image to make Earth slowly darken and lighten
function backgroundPulse() {    
    setInterval(function() {
        currentOpacity += opacityChange;
        if(currentOpacity >= opacityMax || currentOpacity <= opacityMin) {
            opacityChange = opacityChange * -1;
        }
        background.style.opacity = currentOpacity / 1000;
    }, 100);
}

// This is called when the mini profile picture is clicked on
// in the about page. It shows the full image in the center of the screen
// and enables semi-transparent black element covering the screen to darken
// the background while the full picture is visible.
function showFullImage() {
    window.parent.document.getElementById("fullPicture").src = "images/profile.jpg";
    window.parent.document.getElementById("fullPicture").style.visibility = "visible";
    window.parent.document.getElementById("fullPictureBackground").style.visibility = "visible";
}

// This is called when the full picture from showFullImage() is clicked on
// It hides the full picture and background picture so the about page
// is clearly visible again.
function hideFullImage() {
    document.getElementById("fullPicture").style.visibility = "hidden";
    document.getElementById("fullPictureBackground").style.visibility = "hidden";
    window.parent.document.getElementById("fullPicture").src = "";
}

// This function is called when the email input focus is lost so 
// the email can be validated against a regex.IF it fails the regex
// validation, the input's set to an invalid state.
function validateEmail(field) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(regex.test(field.value)) {
        field.setCustomValidity("");
    }
    else {
        field.setCustomValidity("Invalid email.");
    }
}
