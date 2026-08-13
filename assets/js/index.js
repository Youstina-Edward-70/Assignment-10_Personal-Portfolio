let themeBtn = document.getElementById("theme-toggle-button");
let htmlElement = document.documentElement;
let openSettingBtn = document.getElementById("settings-toggle");
let closeSettingBtn = document.getElementById("close-settings");
let settingsSidebar = document.getElementById("settings-sidebar");
let fontOptionBtns = document.querySelectorAll(".font-option");
let body = document.body;


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
function fontToggle(target) {
    target = target.closest(".font-option");
    if(target !== null) {
        let selectedFont = target.dataset.font;
        body.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
        body.classList.add(`font-${selectedFont}`);

        for(let i = 0; i < fontOptionBtns.length; i++) {
            if(fontOptionBtns[i] === target) {
                fontOptionBtns[i].classList.remove("border-slate-200", "dark:border-slate-700");
                fontOptionBtns[i].classList.add("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
            } else {
                fontOptionBtns[i].classList.remove("active", "border-primary", "bg-slate-50", "dark:bg-slate-800");
                fontOptionBtns[i].classList.add("border-slate-200", "dark:border-slate-700");
            }
        }
    }
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
for(let i = 0; i < fontOptionBtns.length; i++) {
    fontOptionBtns[i].addEventListener("click", function(e) {
        fontToggle(e.target);
    })
}