// Simple page animation

document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    const heroVisual = document.querySelector(".hero-visual");

    heroText.style.opacity = "0";
    heroVisual.style.opacity = "0";

    heroText.style.transform = "translateY(20px)";
    heroVisual.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroText.style.transition = "0.8s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 150);

    setTimeout(() => {
        heroVisual.style.transition = "0.8s ease";
        heroVisual.style.opacity = "1";
        heroVisual.style.transform = "translateY(0)";
    }, 350);
});
