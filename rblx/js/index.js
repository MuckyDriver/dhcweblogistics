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