const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const dynamicRole = document.getElementById("dynamicRole");
const revealElements = document.querySelectorAll(".reveal");
const techLayer = document.querySelector(".layer.tech");
const agriLayer = document.querySelector(".layer.agri");
const blendLayer = document.querySelector(".layer.blend");
const gridLayer = document.querySelector(".grid");

const roles = [
    "Precision Agriculture",
    "GIS Crop Intelligence",
    "Smart Irrigation Systems",
    "Data-Driven Farming"
];

let roleIndex = 0;

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    siteHeader.classList.toggle("scrolled", y > 20);

    if (techLayer) techLayer.style.transform = `translateY(${y * 0.05}px)`;
    if (agriLayer) agriLayer.style.transform = `translateY(${y * 0.03}px)`;
    if (blendLayer) blendLayer.style.transform = `translateY(${y * 0.04}px)`;
    if (gridLayer) gridLayer.style.transform = `translateY(${y * 0.08}px)`;
});

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
}

if (dynamicRole) {
    setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        dynamicRole.style.opacity = "0";

        setTimeout(() => {
            dynamicRole.textContent = roles[roleIndex];
            dynamicRole.style.opacity = "1";
        }, 180);
    }, 2300);
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach((element) => revealObserver.observe(element));
