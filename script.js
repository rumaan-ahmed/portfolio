// Show a message when the website loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Rumaan’s Portfolio!");
});

// Smooth scroll for navigation links (simple & common)
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Simple button effect (if any button exists)
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.opacity = "0.8";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.opacity = "1";
    });
});

// A simple greeting popup (optional)
function greetUser() {
    alert("Thank you for visiting my portfolio!");
}
