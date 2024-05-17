
// Drop down
const dropdownTogglers = document.querySelectorAll('.dropdown-toggle');

dropdownTogglers.forEach((dropdownToggle) => {
    // Target the dropdown menu below the clicked button
    const dropdownMenu = dropdownToggle.nextElementSibling;

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle("show");
        // The screen reader will recognize when the menu is opened.
        dropdownToggle.setAttribute("aria-expanded", "true");

        if(!dropdownMenu.classList.contains("show")) {
            // The screen reader will recognize when the menu is closed.
            dropdownToggle.setAttribute("aria-expanded", "false");
        }
    });

    // Hide dropdown menu when click outside
    document.addEventListener("click", (event) => {
        if(event.target !== dropdownToggle) {
            dropdownMenu.classList.remove("show");
            dropdownToggle.setAttribute("aria-expanded", "false");
        }
    })
});

// Sidebar Nav Toggle 
const sidebar = document.getElementById("sidebar-nav");
const sidebarToggler = document.getElementById("sidebar-toggler");
const listIcon = sidebarToggler.querySelector(".list");
const closeIcon = sidebarToggler.querySelector(".close");

sidebarToggler.addEventListener("click", (e) => {
    sidebar.classList.toggle("show");

    // Show or hide icons
    if(sidebar.classList.contains("show")) {
        listIcon.style.display = "none";
        closeIcon.style.display = "block"
    } else {
        listIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});

// Hide sidebar menu when click outside
document.addEventListener("click", (event) => {
    if(!sidebar.contains(event.target) && event.target !== sidebarToggler) {
        sidebar.classList.remove("show");
        listIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
})



