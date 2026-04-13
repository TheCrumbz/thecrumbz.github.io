// This script injects the navigation menu into any page with a <nav> tag
const navigation = `
    <a href="index.html" id="nav-about">ABOUT</a>
    <a href="casino.html" id="nav-casino">CASINO GAME</a>
    <a href="shooter.html" id="nav-shooter">MULTIPLAYER SHOOTER</a>
`;

// Wait for the page to load, then find the <nav> element and fill it
document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navigation;

        // Automatically highlight the active link based on the URL
        const path = window.location.pathname;
        const page = path.split("/").pop();
        
        if (page === "index.html" || page === "") {
            document.getElementById("nav-about").classList.add("active");
        } else if (page === "casino.html") {
            document.getElementById("nav-casino").classList.add("active");
        } else if (page === "shooter.html") {
            document.getElementById("nav-shooter").classList.add("active");
        }
    }
});
