const toggletBtn = document.getElementById("toggle-theme");

toggletBtn.addEventListener("click", () => { document.body.classList.toggle("dark");

const themeIcon = document.getElementById("theme-icon");
if (document.body.classList.contains("dark")) {
    themeIcon.src = "moon-regular.svg";}
    else { themeIcon.src = "sun-regular.svg"; }
});
