let themeBtn = document.getElementById("theme-toggle-button");
let htmlElement = document.documentElement;
let openSettingBtn = document.getElementById("settings-toggle");
let closeSettingBtn = document.getElementById("close-settings");
let settingsSidebar = document.getElementById("settings-sidebar");


// .


function themeToggle() {
    htmlElement.classList.toggle("dark");
}
function showSettingsSidebar() {
    settingsSidebar.classList.remove("translate-x-full");
    openSettingBtn.style.right = '20rem';
}
function hideSettingsSidebar() {
    settingsSidebar.classList.add("translate-x-full");
    openSettingBtn.style.right = '0rem';
}


themeBtn.addEventListener("click", function () {
    themeToggle();
});
openSettingBtn.addEventListener("click", function() {
    showSettingsSidebar();
});
closeSettingBtn.addEventListener("click", function() {
    hideSettingsSidebar();
});
document.addEventListener("click", function(e) {
    if(!settingsSidebar.contains(e.target) 
        && !openSettingBtn.contains(e.target) 
        && !settingsSidebar.classList.contains("translate-x-full")) {
            hideSettingsSidebar();
    }
});