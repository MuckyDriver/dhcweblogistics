// Mobile Menu Controls
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('close-mobile-menu');
let open = false;

function toggleMobileMenu() {
    if (open) {
        mobileMenu.classList.remove('open'); // Adding 'closed' class will transition hide the mobile menu.
    } else {
        mobileMenu.classList.add('open'); // Removing 'closed' class will transition show the mobile menu.
    }

    open = !open;
};

mobileMenuBtn.addEventListener('click', toggleMobileMenu) // Event is fired after mobileMenuBtn is clicked
mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu) // Event is fired after mobileMenuCloseBtn is clicked

// Open Project - go to project
const projectList = document.getElementById('project-list');
const projectUrls = {
    [3]: "https://www.roblox.com/games/12633113230/",
    [4]: "https://muckydriver.net/",
    [5]: "https://www.roblox.com/games/12468321078/"
}

if (projectList) {
    const projectItems = projectList.getElementsByClassName('project-item');

    for (let i = 0; i < projectItems.length; i++) {
        let projectItem = projectItems[i]
        let url = projectUrls[projectItem.id]
    
        function goTo() {
            if (url) { window.open(url) };
        }
    
        projectItem.onclick = function() { goTo() };

        // There is a chance if a user is only using keyboard then we need to check when they press enter on the project item:
        projectItem.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                goTo()
            }
        });
    }
}

// Mobile Device dropdowns are automatically closed.
const details = document.getElementsByTagName('details');
const dropdownExtra = document.getElementsByClassName('dropdown-extra');

for (let i = 0; i < dropdownExtra.length; i++) {
    let dropdown = dropdownExtra[i]; // Assigning the dropdown element via the dropdownExtra class array.
    let statement = (document.body.offsetWidth <= 600); // A statement which returns false/true depending if the offsetWidth is smaller than the value.

    dropdown.open = !statement; // It will set the open attribute to the opposite value of {statement}. 
};
