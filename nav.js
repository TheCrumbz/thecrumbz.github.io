const navigation = `
    <div class="nav-item">
        <a href="/index.html" id="nav-about">ABOUT</a>
    </div>

    <div class="nav-item">
        <a href="#" id="nav-games">GAMES</a>
        <div class="nav-dropdown">
            <a href="#" class="dropdown-link">Coming Soon...</a>
        </div>
    </div>

    <div class="nav-item">
        <a href="#" id="nav-systems">SYSTEMS</a>
        <div class="nav-dropdown">
            <a href="#" class="dropdown-link">Inventory Framework</a>
            <a href="#" class="dropdown-link">Interaction Pro</a>
            <a href="#" class="dropdown-link" style="color: var(--accent); border-top: 1px solid var(--border); margin-top: 5px;">+ Request a System</a>
        </div>
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