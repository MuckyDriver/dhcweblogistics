// Dashboard navigational elements
const navElements = document.getElementsByClassName('dashboard-navigation');
const dashPages = document.getElementsByClassName('dash-page');

// Toggle Collapsing function
const toggleCollapse = document.getElementById('collapse_uncollapse')
let collapsed = true;

toggleCollapse.onclick = function() {
    if (collapsed == true) {
        toggleCollapse.parentElement.classList.remove('closed')
    } else {
        toggleCollapse.parentElement.classList.add('closed')
    }

    collapsed = !collapsed
}

// Functions
function togglePage(reference) {
    for (let i = 0; i < dashPages.length; i++) {
        const dashPage = dashPages[i];
        const pageReference = dashPage.getAttribute('data-pageReference');

        if (pageReference == reference) {
            dashPage.style.display = 'block';
        } else {
            dashPage.style.display = 'none';
        }
    }
}

// Removing styling, like all the active buttons as new place is active now.
function resetButtonStyling() {
    for (let i = 0; i < navElements.length; i++) {
        const buttonElements = navElements[i].getElementsByTagName('button');

        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].classList.remove('active');
        }
    }

    if (collapsed == false) {
        toggleCollapse.parentElement.classList.add('closed')
        collapsed = !collapsed
    };
}

// Looping through all navElements
for (let i = 0; i < navElements.length; i++) {
    const navElement = navElements[i];
    const buttonElements = navElement.getElementsByTagName('button');

    for (let i = 0; i < buttonElements.length; i++) {
        const button = buttonElements[i];
        const reference = button.getAttribute('data-reference');

        function action() {
            resetButtonStyling(); button.classList.add('active')
            togglePage(reference);
        }

        // If the link has window data such as a reference to a page then go to that page.
        if (window.location.hash.split("#")[1] == reference) {
            action();
        }

        button.addEventListener("click", () => { action() })

        // In some cases a keyboard is used to toggle through the pages, this allows it to work for those people.
        button.addEventListener("keypress", (event) => {
            if (event.key === "Enter") { action() }
        });
    }
}