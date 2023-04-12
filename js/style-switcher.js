/**Toogle Style Switcher to Open color section */

const styleSwitcherToggle = document.querySelector(".s-icon");

//adding event listener on click to open and close the style-switcher
styleSwitcherToggle.addEventListener("click", function(event) {

    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide color pallete on scroll when color pallete is open
window.addEventListener("scroll", () => {
    
    if(document.querySelector(".style-switcher").classList.contains("open")) {

        document.querySelector(".style-switcher").classList.remove("open");
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

/**=== THEME SECTION OF BLACK AND WHITE (SUN AND MOON) === */

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {

    document.querySelector(".day-night").setAttribute("disabled");    
    
    // document.body.classList.toogle("dark");
})

// window.addEventListener("load", () => {
    
//     if(document.body.classList.toggle.contains("dark")) {

//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else {
//         dayNight.querySelector("i").classList.add("fa-moon"); 
//     }
// })