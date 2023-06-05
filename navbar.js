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

