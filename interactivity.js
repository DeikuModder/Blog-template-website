//Responsive side navbar

const navBar = document.getElementById("navicons");
const navBtn = document.getElementById("mobile-nav-toggle");

navBtn.addEventListener("click", () => {
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === "false"){
        navBar.setAttribute("data-visible", true);
        navBtn.setAttribute("aria-expanded", true);
    }
    else {
        navBar.setAttribute("data-visible", false);
        navBtn.setAttribute("aria-expanded", false);
    }
})

//Dark mode switch

const darkModeBtn = document.querySelector(".buttonBckground");

darkModeBtn.addEventListener("click", () => {
    const visi = darkModeBtn.getAttribute("data-visible");

    if (visi === "false"){
        darkModeBtn.setAttribute("data-visible", true);
    }
    else {
        darkModeBtn.setAttribute("data-visible", false);
    }
}) 
