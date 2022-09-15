/* Single Page Handler */
const menu_area = document.getElementById('menu_area')
let menuItems = menu_area.getElementsByTagName('a')

/* Contents */
const content_games = document.getElementById('content_games')
const content_muckydriver = document.getElementById('content_muckydriver')
const content_socials = document.getElementById('content_socials')

let styles = {
    games: content_games.style,
    muckydriver: content_muckydriver.style,
    socials: content_socials.style
}

/* Load Content & Page */
function adaptToPage(Idref, menuItem, pageToOpen, ignoreThis, imagery) {
    if (Idref == pageToOpen) {
        menuItem.classList.add('active')
        menuItem.getElementsByTagName('img')[0].src = imagery.activated
    } else if (Idref == ignoreThis) {
        menuItem.getElementsByTagName('img')[0].src = imagery.off
        menuItem.classList.remove('active')
    } else { menuItem.classList.remove('active') }
}

function toggleContent(contentOpen, contentsToClose) {
    styles[contentOpen].display = 'block';

    for (let i = 0; i < contentsToClose.length; i++) {
        styles[contentsToClose[i]].display = 'none'
    }
}

let load_pages = function() {
    let window_data = window.location.hash.split('#')[1]

    if (window_data == 'games') {
        toggleContent('games', ['socials', 'muckydriver'])
        document.title = "Claasgreeneye's Games"

        for (let i = 0; i <  menuItems.length; i++) {
            let menuItem = menuItems[i] 
            let Idref = menuItem.id.split('_')[1]

            adaptToPage(Idref, menuItem, 'games', 'socials', {activated: 'img/icons/roblox_active.png', off: 'img/icons/connect_white.png'})
        } 
    } else if (window_data == 'socials') {
        toggleContent('socials', ['games', 'muckydriver'])
        document.title = "Claasgreeneye's Socials"

        for (let i = 0; i <  menuItems.length; i++) {
            let menuItem = menuItems[i] 
            let Idref = menuItem.id.split('_')[1]

            adaptToPage(Idref, menuItem, 'socials', 'games', {activated: 'img/icons/connect_active.png', off: 'img/icons/roblox_white.png'})
        } 
    } else if (window_data == 'muckydriver') {
        toggleContent('muckydriver', ['games', 'socials'])
        document.title = "Claasgreeneye's Project"

        for (let i = 0; i <  menuItems.length; i++) {
            let menuItem = menuItems[i] 
            let Idref = menuItem.id.split('_')[1]

            if (Idref == 'muckydriver') {
                menuItem.classList.add('active')
            } else if (Idref == 'socials') {
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/connect_white.png'
                menuItem.classList.remove('active')
            } else {
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/roblox_white.png'
                menuItem.classList.remove('active')
            }
        } 
    }
}

window.onhashchange = function() { load_pages() }
window.onload = function() { load_pages() }

/* Game Grid Load Data */
function loadInfo(id, content) {
    let item = this
    let url = './games/' + id + '.json'
    
    (async function() {
        let gameData = await (await fetch(url)).json()
        item.innerText = gameData[content]
    })()
}

async function loadImg(id, content) {
    let url = './games/' + id + '.json'
    let gameData = await (await fetch(url)).json()

    if (gameData) {
        this.src = gameData[content]
    }
}

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
    revenue_robux: document.getElementById('revenue-robux')
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

            elements.revenue_usd.getElementsByTagName('span')[0].innerText = gameData['revenueUsd']
            elements.revenue_robux.getElementsByTagName('span')[0].innerText = gameData['revenueRbx']

            game_viewer.style.display = 'block'
            loading_games_div.style.display = 'none'
        }
    }
 }