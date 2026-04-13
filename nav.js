const username = 'TheCrumbz';
const repo = 'thecrumbz.github.io';
const folder = 'projects';

async function buildNav() {
    const navElement = document.querySelector('nav');
    
    // 1. Add the Home link first
    navElement.innerHTML = `<a href="/index.html">ABOUT</a>`;

    try {
        // 2. Fetch the list of files in the /projects folder from GitHub's API
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${folder}`);
        const files = await response.json();

        // 3. Loop through every file found
        files.forEach(file => {
            if (file.name.endsWith('.html')) {
                // Clean up the name (e.g., "casino-game.html" becomes "CASINO GAME")
                const displayName = file.name.replace('.html', '').replace(/-/g, ' ').toUpperCase();
                
                navElement.innerHTML += `<a href="/${folder}/${file.name}">${displayName}</a>`;
            }
        });
    } catch (error) {
        console.error("Could not auto-load projects:", error);
    }
}

document.addEventListener("DOMContentLoaded", buildNav);
