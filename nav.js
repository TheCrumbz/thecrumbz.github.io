const navigation = `
    <a href="/index.html" id="nav-about">ABOUT</a>
    <a href="/projects/project_template.html" id="nav-template">EXAMPLE PROJECT</a>
`;

document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navigation;
        const path = window.location.pathname;
        const page = path.split("/").pop();
        
        if (page === "index.html" || page === "") {
            document.getElementById("nav-about").classList.add("active");
        } else if (page === "casino.html") {
            document.getElementById("nav-casino").classList.add("active");
        }
    }
});
