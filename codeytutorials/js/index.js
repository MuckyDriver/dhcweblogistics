// Variables and Constants
const mobileMenu = document.getElementById('mobile-menu');
const tutorialButtons = document.getElementsByClassName('tutorial-button');
let isOpen = true;
let websiteName = "CodeyTutorial • "

// Options
const programmedOptions = {
    setTheme: setTheme
}

// Page Handler
const pages = document.getElementsByClassName('page');

function updateButtons(page, windowData, reference) {
    let buttonFromRef = document.getElementById("button." + page.id)
    let mobileBtnFromRef = document.getElementById("mobile." + page.id)

    if (buttonFromRef && mobileBtnFromRef) {
        if (windowData == reference) { 
            buttonFromRef.classList.add('active')
            mobileBtnFromRef.classList.add('active')
        } else {
            buttonFromRef.classList.remove('active')
            mobileBtnFromRef.classList.remove('active')
        }
    }
}

function loadPage() {
    let windowData = window.location.hash.split('#')[1]

    if (isOpen) {
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        isOpen = !isOpen
    }

    if (windowData) {
        let options = windowData.split('&')
        let option = options[1]

        if (option) { 
            windowData = options[0];
            programmedOptions[option]()
        }

        let dataToUpperCase = windowData.charAt(0).toUpperCase() + windowData.slice(1);

        for (let i = 0; i < pages.length; i++) {
            let page = pages[i] 
            let customTitle = page.getAttribute('customTitle')
            let reference = page.id.split('.')[1] 

            updateButtons(page, windowData, reference)
            if (windowData == reference) {
                page.style.display = 'block';

                if (customTitle) {
                    document.title = (websiteName + customTitle)
                } else { document.title = (websiteName + dataToUpperCase )}
            } else {
                page.style.display = 'none';
            }
        }
    }
}

window.onload = function() { loadPage() }
window.onhashchange = function() { loadPage() }

// Mobile Menu
let mobileMenuBtn = document.getElementById('hamburger-mobile-menu');
let mobileMenuClose = document.getElementById('hamburger-controls-close')

mobileMenuBtn.onclick = function() {
    if (!isOpen) {
        mobileMenu.style.display = 'block';
        document.body.style.overflowY = 'hidden';
        isOpen = !isOpen
    }
}

mobileMenuClose.onclick = function() {
    if (isOpen) {
        mobileMenu.style.display = 'none';
        document.body.style.overflowY = 'scroll';
        isOpen = !isOpen
    }
}

/* Dark/Light Theme Options */
const metaTheme = document.getElementById('meta-theme')
let bools = { [false]: 'light', [true]: 'dark' }
let bool = false

function setTheme() {
    bool = !bool
    metaTheme.setAttribute('content', bools[bool]);
    document.body.setAttribute('color-scheme', bools[bool])
}

/* Tutorial Keyword Search */
const searchButton = document.getElementById('search-btn-tutorial')
const searchKeywordInput = document.getElementById('search-input-tutorial')

function tutorialSearch() {
    let inputData = searchKeywordInput.value.toLowerCase();
    let inputDataArray = inputData.split(" ");

    for (let i = 0; i < tutorialButtons.length; i++) {
        let tutorialButton = tutorialButtons[i]
        let keywords = tutorialButton.getAttribute('keywords');

        if (keywords && inputData != "" || null) {
            let keywordsArray = keywords.split(" ")

            if (inputDataArray.some(element => {return keywordsArray.includes(element)})) {
                tutorialButton.style.display = 'block';
            } else {
                tutorialButton.style.display = 'none';
            }
        } else {
            tutorialButton.style.display = 'block';
        }
    }
}

searchButton.onclick = function() { tutorialSearch() }
searchKeywordInput.onchange = function() { tutorialSearch() }

/* Tutorial Button */
const tutorialsPage = document.getElementById('test.tutorials')

for (let i = 0; i < tutorialButtons.length; i++) {
    let tutorialBtn = tutorialButtons[i]
    
    tutorialBtn.onclick = function() {
        let tutorialPageId = tutorialBtn.id

        window.location.hash = tutorialPageId
    }
}

/* Tutorial Anchor Feature */
const tutorialAnchorLists = document.getElementsByClassName('tutorial-anchor')

for (let i = 0; i < tutorialAnchorLists.length; i++) {
    const tutorialAnchor = tutorialAnchorLists[i]
    const tutorialAnchorLinkages = tutorialAnchor.getElementsByTagName('a')

    for (let i = 0; i < tutorialAnchorLinkages.length; i++) {
        let tutorialLinkage = tutorialAnchorLinkages[i]
        let linkageGoTo = tutorialLinkage.getAttribute('goto')

        tutorialLinkage.onclick = function() {
            const anchorTitle = document.getElementById(linkageGoTo)

            if (anchorTitle) {
                window.scrollTo(0, anchorTitle.offsetTop - 12)
            }
        }
    }
}
