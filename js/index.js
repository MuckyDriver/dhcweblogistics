// Mobile Menu Controls
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('close-mobile-menu');
let open = false;

mobileMenuBtn.onclick = function() {
    if (open == false) {
        mobileMenu.classList.remove('closed'); // Removing 'closed' class will transition show the mobile menu.
        open = true;
    }
}

mobileMenuCloseBtn.onclick = function() {
    if (open == true) {
        mobileMenu.classList.add('closed'); // Adding 'closed' class will transition hide the mobile menu.
        open = false;
    }
}

// Open Project - go to project
const projectList = document.getElementById('project-list');
const projectItems = projectList.getElementsByClassName('project-item')
const projectUrls = {
    [3]: "https://www.roblox.com/games/12633113230/"
}

for (let i = 0; i < projectItems.length; i++) {
    let projectItem = projectItems[i]
    let url = projectUrls[projectItem.id]

    function goTo() {
        if (url) {
            window.open(url)
        };
    }

    projectItem.onclick = function() { goTo() };
} 