const switchButton = document.getElementById("checkbox");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : (prefersDarkScheme ? "dark" : "light");
const checkbox = document.getElementById("checkbox");

window.addEventListener('DOMContentLoaded', () => setTheme(theme));

switchButton.addEventListener("click", () => toggleTheme());

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  setTheme(theme);
}

function setTheme(mode) {
  if (mode === 'light') {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
    }
    document.body.classList.add("light-theme");
    checkbox.checked = false;
  } else {
    if (document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
    }
    document.body.classList.add("dark-theme");
    checkbox.checked = true;
  }
}