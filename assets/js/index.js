let themeBtn = document.getElementById("theme-toggle-button");
let htmlElement = document.documentElement;
let openSettingBtn = document.getElementById("settings-toggle");
let closeSettingBtn = document.getElementById("close-settings");
let settingsSidebar = document.getElementById("settings-sidebar");
let fontOptionBtns = document.querySelectorAll(".font-option");
let body = document.body;
let themeColorsContainer = document.getElementById("theme-colors-grid");
let themeColorBtns = document.querySelectorAll("#theme-colors-grid button");
let resetBtn = document.getElementById("reset-settings");


// .


function savedSettings () {
    (localStorage.getItem("theme") || "dark") === "dark"
    ? (htmlElement.classList.add("dark"), localStorage.setItem("theme", "dark")) 
    : (htmlElement.classList.remove("dark"), localStorage.setItem("theme", "light"));

    let myFont = localStorage.getItem("font");
    myFont
    ? document.querySelector(`button[data-font='${myFont}']`).click()
    : (document.querySelector("button[data-font='tajawal']").click(), localStorage.setItem("font", "tajawal"));

    let myThemeColor = localStorage.getItem("themeColor");
    if(myThemeColor) {
        let att = JSON.parse(myThemeColor);
        document.querySelector(`button[data-primary='${att.primary}']`).click();
    } else {
        document.querySelector("button[data-primary='#6366f1']").click();
        localStorage.setItem("themeColor", JSON.stringify({
            primary: "#6366f1",
            secondary: "#8b5cf6",
            accent: "#a855f7" 
        }));
    }
}
function themeToggle() {
    let theme = htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", theme? "dark" : "light");
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
        localStorage.setItem("font", selectedFont);
    }
}
function colorToggle(target) {
    target = target.closest("button");
    if(target !== null) {
        let primary = target.dataset.primary;
        let secondary = target.dataset.secondary;
        let accent = target.dataset.accent;
        htmlElement.style.setProperty("--color-primary", primary);
        htmlElement.style.setProperty("--color-secondary", secondary);
        htmlElement.style.setProperty("--color-accent", accent);
        for(let i = 0; i < themeColorBtns.length; i++) {
            themeColorBtns[i].classList.remove("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");
        }
        target.classList.add("ring-2", "ring-primary", "ring-offset-2", "ring-offset-white", "dark:ring-offset-slate-900");

        localStorage.setItem("themeColor", JSON.stringify({
            primary: primary,
            secondary: secondary,
            accent: accent 
        }));
    }
}
function resetTheme() {
    hideSettingsSidebar();
    document.querySelector("button[data-font='tajawal']").click();
    document.querySelector("button[title='Purple Blue']").click();
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
themeColorsContainer.addEventListener("click", function(e) {
    colorToggle(e.target);
});
resetBtn.addEventListener("click", function() {
    resetTheme();
});

savedSettings();