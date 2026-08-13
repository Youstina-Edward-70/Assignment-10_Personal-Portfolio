let themeBtn = document.getElementById("theme-toggle-button");
let htmlElement = document.documentElement;


// .


function themeToggle() {
    htmlElement.classList.toggle("dark");
}


themeBtn.addEventListener("click", function () {
    themeToggle()
});
