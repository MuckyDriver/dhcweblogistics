const btn = document.getElementById('toggleMenu')
const menu = document.getElementById('mobileMenu') 

var openIt = false; 

btn.onclick = function() {
    if (openIt == false) {
        openIt = true; 
        menu.style.display = 'block'
        btn.classList.add('active-btn')
    } else {
        openIt = false;
        menu.style.display = 'none'
        btn.classList.remove('active-btn')
    }
}

const offset = 81
window.onresize = function() {
    if (window.innerWidth >= 676 && openIt == true) {
        openIt = false;
        menu.style.display = 'none'
        btn.classList.remove('active-btn')
    } 

    var sizeY = window.innerHeight
    menu.style.height = (sizeY-offset) + "px"
}