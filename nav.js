const navigation = `
    <div class="nav-item">
        <a href="/index.html" id="nav-about">ABOUT</a>
    </div>

    <div class="nav-item">
        <a href="#" id="nav-games">GAMES</a>
        <div class="nav-dropdown">
            <a href="/games/game-template.html" class="dropdown-link">Example Game</a>
        </div>
    </div>

    <div class="nav-item">
        <a href="#" id="nav-systems">SYSTEMS</a>
        <div class="nav-dropdown">
            <a href="/systems/system-template.html" class="dropdown-link">Example System</a>
        </div>
    </div>

    <div class="nav-item" style="margin-left: auto;">
        <a href="https://discordapp.com/users/876862412228284456" target="_blank" class="nav-contact">CONTACT ME</a>
    </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navigation;
        
        // Figure out which page we are on
        const path = window.location.pathname;
        const page = path.split("/").pop();
        
        // Make the correct tab light up blue
        if (page === "index.html" || page === "") {
            document.getElementById("nav-about").classList.add("active");
        } else if (page.includes("game")) { 
            // In the future, if your page has "game" in the title, it lights up the GAMES tab
            document.getElementById("nav-games").classList.add("active");
        } else if (page.includes("system")) {
            // In the future, if your page has "system" in the title, it lights up the SYSTEMS tab
            document.getElementById("nav-systems").classList.add("active");
        }
    }
});