function navbarOpen() {
    document.getElementById("menu-items").style.left = 0;
    document.getElementById("hamburger").style.display = "none"
    document.getElementById("cancel").style.display = "block";
}

function navbarClose() {
    if (window.innerWidth > 769) {
        return
    } else {
        document.getElementById("menu-items").style.left = "-100%";
        document.getElementById("cancel").style.display = "none";
        document.getElementById("hamburger").style.display = "block";

    }
}

window.addEventListener('resize', function() {
    navbarClose()
    if (window.innerWidth > 769) {
        document.getElementById("hamburger").style.display = "none"
        document.getElementById("cancel").style.display = "none";
    }
});