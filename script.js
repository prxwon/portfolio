
document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");
    const today = document.getElementById("today");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (today) {
        today.textContent = new Date().toLocaleDateString("en-IN");
    }

    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("dark");
    }
});

function toggleTheme() {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("portfolio-theme", theme);
}
