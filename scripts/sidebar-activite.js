document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split("/").pop();

    // Get all sidebar links
    var links = document.querySelectorAll(".sidebar a");

    // Loop through the links and set the active class
    links.forEach(function(link) {
        var linkPage = link.getAttribute("href");

        if (currentPage === linkPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}); 