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
let load_pages = function() {
    let window_data = window.location.hash.split('#')[1]

    if (window_data == 'games') {
        styles.games.display = 'block'; styles.muckydriver.display = 'none'; styles.socials.display = 'none'; 
        document.title = "Claasgreeneye's Games"

        for (let i = 0; i <  menuItems.length; i++) {
            let menuItem = menuItems[i] 
            let Idref = menuItem.id.split('_')[1]

            if (Idref == 'games') {
                menuItem.classList.add('active')
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/roblox_active.png'
            } else if (Idref == 'socials') {
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/connect_white.png'
                menuItem.classList.remove('active')
            } else { menuItem.classList.remove('active') }
        } 
    } else if (window_data == 'socials') {
        styles.games.display = 'none'; styles.muckydriver.display = 'none'; styles.socials.display = 'block'; 
        document.title = "Claasgreeneye's Socials"

        for (let i = 0; i <  menuItems.length; i++) {
            let menuItem = menuItems[i] 
            let Idref = menuItem.id.split('_')[1]

            if (Idref == 'socials') {
                menuItem.classList.add('active')
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/connect_active.png'
            } else if (Idref == 'games') {
                menuItem.getElementsByTagName('img')[0].src = 'img/icons/roblox_white.png'
                menuItem.classList.remove('active')
            } else { menuItem.classList.remove('active') }
        } 
    } else if (window_data == 'muckydriver') {
        styles.games.display = 'none'; styles.muckydriver.display = 'block'; styles.socials.display = 'none'; 
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

/* Load a game */
const loading_games_div = document.getElementById('loading_games_div')
const viewButtonList = document.getElementsByClassName('play')
const game_viewer = document.getElementById('gameViewer')

let elements = {
    thumbnail = document.getElementById('thumbnail'),
    title = document.getElementById('title'),
    description = document.getElementById('thumbnail'),

    rating = document.getElementById('rating'),
    awards = document.getElementById('awards'),
    faves = document.getElementById('favourites'),

    visits = document.getElementById('visits'),
    author = document.getElementById('title'),
    buildingTime = document.getElementById('buildingtime'),

    lastUpdated = document.getElementById('lastUpdated')
}

for (let i = 0; i <  viewButtonList.length; i++) {
    const viewButton = viewButtonList[i]
    let id = viewButton.id.split("=")[1]

    if (id) {
        viewButton.onclick = async function() {
            let url = './games/' + id + '.json'
            let gameData = await (await fetch(url)).json()

            elements.thumbnail.style.backgroundSize = 'cover'
            elements.thumbnail.style.backgroundImage = 'url("' + gameData['imgThumbnailUrl'] + '")'
            elements.title.innerText = gameData['title']
            elements.description.innerText = gameData['description']
            elements.lastUpdated.innerText = 'Last Updated: ' + gameData['pagelastupdated']

            elements.rating.getElementsByTagName('span')[1].innerText = gameData['rating']
            elements.awards.getElementsByTagName('span')[1].innerText = gameData['awards']
            elements.faves.getElementsByTagName('span')[1].innerText = gameData['favorites']

            elements.visits.getElementsByTagName('span')[1].innerText = gameData['visits']
            elements.author.getElementsByTagName('span')[1].innerText = gameData['author']
            elements.buildingTime.getElementsByTagName('span')[1].innerText = gameData['buildingtime']

            game_viewer.style.display = 'block'
        }
    }
 }