// Listen for clicks on the whole document
document.addEventListener("click", function (event) {
    let searchContainer = document.getElementById("searchbar-box");
    let bodyblurr = document.getElementById("main");

    // Check if the click was OUTSIDE the search container
    if (!searchContainer.contains(event.target)) {
        document.getElementById("searchbar-box").style.display = "none"; // Hide search bar
    }
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 5) {  // When scrolled more than 50px
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});
 

