document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector(".menu-icon");
    var menu = document.querySelector(".menucl");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle('active');
        toggleMenuIcon();
    });

    function toggleMenuIcon() {
        if (menu.classList.contains('active')) {
            menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.354 4.354a.5.5 0 0 1 .708 0L8 7.293l3.938-3.939a.5.5 0 0 1 .708.708L8.707 8l3.939 3.938a.5.5 0 0 1-.708.708L8 8.707l-3.938 3.939a.5.5 0 0 1-.708-.708L7.293 8 3.354 4.062a.5.5 0 0 1 0-.708z" style="color:white"/></svg>';
        } else {
            menuIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" style="color:white"/></svg>';
        }
    }
});
