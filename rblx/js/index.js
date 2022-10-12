/* Single Page Handler */
const menu_area = document.getElementById('menu_area')
let menuItems = menu_area.getElementsByTagName('a')

/* Content Pages */
const content_page = document.getElementById('content')
const contents = content_page.getElementsByClassName('content')
let transitionSpeed = 500; // ms

/* Load Content & Page */
function updateMenuButtons(windowData) {
    let pageToOpen = windowData

    for (let i = 0; i < menuItems.length; i++) {
        let menuItem = menuItems[i]
        let IdReference = menuItem.id.split('_')[1]

        if (IdReference == pageToOpen) {
            menuItem.classList.add('active')
        } else { 
            menuItem.classList.remove('active') 
        }
    }
}

function updateContent(windowData) {
    content_page.classList.add('transition')

    setTimeout(function() {
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i]
            let pageIdentity = content.id.split('_')[1]
    
            if (pageIdentity == windowData) { content.style.display = 'block';
            } else { content.style.display = 'none'; }
        }

        setTimeout(function() {
            content_page.classList.remove('transition')
        }, transitionSpeed/2)
    }, transitionSpeed/2)
}

let load_pages = function() {
    let windowData = window.location.hash.split('#')[1]

    if (windowData) {
        document.title = "Claasgreeneye's " + windowData.charAt(0).toUpperCase() + windowData.slice(1)
        updateMenuButtons(windowData); updateContent(windowData)
    }
}

window.onhashchange = function() { load_pages() }

/* Load a game */
const loading_games_div = document.getElementById('loading_games_div')
const viewButtonList = document.getElementsByClassName('play')
const game_viewer = document.getElementById('gameViewer')
const close_viewer = document.getElementById('close_viewer')

let elements = {
    thumbnail: document.getElementById('thumbnail'),
    title: document.getElementById('title'),
    description: document.getElementById('description'),
    rating: document.getElementById('rating'),
    awards: document.getElementById('awards'),
    faves: document.getElementById('favourites'),
    visits: document.getElementById('visits'),
    author: document.getElementById('author'),
    buildingTime: document.getElementById('buildingtime'),
    lastUpdated: document.getElementById('lastUpdated'),
    revenue_usd: document.getElementById('revenue-usd'),
    revenue_robux: document.getElementById('revenue-robux'),
    release_year: document.getElementById('release-yr'),
    visability: document.getElementById('visability-listing'),
    serverSize: document.getElementById('server-size')
}

close_viewer.onclick = function() {
    game_viewer.style.display = 'none'
}

for (let i = 0; i <  viewButtonList.length; i++) {
    const viewButton = viewButtonList[i]
    let id = viewButton.id.split("=")[1]

    if (id) {
        viewButton.onclick = async function() {
            loading_games_div.style.display = 'flex'
            
            let url = './games/' + id + '.json'
            let gameData = await (await fetch(url)).json()

            elements.thumbnail.style.backgroundSize = 'cover'
            elements.thumbnail.style.backgroundImage = 'url("' + gameData['imgThumbnailUrl'] + '")'
            elements.title.innerText = gameData['title']
            elements.description.innerText = gameData['description']
            elements.lastUpdated.innerText = 'Last Updated: ' + gameData['pagelastupdated']

            elements.rating.getElementsByTagName('span')[0].innerText = gameData['rating']
            elements.awards.getElementsByTagName('span')[0].innerText = gameData['awards']
            elements.faves.getElementsByTagName('span')[0].innerText = gameData['favorites']

            elements.visits.getElementsByTagName('span')[0].innerText = gameData['visits']
            elements.author.getElementsByTagName('span')[0].innerText = gameData['author']
            elements.buildingTime.getElementsByTagName('span')[0].innerText = gameData['buildingtime']

            elements.release_year.getElementsByTagName('span')[0].innerText = gameData['releaseYear']
            elements.serverSize.getElementsByTagName('span')[0].innerText = gameData['serverSize']
            elements.visability.getElementsByTagName('span')[0].innerText = gameData['visibility']

            elements.revenue_usd.getElementsByTagName('span')[0].innerText = gameData['revenueUsd']
            elements.revenue_robux.getElementsByTagName('span')[0].innerText = gameData['revenueRbx']

            game_viewer.style.display = 'block'
            loading_games_div.style.display = 'none'
        }
    }
 }

 /* Custom Right Click Menu */
const contextMenu = document.getElementById('user-context-menu')
const scope = document.querySelector('body');
let offsetContext = 10

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault()
    contextMenu.style.top = (event.clientY + offsetContext) + "px";
    contextMenu.style.left = (event.clientX + offsetContext) + "px";
    contextMenu.classList.remove("visible")

    setTimeout(() => {
        contextMenu.classList.add("visible")
    })
});

scope.addEventListener("click", (click) => {
    if (click.target.offsetParent != contextMenu) {
        contextMenu.classList.remove('visible')
    }
})

const $context_github = document.getElementById('$context-github')
const $context_roblox = document.getElementById('$context-roblox')
const $context_discord = document.getElementById('$context-discord')
const $context_refresh = document.getElementById('$context-refresh')
const $context_fullscreen = document.getElementById('$context-fullscreen')
const $context_exitfullscreen = document.getElementById('$context-exitFullscreen')

$context_github.onmouseup, $context_github.onclick = function() {
    window.open('https://github.com/MuckyDriver/dhcweblogistics/tree/main/rblx', '_blank')
}

$context_roblox.onmouseup, $context_roblox.onclick = function() {
    window.open('https://rblx.name/180336420', '_blank')
}

$context_discord.onmouseup, $context_discord.onclick = function() {
    window.open('https://discord.gg/w2BySSGg2r', '_blank')
}

$context_refresh.onmouseup, $context_refresh.onclick = function() {
    location.reload()
}

let de = document.documentElement
$context_fullscreen.onmouseup, $context_fullscreen.onclick = function() {
    $context_fullscreen.style.display = 'none'
    $context_exitfullscreen.style.display = 'grid'

    if (de.requestFullscreen) { de.requestFullscreen()
    } else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen()
    } else if (de.msRequestFullscreen) { de.msRequestFullscreen() }
}

$context_exitfullscreen.onmouseup, $context_exitfullscreen.onclick = function() {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    }
}

addEventListener('fullscreenchange', (event) => { 
    if (!document.fullscreenElement) {
        $context_fullscreen.style.display = 'grid'
        $context_exitfullscreen.style.display = 'none'
    }
});

/* Game Grid Loadup (Test) + Load Page */
window.onload = function() {
    load_pages()

    for (let i = 0; i < viewButtonList.length; i++) {
        const gameButton = viewButtonList[i]
        const gameAbout = gameButton.parentElement.getElementsByClassName('about')[0];
        const gameDescription = gameAbout.getElementsByClassName('desc')[0];
        const gameIcon = gameAbout.getElementsByClassName('icon')[0];
        const gameThumbnail = gameAbout.getElementsByClassName('thumbnail')[0];

        (async function() {
            let id = gameButton.id.split('=')[1]
            let url = './games/' + id + '.json'
            let gameData = await (await fetch(url)).json()

            if (gameData) {
                gameDescription.innerText = gameData['description']
                gameIcon.src = gameData['imgIconUrl']
                gameThumbnail.src = gameData['imgThumbnailUrl']
            }
        })()
    }
}

/* Project Menu Items + Page Handling */
const portalMenu = document.getElementById('portal-menu');
const portalMenuItems = portalMenu.getElementsByTagName('a')
const portalPages = document.getElementById('portal-pages')
const portalPageItems = portalPages.getElementsByClassName('portal-page')

function togglePortalPage(reference) {
    for (let i = 0; i < portalPageItems.length; i++) {
        const portalPage = portalPageItems[i] 
        let toRef = portalPage.id

        if (reference == toRef) {
            portalPage.style.display = 'block';
        } else {
            portalPage.style.display = 'none'
        }
    }

    for (let i = 0; i < portalMenuItems.length; i++) {
        const portalItem = portalMenuItems[i]

        if (portalItem.id.split("-")[1] == reference) {
            portalItem.classList.add('active')
        } else {
            portalItem.classList.remove('active')
        }

        
    }
}

for (let i = 0; i < portalMenuItems.length; i++) {
    const portalItem = portalMenuItems[i]
    let menuReference = portalItem.id.split('-')[1]

    portalItem.onclick = function() {
        togglePortalPage(menuReference)
    }
}