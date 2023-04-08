/**Toogle Style Switcher to Open color section */

const styleSwitcherToggle = document.getElementById("s-s-t");

//adding event listener on click to open and close the style-switcher
styleSwitcherToggle.addEventListener("click", function(event) {

    document.getElementById("s-s").classList.toggle("open");
})

// hide color pallete on scroll when color pallete is open
window.addEventListener("scroll", () => {
    
    if(document.getElementById("s-s").classList.contains("open")) {

        document.getElementById("s-s").classList.remove("open");
    }
})

/** ==== THEME SELECTION === */

const altStyles = document.getElementsByClassName(".alternate-style");

altStyles.addEventListener("click", function setActiveStyle(event) {

    altStyles.forEach((styles) => {

        if(event == styles.getAttributes("title")) {

            styles.removeAttributes("disabled");
        }
        else {
            styles.setAttributes("disabled", "true");
        }
    })
    
})